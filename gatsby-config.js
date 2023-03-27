/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "Mypage"
  },
  plugins: ["gatsby-plugin-image","gatsby-plugin-sharp",{
    resolve: "gatsby-source-filesystem",
    options: {
      name: `static`,
      path: `${__dirname}/static`,
    }
  }
  ,"gatsby-plugin-mdx",],
}
