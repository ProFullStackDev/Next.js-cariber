import { strapiReview } from "./models/content";
import { ReviewContent } from "./models/contentType/review";
import { ResponseData } from "./models/data";

export default async function reviewApi(){
  const response = await fetch(strapiReview);
  return await response.json() as ResponseData<ReviewContent>;
}