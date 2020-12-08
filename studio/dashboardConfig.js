export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fcf95aaa0c53adec1e0e0a8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-4jbru99s',
                  apiId: 'd839f8ec-4d0d-4d83-ad4f-f2d0c5ee7ac7'
                },
                {
                  buildHookId: '5fcf95ab0d8a85fdb3547546',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-s2mh2q8s',
                  apiId: '502317fd-0185-47ed-84fb-2e194359f488'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/batags/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-s2mh2q8s.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
