export interface ReviewShopeeContent {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  career: string;
  description: string;
  ratings: number;
}