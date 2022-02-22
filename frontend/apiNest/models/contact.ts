import UserManager from "../../auth/userManager";

const BASE_URL = process?.env?.NEXT_PUBLIC_NEST_API || "https://nestjs-dev.cariber.co";
const BASE_API = BASE_URL + "/api";
const userManager = new  UserManager();

export const NEST_API_URLS = {
  auth: BASE_API + "/auth",
  facebookAuth: BASE_API + "/facebook-auth",
  googleAuth: BASE_API + "/google-auth",
  myCourse: BASE_API + "/users/my-course",
  checkExists: BASE_API + "/users/user-exists",
  password: BASE_API + "/users/reset-password",
}

export const NEST_HEADERs = {
  default: {
    "Content-Type": "application/json; charset=utf-8"
  }
}

export function nestHeaderAuth() {
  return {
    "Content-Type": "application/json; charset=utf-8",
    "Authorization": userManager.getJwtToken(),
  }
}