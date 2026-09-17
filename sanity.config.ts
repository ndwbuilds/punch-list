import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio',
  projectId: 'oc2vlys0',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Site Settings').child(
              S.document().schemaType('siteSettings').documentId('siteSettings')
            ),
            S.divider(),
            S.listItem().title('Home Page').child(
              S.document().schemaType('homePage').documentId('homePage')
            ),
            S.listItem().title('About Page').child(
              S.document().schemaType('aboutPage').documentId('aboutPage')
            ),
            S.listItem().title('Contact Page').child(
              S.document().schemaType('contactPage').documentId('contactPage')
            ),
            S.divider(),
            S.documentTypeListItem('service').title('Services'),
            S.documentTypeListItem('caseStudy').title('Work We\'ve Done'),
            S.documentTypeListItem('post').title('Blog Posts'),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
})
