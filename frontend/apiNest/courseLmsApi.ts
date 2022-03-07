import {CourseLMS} from './models/content/courseLms';
import { nestHeaderAuth, NEST_API_URLS } from './models/contact';

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

export async function getTrackRecord(courseID: number | null): Promise<number[]> {
  if (!courseID) {
    return [];
  }
  try {
    const response = await fetch(NEST_API_URLS.trackRecord + `?course=${courseID}` , {
      method: "GET",
      headers: nestHeaderAuth(),
    })
    return await response.json() as number[];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function createNewTrack(data: {courseID: number, episodeID: number}): Promise<void> {
  try {
    await fetch(NEST_API_URLS.trackRecord, {
      method: "POST",
      headers: nestHeaderAuth(),
      body: JSON.stringify(data)
    })
  } catch (error) {
    console.log(error);
  }
}
