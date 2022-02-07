import { ResponseData } from './../models/data';
import { strapiSingleCourse } from "../models/content";
import { SingleCourse } from '../models/contentType/singleCourse';

export default async function singleCourseApi() {
  const response = await fetch(strapiSingleCourse);
  return await response.json() as ResponseData<SingleCourse>;
}