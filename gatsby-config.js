/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: "Mypage"
  },
  plugins: ["gatsby-plugin-image","gatsby-plugin-sharp"
  ,"gatsby-plugin-mdx",],
  developMiddleware: app => {
    app.use((req, res, next) => {
     res.set('Cross-Origin-Embedder-Policy', 'require-corp');
     res.set('Cross-Origin-Opener-Policy', 'same-origin');
     next();
   });
 },
}
