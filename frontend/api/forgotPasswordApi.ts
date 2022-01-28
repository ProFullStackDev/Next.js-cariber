import { strapiForgotPasswordApi } from "../models/content"

export async function forgotPasswordApi(formData: FormData) {
  const response = await fetch(strapiForgotPasswordApi, {
    method: "POST",
    body: formData,
  })
  const data = await response.json()
  return data
}