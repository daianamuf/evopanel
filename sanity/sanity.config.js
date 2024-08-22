import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'evopanel',

  projectId: 'lk48nlsu',
  dataset: 'panels',
  apiVersion: '2023-08-01',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
