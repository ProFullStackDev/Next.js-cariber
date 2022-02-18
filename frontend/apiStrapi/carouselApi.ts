import { STRAPI_API_URLS } from "./models/contact";
import { CarouselContent } from "./models/contentType/carousel";
import { ResponseData } from "./models/data";

export default async function carouselApi(){
  const response = await fetch(STRAPI_API_URLS.carousels);
  return await response.json() as ResponseData<CarouselContent>;
}