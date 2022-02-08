import UserManager from "../auth/userManager";
import { UserProfile } from "./models/contentType/auth";
import { strapiUpdateUseProfilerApi } from "./models/content";
import { ResponseData } from "./models/data";

export default async function updateUserProfileApi(body: UserProfile) {
  const userManager = new UserManager()
  const formData = new FormData();
  formData.append("fullName", body.fullName)
  formData.append("email", body.email)
  formData.append("currentPassword", body.currentPassword)
  formData.append("newPassword", body.newPassword)
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
  return await response.json() as ResponseData<UserProfile>
}
