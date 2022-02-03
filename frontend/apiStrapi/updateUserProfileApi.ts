import UserManager from "../auth/userManager";
import { UserProfile } from "../models/auth";
import { strapiUpdateUseProfilerApi } from "../models/content";

export default async function updateUserProfileApi(body: UserProfile) {
  const userManager = new UserManager()
  const formData = new FormData();
  formData.append("fullName", body.fullName)
  formData.append("timeZone", body.timeZone)
  formData.append("notifyUpdatesProducts", String(body.notifyUpdatesProducts))
  formData.append("notifyReplyMyPosts", String(body.notifyReplyMyPosts))
  formData.append("emailPromotions", String(body.emailPromotions))
  formData.append("avatarUserBase64", body.avatarUserBase64)
  formData.append("bio", body.bio)
  formData.append("location", body.location)
  const response = await fetch(strapiUpdateUseProfilerApi, {
    method: "PUT",
    headers: new Headers({
      'Authorization': userManager.getJwtToken(),
    }),
    body: formData,
  })
  return await response.json()
}
