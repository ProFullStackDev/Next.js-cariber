'use strict';

/**
 *  course controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { getFullPopulateObject } = require('./../../../helper/populate');

const modelUid = "api::course.course";

module.exports = createCoreController(modelUid, ({ strapi }) => ({
    async find(ctx) {
      const { query } = ctx;
  
      const { results, meta } = await strapi.service(modelUid).find({
        ...getFullPopulateObject(modelUid),
        ...query,
      });
  
      const sanitizedEntities = await this.sanitizeOutput(results, ctx);
      return {
        data: sanitizedEntities,
        meta,
      };
    },
    async findOne(ctx) {
      const { id } = ctx.params;
      const { query } = ctx;
      const episodes_entity = await strapi.entityService.findMany('api::episode.episode', {
        filters: {
          $and: [
            { 
              course: {
                id: id
              }
            }
          ],
        },
      });
      const entity = await strapi.service(modelUid).findOne(id, {
        ...getFullPopulateObject(modelUid),
        ...query,
      });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return {
        data: {...sanitizedEntity,episodes:episodes_entity}
      };
    }
  }));