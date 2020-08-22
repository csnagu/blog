module.exports = {
  siteMetadata: {
    title: `nagu blog`,
    author: {
      name: `nagu`,
      summary: `都内某所で開発・運用をしているエンジニア。技術関連でやってみたことや理解したことをまとめます。`,
    },
    description: `エンジニアが技術関連でやってみたことや理解したことをまとめるブログ。`,
    siteUrl: `https://blog.nagu.dev/`,
    social: {
      twitter: `cs_nagu`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-code-titles',
          {
            resolve: `gatsby-remark-images-anywhere`,
            options: {
              staticDir: 'static',
              createMarkup: ({ title, src, srcSet, alt, sizes, presentationWidth }, { loading }) => `
                <figure class="gatsby-resp-image-figure">
                  <span class="gatsby-resp-image-wrapper" style="display: block; margin-left: auto; margin-right: auto; max-width: ${presentationWidth}px ">
                    <img class="gatsby-resp-image-figcaption" loading="${loading}" alt="${alt}" title="${title}" src="${src}" srcSet="${srcSet}" sizes="${sizes}" style="width: 100%; height: 100%; margin: 0px; vertical-align: middle; top: 0px; left: 0px; opacity: 1; transition: opacity 0.5s ease 0s; color: inherit;"/>
                  </span>
                  <figcaption class="gatsby-resp-image-figcaption"><p>${title}</p></figcaption>
                </figure>
              `,
              loading: 'lazy',
              sharpMethod: 'fluid',
              maxWidth: 560,
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: false
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-17765726-16`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/avatar.jpg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
