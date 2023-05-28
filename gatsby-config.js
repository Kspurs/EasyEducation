/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config();
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "Mypage"
  },
  
  plugins: ["gatsby-plugin-image","gatsby-plugin-sharp",`gatsby-transformer-sharp`,
  `gatsby-transformer-remark`,{
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `coursebrief`,
      path: `${__dirname}/src/images`,
    },
  },{
    resolve: `gatsby-plugin-mdx`,
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 500,
          },
        },
      ],
    },
  },
  ],
  developMiddleware: app => {
    app.use((req, res, next) => {
     res.set('Cross-Origin-Embedder-Policy', 'require-corp');
     res.set('Cross-Origin-Opener-Policy', 'same-origin');
     next();
   });
 },
}
