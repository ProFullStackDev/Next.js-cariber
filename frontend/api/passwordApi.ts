import { Auth } from "../models/auth"
import { strapiPasswordApi } from "../models/content"

export async function passwordApi(formData: FormData) {
  const response = await fetch(strapiPasswordApi, {
    method: "POST",
    body: formData,
  })
  const data = await response.json() as Auth
  return data
}