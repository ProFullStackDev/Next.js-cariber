const BASE_URL = process?.env?.NEXT_PUBLIC_STRAPI_API || (process.env.NODE_ENV === "production") ? "https://strapi-dev.cariber.co" : "http://localhost:1337";
const BASE_API = BASE_URL + "/api";

export const STRAPI_API_URLS = {
  auth: BASE_API+"/auth/local",
  forgotPassword: BASE_API+"/auth/forgot-password",
  password: BASE_API+"/auth/reset-password",
  getUserProfile: BASE_API+"/user/get-me",
  updateUseProfiler: BASE_API+"/user/update-me",
  singleCourse: BASE_API+"/single-course?populate=*",
  annualPromotion: BASE_API+"/annual-promotion?populate=*",
  review: BASE_API+"/review",
  home: BASE_API+"/home",
  courses: BASE_API+"/courses",
  termsConditions: BASE_API+"/terms-and-condition?populate=*",
  privacyPolicy: BASE_API+"/privacy-policy",
  carousels: BASE_API+"/carousels?populate=*",
}

export function strapiImage(url: string){
  return url ? BASE_URL + url : "";
}