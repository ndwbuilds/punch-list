import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
    defineField({ name: 'subheadline', title: 'Subheadline', type: 'text', rows: 2 }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] }),
    defineField({
      name: 'values',
      title: 'Values',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Label', type: 'string' }),
          defineField({ name: 'description', title: 'Description', type: 'text' }),
        ],
        preview: { select: { title: 'label' } },
      }],
    }),
    defineField({ name: 'ctaText', title: 'CTA Button Text', type: 'string' }),
  ],
  preview: { prepare: () => ({ title: 'About Page' }) },
})
