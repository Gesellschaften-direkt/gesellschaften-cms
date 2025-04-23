import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schema from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'Gesellschaften CMS',
  projectId: 'your_project_id',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schema
  }
})
