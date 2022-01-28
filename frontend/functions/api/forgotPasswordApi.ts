import { strapiForgotPasswordApi } from "../../models/content"

export default async function forgotPasswordApi(formData: FormData) {
  const response = await fetch(strapiForgotPasswordApi, {
    method: "POST",
    body: formData,
  })
  return await response.json()
}