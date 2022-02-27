import UserManager from "../../auth/userManager";

const BASE_URL = process?.env?.NEXT_PUBLIC_NEST_API || "https://nestjs-dev.cariber.co";
const BASE_API = BASE_URL + "/api";
const userManager = new  UserManager();

export const NEST_API_URLS = {
  auth: BASE_API + "/auth",
  facebookAuth: BASE_API + "/facebook-auth",
  googleAuth: BASE_API + "/google-auth",
  myCourse: BASE_API + "/users/my-course",
  checkContactGuard: BASE_API + "/users/contact-guard",
  checkExists: BASE_API + "/users/user-exists",
  resetPassword: BASE_API + "/users/reset-password",
  users: BASE_API + "/users",
  contactGuard: BASE_API + "/contact/create-contact",
  courseLms: BASE_API + "/course",
  episode: BASE_API + "/episode",
  mySubscription: BASE_API + "/subscriptions/my-subscription",
  checkPassword: BASE_API + "/users/check-password",
  courseEvaluation: BASE_API + '/course-evaluation',
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