import { ReviewShopeeContent } from './models/contentType/reviewShopee';
import { strapiReviewShopees } from './models/content';
import { ResponseDataList } from './models/data';

export default async function reviewShopeesApi(){
    const response = await fetch(strapiReviewShopees);
    return await response.json() as ResponseDataList<ReviewShopeeContent>;
}