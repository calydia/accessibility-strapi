'use strict';

/**
 * wcag-criterion router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::wcag-criterion.wcag-criterion');
