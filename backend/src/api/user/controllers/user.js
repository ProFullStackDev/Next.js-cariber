'use strict';

const profileUid = 'api::profile.profile';

module.exports = {
    async getMe(ctx) {
        const user = ctx.state.user;
        const profile = await  strapi.query(profileUid).findOne({where: {users_permissions_user: user}});
        return profile;
    },
    async updateMe(ctx) {
        let data = ctx.request.body;
        const user = ctx.state.user;
        data['users_permissions_user'] = user;
        const profile = await  strapi.query(profileUid).findOne({where: {users_permissions_user: user}});
        if(profile){
            await strapi.entityService.update(profileUid, profile.id, {data: data})
        }else {
            await strapi.entityService.create(profileUid, {data: data})
        }
        return ctx.request.body;
    }
};