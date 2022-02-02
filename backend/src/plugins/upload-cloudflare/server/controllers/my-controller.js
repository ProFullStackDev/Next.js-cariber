'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('upload-cloudflare')
      .service('myService')
      .getWelcomeMessage();
  },
};
