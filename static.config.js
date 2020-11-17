import axios from 'axios'
import path from 'path'
import fs from 'fs'
// import { Post } from './types'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    const homeMD = fs.readFileSync('wiki/Home.md', {encoding: 'utf-8'}).toString()
    const files = fs.readdirSync('wiki')
    const posts = files
      .filter(file => (path.extname(file) === ".md" && path.basename(file).indexOf('blog_') === 0))
      .map( postFile => {
        return {
          basename: path.basename(postFile),
          title: path.basename(postFile),
          id: path.basename(postFile),
          body: fs.readFileSync(path.join('wiki', postFile)).toString()
      }
  })


    return [
      {
        path: '/blog',
        getData: () => ({
          posts,
        }),
        children: posts.map((post /* : Post */) => ({
          path: `/post/${post.basename}`,
          template: 'src/containers/Post',
          getData: () => (
            {post}
          ),
        })),
      },
      {
        path: '/',
        getData: () => ({
          homeMD
        })
      }
    ]

  },
  plugins: [
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
