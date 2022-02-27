export interface CourseLms {
  id: number;
  speaker_name: string;
  course_name: string;
  description: string;
  total_hours: string;
  total_lessons: string;
  order_link: string;
  header: string;
  thumbnail_image: string;
  lms_id: number;
  createDate: string;
  updateDate: string;
  deletedAt: string;
  episode: EpisodeLms[];
  instructor: Instructor;
  asset_download: string;
}

interface Instructor{
	id: number;
	name: string;
	lms_id: number;
	idiom: string;
	profile_image: string;
	createDate:	string;
	updateDate:	string;
	deletedAt:	string;
}

export interface EpisodeLms {
  id: number;
  episode_number: number;
  episode_name: string;
  description: string;
  link_video: string;
  thumbnail_image: string;
  lms_id: number;
  is_free_trial: boolean;
  createDate: string;
  updateDate: string;
  deletedAt: string;
}

export enum ShowingType {
	episode = 'episode',
	quiz = 'quiz',
}

export interface CourseLMS {
	id: number;
	speaker_name: string;
	course_name: string;
	description: string;
	total_hours: string;
	total_lessons: string;
	order_link: string;
	header: string;
	asset_download: string;
	thumbnail_image: string;
	lms_id: number;
	createDate: string;
	updateDate: string;
	deletedAt?: any;
	episodes_list: EpisodesAndQuiz[];
	instructor: Instructor;
}

export interface Episodes {
	id: number;
	episode_number: number;
	episode_name: string;
	description: string;
	link_video: string;
	thumbnail_image: string;
	lms_id: number;
	is_free_trial: boolean;
	createDate: string;
	updateDate: string;
	deletedAt?: string;
	type: ShowingType;
}

export interface Quiz {
	id: number;
	episode_number: number;
	question: string;
	correct_choice: number;
	createDate: string;
	updateDate: string;
	deletedAt?: string;
	choice: QuizChoice[];
	type: ShowingType;
}

export interface QuizChoice {
	id: number;
	choice_number: number;
	choice_description: string;
	createDate: string;
	updateDate: string;
	deletedAt?: string;
}

type EpisodesAndQuiz = Episodes | Quiz;