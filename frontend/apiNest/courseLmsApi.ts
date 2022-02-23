import { CourseLms } from './models/content/courseLms';
import { nestHeaderAuth, NEST_API_URLS } from './models/contact';

export async function courseLmsApi(id: string) {
  try {
    const response = await fetch(NEST_API_URLS.courseLms + `/${id}`, {
      method: "GET",
      headers: nestHeaderAuth(),
    })
    return await response.json() as CourseLms;
  } catch (error) {
    console.log(error);
  }
} 