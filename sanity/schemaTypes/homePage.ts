import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'badge', title: 'Badge Text', type: 'string', description: 'e.g. "For the Trades"' }),
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({ name: 'headlineAccent', title: 'Headline Accent (yellow)', type: 'string' }),
        defineField({ name: 'subheadline', title: 'Subheadline', type: 'text', rows: 2 }),
        defineField({ name: 'primaryCta', title: 'Primary CTA Text', type: 'string' }),
        defineField({ name: 'secondaryCta', title: 'Secondary CTA Text', type: 'string' }),
      ],
    }),
    defineField({
      name: 'problem',
      title: 'Problem Section',
      type: 'object',
      fields: [
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] }),
      ],
    }),
    defineField({
      name: 'howItWorks',
      title: 'How It Works',
      type: 'object',
      fields: [
        defineField({ name: 'headline', title: 'Section Headline', type: 'string' }),
        defineField({
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              defineField({ name: 'number', title: 'Step Number', type: 'string' }),
              defineField({ name: 'title', title: 'Title', type: 'string' }),
              defineField({ name: 'description', title: 'Description', type: 'text' }),
            ],
            preview: { select: { title: 'title', subtitle: 'number' } },
          }],
        }),
      ],
    }),
    defineField({
      name: 'trades',
      title: 'Trades Section',
      type: 'object',
      fields: [
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({ name: 'subheadline', title: 'Subheadline', type: 'string' }),
        defineField({ name: 'list', title: 'Trade List', type: 'array', of: [{ type: 'string' }] }),
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Bottom CTA',
      type: 'object',
      fields: [
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({ name: 'body', title: 'Body', type: 'text' }),
        defineField({ name: 'buttonText', title: 'Button Text', type: 'string' }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Home Page' }) },
})
