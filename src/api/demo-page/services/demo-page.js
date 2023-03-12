'use strict';

/**
 * demo-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::demo-page.demo-page');
