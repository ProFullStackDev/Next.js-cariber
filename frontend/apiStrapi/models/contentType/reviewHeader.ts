export interface ReviewHeaderContent {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  url: string;
  facebook_name: string;
  facebook_url: string;
  description: string;
  image: Image;
}

interface Image {
  data: Data;
}

interface Data {
  id: number;
  attributes: AttributesImage;
}

interface AttributesImage{
  name: string;
  size: number;
  url: string;
}