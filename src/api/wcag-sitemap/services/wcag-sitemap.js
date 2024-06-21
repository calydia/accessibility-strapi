'use strict';

/**
 * wcag-sitemap service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wcag-sitemap.wcag-sitemap');
