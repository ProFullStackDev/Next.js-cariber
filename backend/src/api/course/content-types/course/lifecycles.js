module.exports = {
    afterUpdate(event) {
      const { data, where } = event.params;
        delete data.updatedBy
        delete data.updatedAt
        if ( 'publishedAt' in data ) {
            strapi.services['api::lms.nestjs'].syncData(data, where.id , 'publish')
        } else {
            strapi.services['api::lms.nestjs'].syncData(data, where.id , 'update')
        }
    },
    afterCreate(event) {
        const { result, params } = event;
        const body = {
            "speaker_name": result.speaker_name,
            "course_name": result.course_name,
            "course_name_th": result.course_name,
            "description": result.description,
            "header": result.header,
            "asset_download": result.asset_download? result.asset_download:"",
            "thumbnail_image": result.thumbnail_image
          }
        strapi.services['api::lms.nestjs'].syncData(body, params, 'create')
    },
    beforeDelete(event) {
        const { where } = event.params;
        strapi.services['api::lms.nestjs'].syncData(null, where.id , 'delete')
    }
  };
   