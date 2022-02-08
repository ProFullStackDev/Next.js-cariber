import { Auth } from "./models/contentType/auth"
import { strapiPasswordApi } from "./models/content"

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
  const response = await fetch(strapiPasswordApi, {
    method: "POST",
    body: formData,
  })
  return await response.json() as Auth
}