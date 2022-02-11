import { STRAPI_API_URLS } from './models/contact';
import { HomeContent } from "./models/contentType/home";
import { ResponseData } from "./models/data";

export default async function homeApi(){
  const response = await fetch(STRAPI_API_URLS.home);
  return await response.json() as ResponseData<HomeContent>;
}