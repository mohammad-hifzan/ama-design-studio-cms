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
            { title: 'Construction', value: 'construction' },
            { title: 'Interior Design', value: 'interior' },
            { title: 'Landscape', value: 'landscape' },
            { title: 'Design', value: 'design' },
            { title: 'Footer Gallery', value: 'footer_gallery' }
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