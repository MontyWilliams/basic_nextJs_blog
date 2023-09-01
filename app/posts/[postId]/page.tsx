import { getSortedPostsData } from '@/lib/posts'
import { notFound } from 'next/navigation'


export function generateMetadata({ params }: { params: { postId: string}}) {

  const posts = getSortedPostsData() //Automatically de-duplicated by next js 13 
  const postId = params.postId

  const post = posts.find(post => post.id === postId)
  if(!post) {
    return {
      title: 'Post Aint Found?!'
    }
  }
  return {
    title: post.title
  }
}

export default function Post({ params }: { params: { postId: string}}) {

  const posts = getSortedPostsData() //Automatically de-duplicated by next js 13 
  const postId = params.postId

  if(!posts.find(post => post.id === postId )) {
    return notFound()
  }
  return (
    <>
    </>
  )
}
 