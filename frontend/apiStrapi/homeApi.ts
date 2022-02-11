import { strapiHome } from "./models/content";
import { HomeContent } from "./models/contentType/home";
import { ResponseData } from "./models/data";

export default async function homeApi(){
  const response = await fetch(strapiHome);
  return await response.json() as ResponseData<HomeContent>;
}