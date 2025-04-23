import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'Gesellschaften CMS',
  projectId: 'deine_project_id', // <- hier deine echte Project-ID einsetzen
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes
  }
})
