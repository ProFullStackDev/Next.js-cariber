import { strapiRegisterApi } from "../models/content";
import { RegisterResponse } from "../models/register";

export async function registerApi(formData: FormData) {
  const response = await fetch(strapiRegisterApi, {
    method: "POST",
    body: formData,
  })
  const data = await response.json() as RegisterResponse
  return data
}