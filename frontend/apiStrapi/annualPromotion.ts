import { AnnualPromotion } from '../models/contentType/annualPromotion';
import { strapiAnnualPromotion } from './../models/content';
import { ResponseData } from './../models/data';

export default async function annualPromotionApi() {
  const response = await fetch(strapiAnnualPromotion);
  return await response.json() as ResponseData<AnnualPromotion>;
}