module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::favicon',
  'strapi::public',
  {
    name: "strapi::body",
    config: {
      formidable: {
        maxFileSize: 10 * 1024 * 1024 * 1024,
      },
    },
  },
];
