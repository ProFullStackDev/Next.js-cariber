import { strapiReviewCaribers } from "./models/content";
import { ReviewCariberContent } from "./models/contentType/reviewCariber";
import { ResponseDataList } from "./models/data";

export default async function reviewCaribersApi(){
  const response = await fetch(strapiReviewCaribers);
  return await response.json() as ResponseDataList<ReviewCariberContent>;
}