import React, {Component} from "react";
import {Root, Routes, addPrefetchExcludes} from 'react-static'
import {Link, Router} from '@reach/router'
//import FancyDiv from 'components/FancyDiv'
import Dynamic from 'containers/Dynamic'
import './App.css'
import {createMedia} from '@artsy/fresnel'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment, SemanticICONS,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */


const {MediaContextProvider, Media} = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading: React.FC<any> = ({mobile}) => (
    <Container text>
        <Header
            as='h1'
            content='Community Garden App'
            inverted
            style={{
                fontSize: '3rem',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5rem' : '2rem',
            }}
        />
        <Header
            as='h2'
            content='organize, manage, connect to local gardening initiatives'
            inverted
            style={{
                fontSize: mobile ? '1.5rem' : '1.7rem',
                fontWeight: 'normal',
                marginTop: mobile ? '.5rem' : '1.5rem',
            }}
        />
        <Button style={{display: 'none'}} primary size='huge'>
            Get the App
            <Icon name={'right arrow' as SemanticICONS}/>
        </Button>
    </Container>
)

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component<any, any> {
    state = { fixed: undefined}

    hideFixedMenu = () => this.setState({fixed: false})
    showFixedMenu = () => this.setState({fixed: true})

    render() {
        const {children} = this.props
        const {fixed} = this.state

        return (
            <Media greaterThan='mobile'>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        style={{
                            backgroundImage: 'url("/jtilsch_06_2021_garden_q60.JPG")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'top -100px center',
                            padding: '1rem 0 3rem'}}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                <Menu.Item as={Link} to='/' active>
                                    Project
                                </Menu.Item>
                                <Menu.Item as={Link} to='/blog'>Blog</Menu.Item>
                                <Menu.Item as={Link} to='/milestones'>Milestones</Menu.Item>
                                <Menu.Item as={Link} to='/team'>Team</Menu.Item>
                            </Container>
                        </Menu>
                        <HomepageHeading/>
                    </Segment>
                </Visibility>

                {children}
            </Media>
        )
    }
}

class MobileContainer extends Component<any, any> {
    state = { sidebarOpened: undefined}

    handleSidebarHide = () => this.setState({sidebarOpened: false})

    handleToggle = () => this.setState({sidebarOpened: true})

    render() {
        const {children} = this.props
        const {sidebarOpened} = this.state

        // as={Sidebar.Pushable}
        return (
            <Media  at='mobile'>
                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={sidebarOpened}
                    >
                        <Menu.Item as={Link} to='/' active>
                            Project
                        </Menu.Item>
                        <Menu.Item as={Link} to='/blog'>Blog</Menu.Item>
                        <Menu.Item as={Link} to='/milestones'>Milestones</Menu.Item>
                        <Menu.Item as={Link} to='/team'>Team</Menu.Item>
                        <Menu.Item as='a' active>
                            Project
                        </Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={sidebarOpened}>
                        <Segment
                            inverted
                            textAlign='center'
                            style={{

                                backgroundImage: 'url("/jtilsch_06_2021_garden_q60.JPG")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'top center',
                                padding: '1rem 0 2rem'}}
                            vertical
                        >
                            <Container>
                                <Menu inverted pointing secondary size='large'>
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon name='sidebar'/>
                                    </Menu.Item>
                                    <Menu.Item position='right'>
                                    </Menu.Item>
                                </Menu>
                            </Container>
                            <HomepageHeading mobile/>
                        </Segment>

                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Media>
        )
    }
}

const ResponsiveContainer: React.FC<any> = ({children}) => (
    /* Heads up!
     * For large applications it may not be best option to put all page into these containers at
     * they will be rendered twice for SSR.
     */
    <MediaContextProvider>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </MediaContextProvider>
)

const HomepageLayout: React.FC<any> = () => (
    <Root>
        <ResponsiveContainer>

            <Segment style={{padding: '4rem 0'}} vertical>
                <Container text>
                    <React.Suspense fallback={<em>Loading...</em>}>
                        <Router>
                            <Dynamic path="dynamic"/>
                            <Routes path="*"/>
                        </Router>
                    </React.Suspense>
                </Container>
            </Segment>


        </ResponsiveContainer>
    </Root>
)


export default { HomepageLayout};
