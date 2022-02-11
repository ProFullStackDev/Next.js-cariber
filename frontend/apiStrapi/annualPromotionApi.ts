import { STRAPI_API_URLS } from './models/contact';
import { AnnualPromotionContent } from './models/contentType/annualPromotion';
import { ResponseData } from './models/data';

export default async function annualPromotionApi() {
  const response = await fetch(STRAPI_API_URLS.annualPromotion);
  return await response.json() as ResponseData<AnnualPromotionContent>;
}