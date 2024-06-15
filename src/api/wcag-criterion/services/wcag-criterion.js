'use strict';

/**
 * wcag-criterion service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wcag-criterion.wcag-criterion');
