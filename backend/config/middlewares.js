module.exports = [
  'strapi::errors',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "script-src": ["'self'",  "'unsafe-inline'", "https:"],
          "script-src-elem": ["'self'",  "'unsafe-inline'", "https:"],
          "default-src": ["'self'","https:"],
          "frame-src": ["'self'", "https:"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
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
