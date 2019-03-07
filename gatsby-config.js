module.exports = {
    siteMetadata: {
        title: `Portfolio Board`,
    },
    plugins: [
        {      
            resolve: `gatsby-source-filesystem`,      
            options: {        
                name: `src`,        
                path: `${__dirname}/src/`,      
            },    
        },
        `gatsby-mdx`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
            pathToConfigModule: `src/utils/typography`,
            },
        },
    ],
  }