export interface AnnualPromotion {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  url: string;
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