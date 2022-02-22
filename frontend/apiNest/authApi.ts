import { NEST_HEADERs, NEST_API_URLS, nestHeaderAuth } from './models/contact';
import { Auth, ValidateAuth } from './models/content/auth';

export interface AuthApiProps {
  username: string;
  password: string;
}

export interface NextAuthResponse {
  error: string;
  ok: boolean;
  status: number;
  url: string | null;
}

export async function loginApi(body: AuthApiProps) {
  const response = await fetch(NEST_API_URLS.auth, {
    method: "POST",
    headers: NEST_HEADERs.default,
    body: JSON.stringify(body),
  })
  return await response.json() as Auth;
}

export async function loginOrCreateApi(body: any) {
  const response = await fetch(NEST_API_URLS.checkExists, {
    method: "POST",
    headers: NEST_HEADERs.default,
    body: JSON.stringify(body),
  })
  return await response.json() as any;
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
      headers: nestHeaderAuth(),
    })
    return await response.json() as ValidateAuth;
  } catch (error) {
    console.log(error)
  }
}
