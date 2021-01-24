module.exports = {
  siteMetadata: {
    title: "rayyansaidi.com",
    siteUrl: "https://new.rayyansaidi.com"
  },
  plugins: [
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: 'rayyansaidi.com',
        short_name: 'rayyansaidi.com',
        start_url: '/',
        background_color: '#00fcff',
        theme_color: '#c80000',
        display: 'standalone',
        icon: './src/images/icon.png',
        icon_options: {
          purpose: 'any maskable'
        }
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          'gatsby-remark-images'
        ]
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
