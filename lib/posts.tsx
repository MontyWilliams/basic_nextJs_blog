import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'blogposts')

export function getSortedPostsData() {
  // get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // remove <.md> to get file id 
    const id = fileName.replace(/\.md$/, '');

  })
}
