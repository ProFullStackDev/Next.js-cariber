import { Episode } from "../../models/contentType/courses";
import { Icon } from "../accordion";

export interface TimeZone {
  value: string,
  text: string
}

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
  description: string,
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

export interface CourseDetailInterestingTopic {
  image: string,
  name: string,
}

export interface CourseDetailCourseHeader {
  yearlySubscriptionImage: string,
  yearlySubscriptionImageMobile: string,
  singleCourseImage: string,
  videoId: string,
  videoPoster: string,
  singleCheckoutUrl: string
}

export interface CourseDetailIntroductionPersonal {
  fullName: string,
  personalHistoryImage: string,
  highRatio: number,
}

export interface CourseDetailEpisode {
  totalHours: string,
  totalEpisodes: string,
  episodes: Episode[],
}

export interface CourseDetailSale {
  yearlySubscriptionImage: string,
  yearlySubscriptionImageMobile: string,
  singleCoursePersonalImage: string,
  singleCheckoutUrl: string,
}

export interface ProductEpisode {
  image: string,
  title: string,
  description: string,
  progress: number,
  icon: Icon
}