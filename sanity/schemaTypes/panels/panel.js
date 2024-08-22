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
      type: 'string',
    }),
    defineField({
      name: 'weight',
      title: 'Greutate',
      type: 'string',
    }),
    defineField({
      name: 'surface',
      title: 'Suprafata',
      type: 'string',
    }),
    defineField({
      name: 'middle',
      title: 'Mijloc',
      type: 'string',
    }),
    defineField({
      name: 'back',
      title: 'Spate',
      type: 'string',
    }),
    // defineField({
    //   name: 'colors',
    //   title: 'Culori',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
    defineField({
      name: 'colors',
      title: 'Culori',
      type: 'blockContent',
    }),
  ],
})
