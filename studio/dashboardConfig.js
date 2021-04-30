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
                  buildHookId: '608c6b13521eb700ca16ee7b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-f9aekd54',
                  apiId: 'a6500a18-e7d1-419f-9982-9729d292dc1e'
                },
                {
                  buildHookId: '608c6b139247c300a1c16617',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-zqcprf1x',
                  apiId: '260f765b-3330-42e1-bc3a-a00e3ff4f7d6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ian-mcgarvey-splashtop/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-zqcprf1x.netlify.app', category: 'apps'}
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
