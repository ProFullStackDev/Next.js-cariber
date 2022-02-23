import { EpisodeLms } from './models/content/courseLms';
import { nestHeaderAuth, NEST_API_URLS } from "./models/contact";

export async function episodeApi(id: string) {
  try {
    const response = await fetch(NEST_API_URLS.episode + `/${id}`, {
      method: "GET",
      headers: nestHeaderAuth(),
    })
    return await response.json() as EpisodeLms;
  } catch (error) {
    console.log(error);
  }
} 