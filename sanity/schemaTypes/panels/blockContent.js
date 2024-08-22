import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'object',
      name: 'imageWithText',
      title: 'Image with Text',
      fields: [
        {
          name: 'image',
          type: 'image',
          title: 'Culoare',
          options: {hotspot: true},
        },
        {
          name: 'text',
          type: 'string',
          title: 'Cod/Denumire',
        },
      ],
      preview: {
        select: {
          title: 'text',
          media: 'image',
        },
        prepare({title, media}) {
          return {
            title: title,
            media: media,
          }
        },
      },
    }),
  ],
})
