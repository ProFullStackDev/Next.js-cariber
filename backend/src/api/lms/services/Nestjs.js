'use strict';

const axios = require('axios');

const syncDataOnUpdate = ( body, id ) => {
    console.log('update',body,id)
}

const syncDataOnCreate = ( body ) => {
    console.log('create',body)
}

const syncDataOnPublish = ( body ) => {
    console.log('publish',body)
}

const syncDataOnDelete = ( id ) => {
    console.log('delete',id)
}

module.exports = {
    syncData: (body, id, status) => {
        if ( status === 'update') { 
            syncDataOnUpdate(body, id);
        } else if ( status === 'create') {
            syncDataOnCreate(body);
        } else if ( status === 'publish' ) {
            syncDataOnPublish(body, id);
        } else if ( status === 'delete' ) {
            syncDataOnDelete(id);
        }
    },
};