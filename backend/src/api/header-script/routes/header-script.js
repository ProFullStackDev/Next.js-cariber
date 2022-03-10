'use strict';

/**
 * header-script router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::header-script.header-script');
