import React from 'react'
import { Helmet } from 'react-helmet'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'
import { Post } from 'types'
import { post2title } from 'containers/Post'

export default () => {
  const { posts }: { posts: Post[] } = useRouteData()

  const postListItem = ({post}) => (
    <li key={post.id} style={{listStyle:'none', fontSize: '1.5rem'}}>
      <Link to={`/blog/post/${post.id}/`}><i className="icon angle right"></i> { post2title(post) }</Link>
    </li>
  );

  return (
    <div>
      <Helmet>
        <title>Pergola | Blog</title>
      </Helmet>
      <h2>Recent Posts</h2>
      <ul style={{padding: 0}}>
        {posts.filter(post => post.lang == 'EN').map(post => postListItem({post}))}
      </ul>
      <h2>Aktuelle Posts</h2>
      <ul style={{padding: 0}}>
        {posts.filter(post => post.lang == 'DE').map(post => postListItem({post}))}
      </ul>
    </div>
  )
}
