'use strict';

/**
 * episode service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::episode.episode');
