import { NEST_HEADERs, NEST_API_URLS } from './models/contact';
import { Auth, ValidateAuth } from './models/content/auth';
import formDataToJson from '../functions/formDataToJson';

export interface AuthApiProps {
  email: string;
  password: string;
}

export async function loginApi(body: AuthApiProps) {
  const formData = new FormData();
  formData.append("username", body.email);
  formData.append("password", body.password);
  try {
    const response = await fetch(NEST_API_URLS.auth, {
      method: "POST",
      headers: NEST_HEADERs.default,
      body: await formDataToJson(formData),
    })
    return await response.json() as Auth;
  } catch (error) {
    console.log(error)
  }
}

export async function getGoogleAuthToken(body: any): Promise<Auth> {
  const response = await fetch(NEST_API_URLS.googleAuth, {
    method: 'POST',
    headers: NEST_HEADERs.default,
    body: JSON.stringify(body),
  })
  return await response.json() as Auth;
}

export async function getFacebookAuthToken(body: any): Promise<Auth> {
  const response = await fetch(NEST_API_URLS.facebookAuth, {
    method: 'POST',
    headers: NEST_HEADERs.default,
    body: JSON.stringify(body),
  })
  return await response.json() as Auth;
}

export async function validateTokenApi() {
  try {
    const response = await fetch(NEST_API_URLS.auth, {
      method: "GET",
      headers: NEST_HEADERs.auth,
    })
    return await response.json() as ValidateAuth;
  } catch (error) {
    console.log(error)
  }
}
