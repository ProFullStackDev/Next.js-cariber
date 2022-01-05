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

export interface CoursesSoon {
  image: string,
  alt: string,
}

export interface FrequentlyAskedQuestion {
  title: string,
  description: string[],
}

export interface CoursesLatest {
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