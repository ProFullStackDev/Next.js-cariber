'use strict';

const axios = require('axios');
const BASE_URL = 'https://nestjs-dev.cariber.co/api/course/lms-course/'
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

const syncDataOnUpdate = ( body, id ) => {
    axios.post(BASE_URL+id, body)
        .then(
            (res)=>{ strapi.log.debug(res) },
            (err)=>{ strapi.log.error(err);console.log(err.data.message); }
        )
}

const syncDataOnCreate = ( body, id ) => {
    axios.post(BASE_URL+id, body)
        .then(
            (res)=>{ strapi.log.debug(res) },
            (err)=>{ strapi.log.error(err);console.log(err.data.message); }
        )
}

const syncDataOnPublish = ( body, id ) => {
    if ( body.publishedAt ) {
        body = { "published": true }
    } else {
        body = { "published": false }
    }
    axios.post(BASE_URL+id, body)
        .then(
            (res)=>{ strapi.log.debug(res) },
            (err)=>{ strapi.log.error(err);console.log(err.data.message); }
        )
}

const syncDataOnDelete = ( id ) => {
    console.log('delete',id)
}

module.exports = {
    syncData: (body, id, status) => {
        if ( status === 'update') { 
            syncDataOnUpdate(body, id);
        } else if ( status === 'create') {
            syncDataOnCreate(body, id);
        } else if ( status === 'publish' ) {
            syncDataOnPublish(body, id);
        } else if ( status === 'delete' ) {
            syncDataOnDelete(id);
        }
    },
};