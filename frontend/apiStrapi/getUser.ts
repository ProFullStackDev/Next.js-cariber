import UserManager from "../auth/userManager"
import { strapiGetUserApi } from "../models/content"

export default async function getUser() {
  const userManager = new UserManager()
  const response = await fetch(strapiGetUserApi, {
    method: "GET",
    headers: new Headers({
      'Authorization': userManager.getJwtToken(), 
    })
  })
  return await response.json()
}