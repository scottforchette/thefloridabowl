module.exports = {
  siteName: 'The Florida Bowl',
  siteUrl: 'https://www.thefloridabowl.com/',
  siteDescription: 'The Florida Bowl',
  titleTemplate: '%s | The Florida Bowl',
  plugins: [{
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        baseDir: "./src/assets/content/",
        path: 'blog/**/*.md',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        collections: [{
          typeName: 'Blog',
          indexName: 'Blog',
          fields: ['title', 'handle', 'author', 'date', 'tag']
        }],
        searchFields: ['title']
      }
    }
  ]
}