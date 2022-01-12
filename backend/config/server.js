module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('STRAPI_API_URL', 'http://localhost:1337'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '96fafee3e6b52849fca86cdcd7c16294'),
    },
    url: env('STRAPI_ADMIN_URL', 'http://localhost:1337/admin'),
  },
  cloudflareCacheClearEnabled: env.bool('STRAPI_CLOUDFLARE_CACHECLEAR_ENABLED', false),
  cloudflareApiToken: env('STRAPI_CLOUDFLARE_API_TOKEN', '4F9tZfCOa-CsNsIYrEi3E-LUZgWAw7H7IZQ6Y3E9'),
  cloudflareZone: env('STRAPI_CLOUDFLARE_ZONE', ''),
  cloudflareApiUrlPrefix: env('STRAPI_CLOUDFLARE_API_URL_PREFIX',
    'https://api.cloudflare.com/client/v4/zones/'),
});
