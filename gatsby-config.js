module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "garKVwaCBToFuqOwWZZOfXGiIEJEDRu0h1pR8YhjH5E",
        spaceId: "",
      },
    },
  ],
};
