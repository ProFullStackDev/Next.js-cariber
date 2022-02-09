import { strapiReviewHeader } from './models/content';
import { ReviewHeaderContent } from './models/contentType/reviewHeader';
import { ResponseData } from './models/data';

export default async function reviewHeaderApi(){
    const response = await fetch(strapiReviewHeader);
    return await response.json() as ResponseData<ReviewHeaderContent>;
}