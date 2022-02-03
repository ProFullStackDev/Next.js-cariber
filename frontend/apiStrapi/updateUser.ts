import UserManager from "../auth/userManager";
import { strapiUpdateUserApi } from "../models/content";

export interface UpdateUserApiProps {
  fullName: string,
  timeZone: string,
  notifyUpdatesProducts: boolean,
  notifyReplyMyPosts: boolean,
  emailPromotions: boolean,
  avatarUser?: any,
  bio: string,
  location: string
}

export default async function updateUserApi(body: UpdateUserApiProps) {
  const userManager = new UserManager()
  const formData = new FormData();
  formData.append("fullName", body.fullName)
  formData.append("timeZone", body.timeZone)
  formData.append("notifyUpdatesProducts", String(body.notifyUpdatesProducts))
  formData.append("notifyReplyMyPosts", String(body.notifyReplyMyPosts))
  formData.append("emailPromotions", String(body.emailPromotions))
  formData.append("bio", body.bio)
  formData.append("location", body.location)

  const response = await fetch(strapiUpdateUserApi, {
    method: "PUT",
    headers: new Headers({
      'Authorization': userManager.getJwtToken(),
    }),
    body: formData,
  })
  return await response.json()
}