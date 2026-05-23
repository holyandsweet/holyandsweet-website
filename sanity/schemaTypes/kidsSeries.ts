import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'kidsSeries',
  title: 'Kids Series',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Series Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Tag (e.g., "Ages 3-6")',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'bgColor',
      title: 'Background Color (Hex Code or CSS var)',
      type: 'string',
      description: 'Example: #FFC0CB or var(--teal)',
    }),
    defineField({
      name: 'image',
      title: 'Series Image / Icon',
      type: 'image',
      options: {
        hotspot: true, // Allows you to crop the image in the dashboard
      },
    }),
  ],
})
