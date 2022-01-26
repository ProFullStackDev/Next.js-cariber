export const strapi = "https://strapi-dev.cariber.co";
export const strapiApi = strapi + "/api";
export const strapiApiAuth = strapiApi+"/auth/local";

export function strapiImage(url: string){
  return strapi+url
}