import UserManager from "../auth/userManager"
import { UserProfile } from "./models/contentType/auth"
import { strapiGetUserProfileApi } from "./models/content"
import { ResponseData } from "./models/data"

export default async function getUserProfileApi() {
  const userManager = new UserManager()
  const response = await fetch(strapiGetUserProfileApi, {
    method: "GET",
    headers: new Headers({
      'Authorization': userManager.getJwtToken(), 
    })
  })
  return await response.json() as ResponseData<UserProfile>
}