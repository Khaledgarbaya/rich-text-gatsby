module.exports = {
  siteMetadata: {
    title: `Gatsby And Contentful Rich Text Example`,
    description: `How to render different blocks from Rich text in Gatsby`,
    author: `@khaled_garbaya`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `08c3omjgrm89`,
        accessToken: `blDILLq8uuKqQ8R03fj0A2lb34ipA8d7LdVgDkfb5-A`,
      },
    },
  ],
}
