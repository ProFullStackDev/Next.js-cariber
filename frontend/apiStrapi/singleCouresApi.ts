import { ResponseData } from './models/data';
import { SingleCourse } from './models/contentType/singleCourse';
import { STRAPI_API_URLS } from './models/contact';

export default async function singleCourseApi() {
  const response = await fetch(STRAPI_API_URLS.singleCourse);
  return await response.json() as ResponseData<SingleCourse>;
}