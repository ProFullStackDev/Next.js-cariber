// export const strapi = "https://strapi-dev.cariber.co";
export const strapi = "http://localhost:1337";
export const strapiApi = strapi + "/api";
export const strapiAuthApi = strapiApi+"/auth/local";
export const strapiRegisterApi = strapiApi+"/auth/local/register";
export const strapiForgotPasswordApi = strapiApi+"/auth/forgot-password";
export const strapiPasswordApi = strapiApi+"/auth/reset-password";
export const strapiGetUserProfileApi = strapiApi+"/user/get-me";
export const strapiUpdateUseProfilerApi = strapiApi+"/user/update-me";
export const strapiSingleCourse = strapiApi+"/single-course?populate=*";
export const strapiAnnualPromotion = strapiApi+"/annual-promotion?populate=*";
export const strapiReview = strapiApi+"/review";
export const strapiHome = strapiApi+"/home";

export function strapiImage(url: string){
  if(url){
    return strapi+url;
  }
  return "";
}