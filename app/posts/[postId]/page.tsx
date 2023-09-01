import { getSortedPostsData, getPostData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'
import DOMPurify from 'isomorphic-dompurify';

export function generateStaticParams() {
  const posts = getSortedPostsData() //deduped
  
  return posts.map((post) => {
    postId: post.id 
  })
}

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

export default async function Post({ params }: { params: { postId: string}}) {

  const posts = getSortedPostsData() //Automatically de-duplicated by next js 13 
  const postId = params.postId

  if(!posts.find(post => post.id === postId )) {
    return notFound()
  }

  const { title, date, contentHtml } = await getPostData(postId)
  const cleanContentHtml = DOMPurify.sanitize(contentHtml)

  const formattedDate = getFormattedDate(date)
  
  return (
    <main className="px-6 prose prose-xl prose-slate dard:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">
        {formattedDate}
      </p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: cleanContentHtml }} />
        <p>
          <Link href="/"> Back to home</Link>
        </p>
      </article>
    </main>
  )
}
 