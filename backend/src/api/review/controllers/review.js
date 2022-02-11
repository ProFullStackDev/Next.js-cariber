'use strict';

/**
 *  review controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { getFullPopulateObject } = require('./../../../helper/populate');

const modelUid = 'api::review.review'

module.exports = createCoreController(modelUid, ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const data = await strapi.service(modelUid).find({
            ...getFullPopulateObject(modelUid, 4),
            ...query,
        });
        const sanitizedEntities = await this.sanitizeOutput(data, ctx);
            return {
            data: sanitizedEntities,
            error: data.error,
        };
    },
}));
