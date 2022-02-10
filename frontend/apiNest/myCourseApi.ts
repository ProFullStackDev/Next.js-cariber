import { headersNestAuth, nestMyCourseApi } from "./models/contact";
import { MyCourseContent } from "./models/content/myCourse";

export async function myCourseApi() {
  try {
    const response = await fetch(nestMyCourseApi, {
      method: "GET",
      headers: headersNestAuth,
    })
    return await response.json() as MyCourseContent;
  } catch (error) {
    console.log(error);
  }
}