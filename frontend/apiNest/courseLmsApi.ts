import {CourseLMS} from './models/content/courseLms';
import { nestHeaderAuth, NEST_API_URLS } from './models/contact';

export interface WatchedEpisodeResponse {
  watchedEpisode: number[];
}

export async function allCourseLmsApi() {
  try {
    const response = await fetch(NEST_API_URLS.courseLms, {
      method: "GET",
      headers: nestHeaderAuth(),
    })
    return await response.json() as CourseLMS[];
  } catch (error) {
    console.log(error);
  }
}

export async function getEpisodesAndQuiz(id: string) {
  try {
    const response = await fetch(NEST_API_URLS.courseLms + `/${id}/get-episode-and-quiz`, {
      method: "POST",
      headers: nestHeaderAuth(),
    })
    return await response.json() as CourseLMS;
  } catch (error) {
    console.log(error);
  }
}

export async function getWatchedEpisodes(courseID: number | null): Promise<WatchedEpisodeResponse> {
  const blankResponse = { watchedEpisode: [] };
  if (!courseID) {
    return blankResponse;
  }
  try {
    const response = await fetch(NEST_API_URLS.watchedEpisode + `?course=${courseID}` , {
      method: "GET",
      headers: nestHeaderAuth(),
    })
    return await response.json() as WatchedEpisodeResponse;
  } catch (error) {
    console.log(error);
    return blankResponse;
  }
}

export async function saveWatchedEpisode(data: {course_id: number, episode_id: number}): Promise<void> {
  try {
    await fetch(NEST_API_URLS.watchedEpisode, {
      method: "POST",
      headers: nestHeaderAuth(),
      body: JSON.stringify(data)
    })
  } catch (error) {
    console.log(error);
  }
}
