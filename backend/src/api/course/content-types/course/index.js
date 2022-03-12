'use strict';

const schema = require('./schema.json')

const files = [{
  url: `${process.env.STRAPI_API_URL}/api/courses?populate=*`,
  headers: { Origin: process.env.NEXT_HOME_URL }
}];

module.exports = {
  schema,
  lifecycles: {
    async afterCreate(result, data) {
      strapi.services.cloudflare.cacheClear(files, 'course');
    },
    async afterUpdate(result, params, data) {
      strapi.services.cloudflare.cacheClear(files, 'course');
    },
    async afterDelete(result, params) {
      strapi.services.cloudflare.cacheClear(files, 'course');
    },
  },
};