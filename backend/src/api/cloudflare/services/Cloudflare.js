'use strict';

const axios = require('axios');

const cloudflareCacheClearEnabled = strapi.config.get('server.cloudflareCacheClearEnabled', false);
const cloudflareApiToken = strapi.config.get('server.cloudflareApiToken', '');
const cloudflareZone = strapi.config.get('server.cloudflareZone', '');
const cloudflareApiUrlPrefix = strapi.config.get('server.cloudflareApiUrlPrefix', '');

axios.defaults.headers.common['Authorization'] = 'Bearer ' + cloudflareApiToken;
axios.defaults.headers.common['Content-Type'] = 'application/json';

const postCloudflareCacheClear = (files, collection) => {

    if (cloudflareCacheClearEnabled && cloudflareApiToken) {
        axios.post(cloudflareApiUrlPrefix + cloudflareZone + '/purge_cache', {
            "files": files
        }).then((response) => {
            strapi.log.debug('Cache clear for ' + collection + ' was: ' + JSON.stringify(response.data));
        }, (error) => {
            strapi.log.error('Cache clear error for ' + collection + ' was: : ' + JSON.stringify(error));
        });
    } else {
        strapi.log.debug('Cloudflare cache clear not enabled.');
    }
};

module.exports = {
    cacheClear: (files, collection) => {
        postCloudflareCacheClear(files, collection);
    },
};