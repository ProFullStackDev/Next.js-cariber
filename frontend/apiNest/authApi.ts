import { Auth, ValidateAuth } from './models/content/auth';
import formDataToJson from '../functions/formDataToJson';
import { headersNest, nestAuthApi } from './models/contact';

export interface AuthApiProps {
  email: string;
  password: string;
}

export async function loginApi(body: AuthApiProps) {
  const formData = new FormData();
  formData.append("username", body.email);
  formData.append("password", body.password);
  const response = await fetch(nestAuthApi, {
    method: "POST",
    headers: headersNest,
    body: await formDataToJson(formData),
  })
  return await response.json() as Auth;
}

export async function validateTokenApi() {
  const response = await fetch(nestAuthApi, {
    method: "GET",
    headers: headersNest,
  })
  return await response.json() as ValidateAuth;
}