'use strict';

/**
 * wcag-guideline service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wcag-guideline.wcag-guideline');
