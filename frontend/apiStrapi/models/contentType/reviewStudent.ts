export interface ReviewStudentContent {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  career: string;
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

interface AttributesImage {
  name: string;
  size: number;
  url: string;
}