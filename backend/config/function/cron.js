

module.exports = {
    '* * * * *': async () => {
        const draftToPublish = await strapi.entityService.findMany('api::course.course', {
            filters: {
              $and: [
                {
                    publishedAt: {
                        $null: true,
                    },
                },
                {
                    publish_date: {
                        $lte: new Date(),
                    }
                },
              ],
            },
          });
        await Promise.all(draftToPublish.map(course => {
            return strapi.entityService.update('api::course.course', course.id, {
                data: {
                    publishedAt: new Date()
                },
            });
        }));
    },
    '* * * * *': async () => {
        const draftToPublish = await strapi.entityService.findMany('api::episode.episode', {
            filters: {
              $and: [
                {
                    publishedAt: {
                        $null: true,
                    },
                },
                {
                    publish_date: {
                        $lte: new Date(),
                    }
                },
              ],
            },
          });
        await Promise.all(draftToPublish.map(episode => {
            return strapi.entityService.update('api::episode.episode', episode.id, {
                data: {
                    publishedAt: new Date()
                },
            });
        }));
    },
};
