import { STRAPI_API_URLS } from "./models/contact";
import { AnnouncementBarContent } from "./models/contentType/announcementBar";
import { ResponseData } from "./models/data";

export default async function announcementBarApi(){
  const response = await fetch(STRAPI_API_URLS.announcementBar);
  return await response.json() as ResponseData<AnnouncementBarContent>;
}