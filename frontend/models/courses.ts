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
  course_detail: CourseDetail;
  episodes: Episode[];
}

export interface CourseDetail {
  id: number;
  name: string;
  total_hours: string;
  total_lessons: string;
  order_link: string;
  header: string;
  teaser: string;
  teaser_url: string;
  order_image: OrderImage;
  speaker_details: SpeakerDetails;
  contents: Contents[];
}

export interface Contents{
  __component: string;
  id: number;
  items: Item[];
  topics: Topics[];
  title: string;
  description: string;
  video_url: string;
}
export interface Topics{
  id: number;
  label: string;
  image: Image;
}

export interface Image{
  id: number;
  url: string;
}

export interface Item{
  id: number;
  label: string;
}

export interface OrderImage {
  id: number;
  url: string;
}

export interface SpeakerDetails{
  id: number;
  url: string;
  width: number;
  height: number;
}

export interface Thumbnail {
  id: number;
  name: string;
  url: string;
}

export interface Episode {
  id: number;
  episode_name: string;
  episode_descriptions: string;
  link_video: string;
  video: Video[]
}

export interface Video{
  id: number;
  url: string;
}