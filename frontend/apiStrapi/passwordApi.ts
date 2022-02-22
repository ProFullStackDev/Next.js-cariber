import { STRAPI_API_URLS } from './models/contact';
import { Auth } from "../apiNest/models/content/auth";
import { NEST_API_URLS } from '../apiNest/models/contact';

export interface PasswordApiProps {
  code?: string,
  password: string,
  passwordConfirmation: string
}

export default async function passwordApi(body: PasswordApiProps) {
  const formData = new FormData();
  body.code && formData.append("code", body.code);
  formData.append("password", body.password);
  formData.append("passwordConfirmation", body.password);
  const response = await fetch(STRAPI_API_URLS.password, {
    method: "POST",
    body: formData,
  })
  return await response.json() as Auth
}


export async function passwordApiNestjs(body: PasswordApiProps) {
  const formData = new FormData();
  const token = body.code
  delete body.code
  formData.append("password", body.password);
  formData.append("passwordConfirmation", body.password);
  const response = await fetch(NEST_API_URLS.password, {
    method: "POST",
    body: formData,
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  return await response.json() as Auth
}


