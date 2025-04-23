import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schema from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'Gesellschaften CMS',
  projectId: '3hi0th2w', // <-- Dein echter Project ID
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schema
  }
})
