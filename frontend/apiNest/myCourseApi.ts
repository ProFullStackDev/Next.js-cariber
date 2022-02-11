import { NEST_API_URLS, NEST_HEADERs } from './models/contact';
import { MyCourseContent } from "./models/content/myCourse";

export async function myCourseApi() {
  try {
    const response = await fetch(NEST_API_URLS.myCourse, {
      method: "GET",
      headers: NEST_HEADERs.auth,
    })
    return await response.json() as MyCourseContent;
  } catch (error) {
    console.log(error);
  }
}