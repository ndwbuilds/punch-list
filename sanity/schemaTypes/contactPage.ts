import { defineField, defineType } from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
    defineField({ name: 'subheadline', title: 'Subheadline', type: 'text', rows: 2 }),
    defineField({ name: 'formTitle', title: 'Form Title', type: 'string' }),
    defineField({ name: 'formButtonText', title: 'Form Button Text', type: 'string' }),
    defineField({ name: 'formPlaceholderPain', title: 'Pain Placeholder Text', type: 'string' }),
    defineField({
      name: 'nextSteps',
      title: 'Next Steps List',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'quote', title: 'Side Quote', type: 'text', rows: 2 }),
  ],
  preview: { prepare: () => ({ title: 'Contact Page' }) },
})
