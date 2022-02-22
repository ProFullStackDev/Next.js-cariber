import { NEST_API_URLS, NEST_HEADERs } from './models/contact';
import { Register } from './models/content/register';

export interface RegisterApiProps {
  email: string,
  password: string
}

export default async function registerApi(body: RegisterApiProps) {
  const formData = new FormData();
  formData.append("email", body.email);
  formData.append("password", body.password);
  const response = await fetch(NEST_API_URLS.register, {
    method: "POST",
    headers: NEST_HEADERs.default,
    body: JSON.stringify(body),
  })
  return await response.json() as Register;
}