'use strict';

/**
 * wcag-terminology service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wcag-terminology.wcag-terminology');
