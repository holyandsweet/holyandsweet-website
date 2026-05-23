import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'heroSlide',
  title: 'Hero Carousel Slides',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Slide Headline / Label (Internal Use)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Lifestyle Image (Landscape suggested)',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Use numbers (1, 2, 3) to sort which slide shows up first.',
    }),
  ],
})