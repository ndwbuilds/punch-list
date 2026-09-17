import { defineField, defineType } from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Work We\'ve Done',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'trade', title: 'Trade / Industry', type: 'string' }),
    defineField({ name: 'icon', title: 'Icon (emoji)', type: 'string' }),
    defineField({ name: 'challenge', title: 'The Challenge', type: 'text', rows: 2 }),
    defineField({ name: 'solution', title: 'What We Built', type: 'text', rows: 2 }),
    defineField({ name: 'result', title: 'The Result (metric)', type: 'string', description: 'e.g. "Billing time cut 80%"' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'trade' } },
})
