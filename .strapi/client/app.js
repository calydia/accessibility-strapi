/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import ckeditor from "@ckeditor/strapi-plugin-ckeditor/strapi-admin";
import documentation from "@strapi/plugin-documentation/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import meilisearch from "strapi-plugin-meilisearch/strapi-admin";
import navigation from "strapi-plugin-navigation/strapi-admin";
import sitemap from "strapi-plugin-sitemap/strapi-admin";
import vercelDeploy from "strapi-plugin-vercel-deploy/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    ckeditor: ckeditor,
    documentation: documentation,
    i18n: i18N,
    "users-permissions": usersPermissions,
    meilisearch: meilisearch,
    navigation: navigation,
    sitemap: sitemap,
    "vercel-deploy": vercelDeploy,
  },
});
