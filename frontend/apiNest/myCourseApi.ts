import { nestHeaderAuth, NEST_API_URLS } from './models/contact';
import { MyCourseContent } from "./models/content/myCourse";

export async function myCourseApi(token: string) {
  try {
    const response = await fetch(NEST_API_URLS.myCourse, {
      method: "GET",
      headers: nestHeaderAuth(token),
    })
    return await response.json() as MyCourseContent;
  } catch (error) {
    console.log(error);
  }
}