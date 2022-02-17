import { STRAPI_API_URLS } from './models/contact';
import { CourseContent } from "./models/contentType/courses";
import { ResponseDataList } from "./models/data";

export async function coursesAllApi() {
  const response = await fetch(STRAPI_API_URLS.courses + "?publicationState=preview&pagination[pageSize]=1000");
  return await response.json() as ResponseDataList<CourseContent>;
}

export async function coursesApi(id: string) {
  const response = await fetch(STRAPI_API_URLS.courses + `/${id}`);
  return await response.json() as ResponseDataList<CourseContent>;
}