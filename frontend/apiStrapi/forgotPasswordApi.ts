import { strapiForgotPasswordApi } from "../models/content"

export interface ForgotPasswordApiProps {
  email: string
}

export default async function forgotPasswordApi(body: ForgotPasswordApiProps) {
  const formData = new FormData();
  formData.append("email", body.email);
  const response = await fetch(strapiForgotPasswordApi, {
    method: "POST",
    body: formData,
  })
  return await response.json()
}