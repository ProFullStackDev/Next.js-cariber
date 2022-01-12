'use strict';

const schema = require('./schema.json')

const files = [{
  url: "https://strapi-dev.cariber.co/api/courses?populate=*",
  headers: { Origin: "https://nextjs-dev.cariber.co" }
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