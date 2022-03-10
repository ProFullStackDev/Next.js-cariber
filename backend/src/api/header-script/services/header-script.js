'use strict';

/**
 * header-script service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::header-script.header-script');
