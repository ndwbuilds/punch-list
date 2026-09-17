import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any

export const client = createClient({
  projectId: 'oc2vlys0',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Types
export type SiteSettings = {
  siteName?: string
  tagline?: string
  email?: string
  phone?: string
  footerNote?: string
}

export type HomePage = {
  hero?: { badge?: string; headline?: string; headlineAccent?: string; subheadline?: string; primaryCta?: string; secondaryCta?: string }
  problem?: { headline?: string; body?: unknown[] }
  howItWorks?: { headline?: string; steps?: { number: string; title: string; description: string }[] }
  trades?: { headline?: string; subheadline?: string; list?: string[] }
  cta?: { headline?: string; body?: string; buttonText?: string }
}

export type AboutPage = {
  headline?: string
  subheadline?: string
  body?: unknown[]
  values?: { label: string; description: string }[]
  ctaText?: string
}

export type ContactPage = {
  headline?: string
  subheadline?: string
  formTitle?: string
  formButtonText?: string
  formPlaceholderPain?: string
  nextSteps?: string[]
  quote?: string
}

export type Service = {
  _id: string
  title: string
  slug: { current: string }
  icon?: string
  tagline?: string
  description?: string
  bullets?: string[]
}

export type Post = {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt?: string
  mainImage?: SanityImageSource
  body?: unknown[]
}

// Fetchers
export const getSiteSettings = () =>
  client.fetch<SiteSettings>(`*[_type == siteSettings][0]`)

export const getHomePage = () =>
  client.fetch<HomePage>(`*[_type == homePage][0]`)

export const getAboutPage = () =>
  client.fetch<AboutPage>(`*[_type == aboutPage][0]`)

export const getContactPage = () =>
  client.fetch<ContactPage>(`*[_type == contactPage][0]`)

export const getServices = () =>
  client.fetch<Service[]>(
    `*[_type == service] | order(order asc) { _id, title, slug, icon, tagline, description, bullets }`
  )

export const getService = (slug: string) =>
  client.fetch<Service | null>(
    `*[_type == service && slug.current == $slug][0]`,
    { slug }
  )

export const getPosts = () =>
  client.fetch<Post[]>(
    `*[_type == post] | order(publishedAt desc) { _id, title, slug, publishedAt, excerpt, mainImage }`
  )

export const getPost = (slug: string) =>
  client.fetch<Post | null>(
    `*[_type == post && slug.current == $slug][0]`,
    { slug }
  )

export type CaseStudy = {
  _id: string
  title: string
  trade?: string
  icon?: string
  challenge?: string
  solution?: string
  result?: string
}

export const getCaseStudies = () =>
  client.fetch<CaseStudy[]>(
    `*[_type == "caseStudy"] | order(order asc) { _id, title, trade, icon, challenge, solution, result }`
  )
