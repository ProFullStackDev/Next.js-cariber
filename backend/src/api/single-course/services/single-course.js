'use strict';

/**
 * single-course service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::single-course.single-course');
