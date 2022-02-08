import { strapiReviewStudents } from "./models/content";
import { ReviewStudentContent } from "./models/contentType/reviewStudent";
import { ResponseDataList } from "./models/data";

export default async function reviewStudentsApi(){
  const response = await fetch(strapiReviewStudents);
  return await response.json() as ResponseDataList<ReviewStudentContent>;
}