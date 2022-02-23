export interface MyCourseContent {
  id: string;
  email: string;
  status: string;
  course_list: MyCourseItem[];
}

export interface MyCourseItem {
  id: number;
  speaker_name: string;
  description: string;
  expires_date: string;
  course_name: string;
  thumbnail_image: string;
}