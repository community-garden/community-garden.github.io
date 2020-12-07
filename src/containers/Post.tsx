import React from 'react'
import { Helmet } from 'react-helmet'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'
import { Post } from '../../types'
import ReactMarkdown from "react-markdown";

export default () => {
  const { post }: { post: Post } = useRouteData()
  return (
    <div className='blog'>
      <Helmet>
        <title>Pergola | {post.body.match("# (.*)\n")[1]}</title>
      </Helmet>
      <Link to="/blog/">{'<'} Back</Link>
      <br />
      <ReactMarkdown children={post.body}/>
    </div>
  )
}
