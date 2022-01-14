export interface Feature {
  image: string,
  name: string,
  career: string,
  review: string,
}

export interface ShopeeReview {
  rating: string,
  review: string,
  name: string,
  date: string,
}

export interface MyStudent {
  image: string,
  alt: string,
  width: number,
  height: number,
}

export interface CourseSoon {
  image: string,
  alt: string,
}

export interface CardDescription {
  title: string,
  description: string[],
}

export interface CourseLatest {
  image: string,
  alt: string,
  link: string
}

export interface FeatureCariber {
  image: string,
  name: string,
  career: string,
  review: string,
  from: string,
}

export interface FeatureShopee {
  name: string,
  ratings: string,
  review: string,
  from: string,
}

export interface InterestingTopicCourseDetail {
  image: string,
  name: string,
}

export interface CourseHeaderCourseDetail {
  yearlySubscriptionImage: string,
  yearlySubscriptionImageMobile: string,
  singleCourseImage: string,
  video: string,
  videoPoster: string,
}

export interface IntroductionPersonalCourseDetail {
  fullName: string,
  personalHistoryImage: string,
}

export interface EpisodeCourseDetail {
  totalHours: string,
  totalEpisodes: string,
  episodes: CardDescription[],
}

export interface SaleCourseDetail {
  yearlySubscriptionImage: string,
  yearlySubscriptionImageMobile: string,
  singleCoursePersonalImage: string,
}

export interface Product {
  image: string,
  title: string,
  description: string,
  progress: number
}