module.exports = {
    afterUpdate(event) {
        const { data, where } = event.params;
        const body = {
            "speaker_name": data.speaker_name,
            "course_name": data.course_name,
            "course_name_th": data.course_name,
            "description": data.description,
            "header": data.header,
            "asset_download": data.asset_download? data.asset_download:"",
            "thumbnail_image": data.thumbnail_image
        }
        if ( 'publishedAt' in data ) {
            strapi.services['api::lms.nestjs'].syncData(data, where.id , 'publish')
        } else {
            strapi.services['api::lms.nestjs'].syncData(body, where.id , 'update')
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
        strapi.services['api::lms.nestjs'].syncData(body, result.id, 'create')
    },
    beforeDelete(event) {
        const { where } = event.params;
        strapi.services['api::lms.nestjs'].syncData(null, where.id , 'delete')
    }
  };
   