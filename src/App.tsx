import _ from 'lodash'
import React, {Component, CSSProperties} from "react";
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from '@reach/router'
//import FancyDiv from 'components/FancyDiv'
import Dynamic from 'containers/Dynamic'
import './App.css'

import 'semantic-ui-css/semantic.min.css'

import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility
} from "semantic-ui-react";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App2() {
  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dynamic">Dynamic</Link>
      </nav>
      <div className="content">
        <div>
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
      </div>
    </Root>
  )
}


const menuStyle = {
    border: "none",
    borderRadius: 0,
    boxShadow: "none",
    marginBottom: "1em",
    marginTop: "4em",
    transition: "box-shadow 0.5s ease, padding 0.5s ease"
};

const fixedMenuStyle = {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)"
};

const overlayStyle = {
    float: "left",
    margin: "0em 3em 1em 0em"
};

const fixedOverlayStyle = {
    ...overlayStyle,
    position: "fixed",
    top: "80px",
    zIndex: 10
};

const overlayMenuStyle = {
    position: "relative",
    left: 0,
    transition: "left 0.5s ease"
};

const fixedOverlayMenuStyle = {
    ...overlayMenuStyle,
    left: "800px"
};

const LeftImage = () => (
    <Image
        floated="left"
        size="medium"
        src="/static/images/wireframe/square-image.png"
        style={{ margin: "2em 2em 2em -4em" }}
    />
);

const RightImage = () => (
    <Image
        floated="right"
        size="medium"
        src="/static/images/wireframe/square-image.png"
        style={{ margin: "2em -4em 2em 2em" }}
    />
);

const Paragraph = () => (
    <p>
        {[
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ",
            "tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ",
            "semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ",
            "ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean ",
            "fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. ",
            "Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor ",
            "neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, ",
            "accumsan porttitor, facilisis luctus, metus"
        ].join("")}
    </p>
);

type StickyLayoutState = {
    menuFixed: Boolean,
    overlayFixed: Boolean,
    overlayRect?: Object
}

class StickyLayout extends Component<any, StickyLayoutState> {
    state: StickyLayoutState = {
        menuFixed: false,
        overlayFixed: false
    };

    handleOverlayRef = c => {
        const { overlayRect } = this.state;

        if (!overlayRect) {
            this.setState({
                overlayRect: _.pick(c.getBoundingClientRect(), "height", "width")
            });
        }
    };

    stickOverlay = () => this.setState({ overlayFixed: true });

    stickTopMenu = () => this.setState({ menuFixed: true });

    unStickOverlay = () => this.setState({ overlayFixed: false });

    unStickTopMenu = () => this.setState({ menuFixed: false });

