import path from 'path'
import fs from 'fs'
// import { Post } from './types'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

const specialPages = [ 'Home.md' ]

const getTitleAndLang = (name) => {
  const titleExtractRegex = /([^(]*)(-\((..)\))?\.md/
  const titleExtract = titleExtractRegex.exec(name)
  return {
    title: titleExtract[1],
    lang: titleExtract.length >= 4 ? titleExtractRegex[3] : 'EN'
  }
}

const hashCode = (s) => {
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
}

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    const homeMD = fs.readFileSync('wiki/Home.md', {encoding: 'utf-8'}).toString()
    const files = fs.readdirSync('wiki')
    const posts = files
      .filter(file => (path.extname(file) === ".md" && !specialPages.includes(path.basename(file)) ))
      .map( postFile => {
        console.log(postFile)
        const {title, lang } = getTitleAndLang(postFile)
        return {
          basename: path.basename(postFile),
          title,
          lang,
          id:  hashCode( path.basename(postFile)),
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
          path: `/post/${post.id}`,
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
