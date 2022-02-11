import { STRAPI_API_URLS } from './models/contact';

export interface ForgotPasswordApiProps {
  email: string
}

export default async function forgotPasswordApi(body: ForgotPasswordApiProps) {
  const formData = new FormData();
  formData.append("email", body.email);
  const response = await fetch(STRAPI_API_URLS.forgotPassword, {
    method: "POST",
    body: formData,
  })
  return await response.json()
}