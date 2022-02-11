import UserManager from "../../auth/userManager";
const BASE_URL = process?.env?.NEXT_PUBLIC_NEST_API || "https://nestjs-dev.cariber.co";
const BASE_API = BASE_URL + "/api";
const userManager = new UserManager();

export const NEST_API_URLS = {
  auth: BASE_API + "/auth",
  myCourse: BASE_API + "/users/my-course",
}

export const NEST_HEADERs = {
  default: {
    "Content-Type": "application/json; charset=utf-8"
  },
  auth: {
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": userManager.getJwtToken(),
  },
}