import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemaTypes from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'Gesellschaften CMS',
  projectId: '3hi0th2w',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes
  }
})
