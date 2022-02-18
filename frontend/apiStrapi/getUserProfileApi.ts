import { STRAPI_API_URLS } from './models/contact';
import { UserProfile } from "./models/contentType/auth"
import { ResponseData } from "./models/data"

export default async function getUserProfileApi() {
  const response = await fetch(STRAPI_API_URLS.getUserProfile, {
    method: "GET",
    headers: new Headers({
      'Authorization': "", 
    })
  })
  return await response.json() as ResponseData<UserProfile>
}