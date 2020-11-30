import React from 'react'
import { Helmet } from 'react-helmet'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'
import { Post } from 'types'

export default () => {
  const { posts }: { posts: Post[] } = useRouteData()

  return (
    <div>
      <Helmet>
        <title>Pergola | Recent Posts</title>
      </Helmet>
      <h1>Recent Posts</h1>
      <ul style={{padding: 0}}>
        {posts.map(post => (
          <li key={post.id} style={{listStyle:'none', fontSize: '1.5rem'}}>
            <Link to={`/blog/post/${post.id}/`}><i className="icon angle right"></i> {post.body.match("# (.*)\n")[1]}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
