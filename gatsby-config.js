/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Nolan Nash Dev`,
    siteUrl: `https://www.yourdomain.tld`
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
  ],
};
