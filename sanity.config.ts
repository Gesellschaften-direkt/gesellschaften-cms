import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'Gesellschaften CMS',
  projectId: 'your_project_id', // <== DEINE ID hier eintragen!
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})
