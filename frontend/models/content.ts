export const strapi = "https://strapi-dev.cariber.co";
export const strapiApi = strapi + "/api";
export const strapiAuthApi = strapiApi+"/auth/local";
export const strapiRegisterApi = strapiApi+"/auth/local/register";
export const strapiForgotPasswordApi = strapiApi+"/auth/forgot-password";
export const strapiPasswordApi = strapiApi+"/auth/reset-password";

export function strapiImage(url: string){
  return strapi+url
}