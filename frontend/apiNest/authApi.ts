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
  try {
    const response = await fetch(nestAuthApi, {
      method: "POST",
      headers: headersNest,
      body: await formDataToJson(formData),
    })
    return await response.json() as Auth;
  } catch (error) {
    console.log(error)
  }
}

export async function validateTokenApi() {
  try {
    const response = await fetch(nestAuthApi, {
      method: "GET",
      headers: headersNest,
    })
    return await response.json() as ValidateAuth;
  } catch (error) {
    console.log(error)
  }
}