    render() {
        const { menuFixed, overlayFixed, overlayRect } = this.state;

        return (
            <Root>
                <div>
                    {/* Heads up, style below isn't necessary for correct work of example, simply our docs defines other
            background color.
          */}
                    <style>{`
          html, body {
            background: #fff;
          }
        `}</style>

                    <Container text style={{marginTop: "2em"}}>
                        <Header as="h1">Sticky Example</Header>
                        <p>
                            This example shows how to use lazy loaded images, a sticky menu, and
                            a simple text container
                        </p>
                    </Container>

                    {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
            gone beyond the scope of visibility
          */}
                    <Visibility
                        onBottomPassed={this.stickTopMenu}
                        onBottomVisible={this.unStickTopMenu}
                        once={false}
                    >
                        <Menu
                            borderless
                            fixed={"top"}
                            style={menuFixed ? fixedMenuStyle : menuStyle}
                        >
                            <Container text>
                                <Menu.Item>
                                    <Image size="mini" src="/static/images/logo.png"/>
                                </Menu.Item>
                                <Menu.Item header><Link to='/'>Community Garden App</Link></Menu.Item>
                                <Menu.Item as="a"><Link to='/blog'>Blog</Link></Menu.Item>
                                <Menu.Item as="a"><Link to='/articles'>Articles</Link></Menu.Item>

                                <Menu.Menu position="right">
                                    <Dropdown text="Dropdown" pointing className="link item">
                                        <Dropdown.Menu>
                                            <Dropdown.Item>List Item</Dropdown.Item>
                                            <Dropdown.Item>List Item</Dropdown.Item>
                                            <Dropdown.Divider/>
                                            <Dropdown.Header>Header Item</Dropdown.Header>
                                            <Dropdown.Item>
                                                <i className="dropdown icon"/>
                                                <span className="text">Submenu</span>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>List Item</Dropdown.Item>
                                                    <Dropdown.Item>List Item</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown.Item>
                                            <Dropdown.Item>List Item</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Menu.Menu>
                            </Container>
                        </Menu>
                    </Visibility>

                    <Container text>
                        {_.times(3, i => (
                            <Paragraph key={i}/>
                        ))}

                        {/* Example with overlay menu is more complex, SUI simply clones all elements inside, but we should use a
              different approach.

              An empty Visibility element controls the need to change the fixing of element below, it also uses height
              and width params received from its ref for correct display.
            */}
                        <Visibility
                            offset={80}
                            once={false}
                            onTopPassed={this.stickOverlay}
                            onTopVisible={this.unStickOverlay}
                            style={overlayFixed ? {...overlayStyle, ...overlayRect} : {}}
                        />

                        <div
                            ref={this.handleOverlayRef}
                            style={(overlayFixed ? fixedOverlayStyle : overlayStyle) as CSSProperties}
                        >
                            <Menu
                                icon="labeled"
                                style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
                                vertical
                            >
                                <Menu.Item>
                                    <Icon name="twitter"/>
                                    Twitter
                                </Menu.Item>

                                <Menu.Item>
                                    <Icon name="facebook"/>
                                    Share
                                </Menu.Item>

                                <Menu.Item>
                                    <Icon name="mail"/>
                                    Email
                                </Menu.Item>
                            </Menu>
                        </div>

                        {_.times(3, i => (
                            <Paragraph key={i}/>
                        ))}
                        <LeftImage/>

                        <Paragraph/>
                        <RightImage/>

                        {_.times(4, i => (
                            <Paragraph key={i}/>
                        ))}
                        <LeftImage/>

                        <Paragraph/>
                        <RightImage/>

                        {_.times(2, i => (
                            <Paragraph key={i}/>
                        ))}
                    </Container>

                    <Segment
                        inverted
                        style={{margin: "5em 0em 0em", padding: "5em 0em"}}
                        vertical
                    >
                        <Container textAlign="center">
                            <React.Suspense fallback={<em>Loading...</em>}>
                                <Router>
                                    <Dynamic path="dynamic" />
                                    <Routes path="*" />
                                </Router>
                            </React.Suspense>
                            <Divider />
                            <Grid columns={4} divided stackable inverted>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Header inverted as="h4" content="Group 1"/>
                                        <List link inverted>
                                            <List.Item as="a">Link One</List.Item>
                                            <List.Item as="a">Link Two</List.Item>
                                            <List.Item as="a">Link Three</List.Item>
                                            <List.Item as="a">Link Four</List.Item>
                                        </List>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header inverted as="h4" content="Group 2"/>
                                        <List link inverted>
                                            <List.Item as="a">Link One</List.Item>
                                            <List.Item as="a">Link Two</List.Item>
                                            <List.Item as="a">Link Three</List.Item>
                                            <List.Item as="a">Link Four</List.Item>
                                        </List>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header inverted as="h4" content="Group 3"/>
                                        <List link inverted>
                                            <List.Item as="a">Link One</List.Item>
                                            <List.Item as="a">Link Two</List.Item>
                                            <List.Item as="a">Link Three</List.Item>
                                            <List.Item as="a">Link Four</List.Item>
                                        </List>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header inverted as="h4" content="Footer Header"/>
                                        <p>
                                            Extra space for a call to action inside the footer that
                                            could help re-engage users.
                                        </p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Divider inverted section/>
                            <Image src="/static/images/logo.png" centered size="mini"/>
                            <List horizontal inverted divided link size="small">
                                <List.Item as="a" href="#root">
                                    Site Map
                                </List.Item>
                                <List.Item as="a" href="#root">
                                    Contact Us
                                </List.Item>
                                <List.Item as="a" href="#root">
                                    Terms and Conditions
                                </List.Item>
                                <List.Item as="a" href="#root">
                                    Privacy Policy
                                </List.Item>
                            </List>
                        </Container>
                    </Segment>
                </div>
            </Root>
        );
    }
}

export default  { App: App2, StickyLayout };
