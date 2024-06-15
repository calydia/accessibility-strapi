'use strict';

/**
 * wcag-guideline router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::wcag-guideline.wcag-guideline');
