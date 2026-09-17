import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPost, getPosts } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'

export const revalidate = 60

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((p) => ({ slug: p.slug.current }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  return (
    <>
      <section className="bg-[#1B3A5C] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/blog" className="text-[#a0b4c8] text-sm hover:text-white transition-colors mb-6 inline-block">← Back to Blog</Link>
          <p className="text-[#F5C518] text-sm font-bold mb-3">
            {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          <h1 className="text-4xl md:text-5xl font-black max-w-3xl">{post.title}</h1>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          {post.excerpt && <p className="text-xl text-[#374151] leading-relaxed mb-10 font-medium">{post.excerpt}</p>}
          {post.body && (
            <div className="prose prose-lg max-w-none text-[#374151] prose-headings:text-[#1B3A5C] prose-headings:font-black prose-a:text-[#1B3A5C] prose-strong:text-[#1B3A5C]">
              <PortableText value={post.body as never} />
            </div>
          )}

          <div className="mt-16 border-t border-[#E5E7EB] pt-10">
            <Link href="/blog" className="text-[#1B3A5C] font-bold hover:text-[#F5C518] transition-colors">← Back to Blog</Link>
          </div>
        </div>
      </section>
    </>
  )
}
