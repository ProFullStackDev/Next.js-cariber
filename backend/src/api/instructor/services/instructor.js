'use strict';

/**
 * instructor service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::instructor.instructor');
