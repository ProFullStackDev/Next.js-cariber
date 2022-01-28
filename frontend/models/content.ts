export const strapi = "https://strapi-dev.cariber.co";
export const strapiApi = strapi + "/api";
export const strapiAuthApi = strapiApi+"/auth/local";
export const strapiRegisterApi = strapiApi+"/auth/local/register";

export function strapiImage(url: string){
  return strapi+url
}