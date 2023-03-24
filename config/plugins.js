module.exports = ({ env }) => ({
  ckeditor: {
    enabled: true
  },
  navigation: {
    enabled: true
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  sitemap: {
    enabled: true,
    config: {
      autoGenerate: true,
      allowedFields: ['id', 'uid', 'pageUrl']
    }
  }
});
