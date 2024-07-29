import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'panel',
  title: 'Panel',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nume',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagine Principala',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'size',
      title: 'Marime',
      type: 'text',
    }),
    defineField({
      name: 'weight',
      title: 'Greutate',
      type: 'text',
    }),
    defineField({
      name: 'surface',
      title: 'Suprafata',
      type: 'text',
    }),
    defineField({
      name: 'middle',
      title: 'Mijloc',
      type: 'text',
    }),
    defineField({
      name: 'back',
      title: 'Spate',
      type: 'text',
    }),
    defineField({
      name: 'colors',
      title: 'Culori',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // defineField({
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}],
    // }),
  ],
})
