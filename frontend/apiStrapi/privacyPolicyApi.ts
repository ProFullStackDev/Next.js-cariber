import { STRAPI_API_URLS } from "./models/contact";
import { TermsConditionsContent } from "./models/contentType/termsConditions";
import { ResponseData } from "./models/data";

export default async function privacyPolicyApi() {
  const response = await fetch(STRAPI_API_URLS.privacyPolicy);
  return await response.json() as ResponseData<TermsConditionsContent>;
}