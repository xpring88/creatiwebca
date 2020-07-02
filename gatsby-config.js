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
        pathToConfigModule: "src/utils/typography.js"
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
      resolve: "gatsby-theme-minimalist",
  
      options: {
        // SEO
        title: "Your site title",
        description: "Your site description",
        siteUrl: "https://your-future-site.com",
        appName: "Your pwa app name",
  
        // Content
        headline: "Your headline",
        subHeadline: "Your <strong>meaningful</strong> message.<br/>",
        socialList: [{
          icon: 'FaGithub', // a detailed explanation can be found in the options section
          url: 'https://github.com/your-profile',
          ariaLabel: 'Link to my GitHub profile',
        }]
      }
    }
  ],
}
