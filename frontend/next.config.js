const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'kajabi-storefronts-production.kajabi-cdn.com',
      'drive.google.com',
    ],
  },
}
