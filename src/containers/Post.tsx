import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from '@reach/router'
import { Post } from '../../types'
import ReactMarkdown from "react-markdown";

export default () => {
  const { post }: { post: Post } = useRouteData()
  return (
    <div className='blog'>
      <Link to="/blog/">{'<'} Back</Link>
      <br />
      <ReactMarkdown children={post.body}/>
    </div>
  )
}
