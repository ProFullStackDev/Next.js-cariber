'use strict';

/**
 * review-student service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::review-student.review-student');
