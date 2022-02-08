import { strapiReviewCaribers } from "./models/content";
import { ReviewCaribersContent } from "./models/contentType/reviewCaribers";
import { ResponseDataList } from "./models/data";

export default async function reviewCaribersApi(){
  const response = await fetch(strapiReviewCaribers);
  return await response.json() as ResponseDataList<ReviewCaribersContent>;
}