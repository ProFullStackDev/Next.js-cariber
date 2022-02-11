import { STRAPI_API_URLS } from './models/contact';
import UserManager from "../auth/userManager"
import { UserProfile } from "./models/contentType/auth"
import { ResponseData } from "./models/data"

export default async function getUserProfileApi() {
  const userManager = new UserManager()
  const response = await fetch(STRAPI_API_URLS.getUserProfile, {
    method: "GET",
    headers: new Headers({
      'Authorization': userManager.getJwtToken(), 
    })
  })
  return await response.json() as ResponseData<UserProfile>
}