require('dotenv').config({
  apiToken: `.env.${process.env.DATO_API_TOKEN}`
})

module.exports = {
  siteMetadata: {
    title: `Web Development, Creative Solutions & Design`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography"
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analizerMode: "server",
        analyzerPort: 3001,
        defaultSizes: "gzip"
      }
    }   
  ],
}


