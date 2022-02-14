import { STRAPI_API_URLS } from './models/contact';
import { ReviewContent } from "./models/contentType/review";
import { ResponseData } from "./models/data";

export default async function reviewApi(){
  const response = await fetch(STRAPI_API_URLS.review);
  return await response.json() as ResponseData<ReviewContent>;
}