'use strict';

const {getFullPopulateObject} = require("../../../helper/populate");
/**
 *  privacy-policy controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

const modelUid = 'api::privacy-policy.privacy-policy'

module.exports = createCoreController(modelUid, ({strapi}) => ({
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
    }
}));

