export interface Course {
  id: number;
  speaker_name: string;
  course_name: string;
  description: string;
  asset_download: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  publish_date: string;
  thumbnail_image: Thumbnail;
  thumbnail_video: Thumbnail;
  course_detail: string;
}

export interface Thumbnail {
  id: number;
  name: string;
  url: string;
}