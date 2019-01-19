module.exports = {
    siteMetadata: {
        title: `Pandas YOloo`,
    },
    plugins: [
      `gatsby-plugin-emotion`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
    ],
  }