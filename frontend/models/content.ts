export const strapi = "http://localhost:1337";
export const strapiApi = strapi + "/api";
export const strapiAuthApi = strapiApi+"/auth/local";
export const strapiRegisterApi = strapiApi+"/auth/local/register";
export const strapiForgotPasswordApi = strapiApi+"/auth/forgot-password";
export const strapiPasswordApi = strapiApi+"/auth/reset-password";
export const strapiGetUserApi = strapiApi+"/user/get-me";
export const strapiUpdateUserApi = strapiApi+"/user/update-me";

export function strapiImage(url: string){
  return strapi+url
}