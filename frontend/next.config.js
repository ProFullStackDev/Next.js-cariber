const path = require('path')
require("dotenv").config();
const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
  sentry: {
    disableServerWebpackPlugin: true,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    loader: 'imgix',
    path: ''
  },
};

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
