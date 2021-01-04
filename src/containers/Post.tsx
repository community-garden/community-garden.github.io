import React from 'react'
import { Helmet } from 'react-helmet'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'
import { Post } from '../../types'
import ReactMarkdown from "react-markdown";

export function post2title(post:Post):String {
  const header_match = post.body.match("# (.*)\n")
  if(header_match)
    return header_match[1]
  else {
    console.warn('Post without Header')
    return ""
  }
}

export default () => {
  const { post }: { post: Post } = useRouteData()
  return (
    <div className='blog'>
      <Helmet>
        <title>Pergola | { post2title(post) }</title>
      </Helmet>
      <Link to="/blog/">{'<'} Back</Link>
      <br />
      <ReactMarkdown children={post.body}/>
    </div>
  )
}
