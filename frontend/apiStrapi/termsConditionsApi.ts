import { STRAPI_API_URLS } from "./models/contact";
import { TermsConditionsContent } from "./models/contentType/termsConditions";
import { ResponseData } from "./models/data";

export default async function termsConditionsApi() {
  const response = await fetch(STRAPI_API_URLS.termsConditions);
  return await response.json() as ResponseData<TermsConditionsContent>;
}