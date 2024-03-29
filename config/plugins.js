module.exports = ({ env }) => ({
  ckeditor: {
    enabled: true,
  },
  navigation: {
    enabled: true,
  },
  graphql: {
    config: {
      endpoint: "/graphql",
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
      allowedFields: ["id", "uid", "pageUrl"],
    },
  },
  meilisearch: {
    config: {
      host:
        env("MEILI_HTTP_PROTOCOL", "http") +
        "://" +
        env("MEILI_HTTP_ADDR", "localhost:7700"),
      apiKey: env("MEILI_MASTER_KEY", "wrong_value"),
      page: {
        entriesQuery: {
          locale: "all",
        },
      },
      "demo-page": {
        entriesQuery: {
          locale: "all",
        },
      },
    },
  },
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: env("VERCEL_HOOK_URL", "wrong_value"),
      apiToken: env("VERCEL_API_TOKEN", "wrong_value"),
      appFilter: env("VERCEL_APP_FILTER", "wrong_value"),
    },
  },
});
