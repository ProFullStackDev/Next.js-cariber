import { STRAPI_API_URLS } from './models/contact';
import { User } from "./models/contentType/auth";
import { ResponseData } from "./models/data";

export interface RegisterApiProps {
  email: string,
  password: string
}

export default async function registerApi(body: RegisterApiProps) {
  const formData = new FormData();
  formData.append("email", body.email);
  formData.append("password", body.password);
  const response = await fetch(STRAPI_API_URLS.register, {
    method: "POST",
    body: formData,
  })
  return await response.json() as ResponseData<User>
}