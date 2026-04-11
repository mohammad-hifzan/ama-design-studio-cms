// File: schemaTypes/project.js (or schemas/project.js)

export default {
    name: 'project',
    type: 'document',
    title: 'Portfolio Project',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Project Title'
      },
      {
        name: 'category',
        type: 'string',
        title: 'Project Category',
        options: {
          list: [
            { title: 'Design And Build', value: 'design_and_build' },
            { title: 'Interior Design', value: 'interior' },
            { title: 'Exterior Design', value: 'exterior' }
          ],
          layout: 'dropdown'
        }
      },
      {
        name: 'gallery',
        type: 'array',
        title: 'Image Gallery',
        of: [{ type: 'image' }],
        options: {
          layout: 'grid'
        }
      }
    ]
  }