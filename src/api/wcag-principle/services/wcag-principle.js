'use strict';

/**
 * wcag-principle service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wcag-principle.wcag-principle');
