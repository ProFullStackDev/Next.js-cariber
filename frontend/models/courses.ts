import { Data } from "./data";

export interface Course {
  speaker_name: string;
  course_name: string;
  description: string;
  asset_download: string;
  thumbnail: ThumbnailData
}

export interface ThumbnailData {
  data: Data<Thumbnail>;
}

export interface Thumbnail {
  name: string;
  url: string;
}