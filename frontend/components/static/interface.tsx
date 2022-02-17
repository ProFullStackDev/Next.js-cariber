import { Episode } from "../../apiStrapi/models/contentType/courses";
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

export interface CardDescription {
  title: string,
  description: string,
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

export interface CourseDetailEpisode {
  totalHours: string,
  totalEpisodes: string,
  episodes: Episode[],
}

export interface ProductEpisode {
  image: string,
  title: string,
  description: string,
  progress: number,
  icon: Icon
}