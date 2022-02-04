'use strict';

const profileUid = 'api::profile.profile';
const userUid = 'plugin::users-permissions.user';

module.exports = {
    async getMe(ctx) {
        const user = ctx.state.user;
        const profile = await  strapi.query(profileUid).findOne({where: {users_permissions_user: user}});
        profile.email = user.email
        return { data: profile};
    },
    async updateMe(ctx) {
        let data = ctx.request.body;
        let user = ctx.state.user;
        data['users_permissions_user'] = user;
        const profile = await  strapi.query(profileUid).findOne({where: {users_permissions_user: user}});
        const validPassword = await strapi.plugins['users-permissions'].services.user.validatePassword(data.currentPassword, user.password);
        if ((data.currentPassword || data.newPassword) && !validPassword){
            return  { data: null, error: {
                    name: "-",
                    message: "Incorrect password"
                } };
        }
        if(profile){
            await strapi.entityService.update(profileUid, profile.id, {data: data});
        }else {
            await strapi.entityService.create(profileUid, {data: data});
        }
        if(data.newPassword){
            await strapi.entityService.update(userUid, user.id, {data: {
                email: data.email,
                password: data.newPassword,
            }});
        }
        await strapi.entityService.update(userUid, user.id, {data: {
            email: data.email,
        }});
        return  { data: ctx.request.body };
    }
};