import { Auth } from '../../models/auth';
import { strapiAuthApi } from '../../models/content';

export interface AuthApiProps {
  email: string,
  password: string
}

export default async function authApi(body: AuthApiProps) {
  const formData = new FormData();
  formData.append("identifier", body.email);
  formData.append("password", body.password);
  const response = await fetch(strapiAuthApi, {
    method: "POST",
    body: formData,
  })
  return await response.json() as Auth
}