'use strict';

/**
 * wcag-sitemap router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::wcag-sitemap.wcag-sitemap');
