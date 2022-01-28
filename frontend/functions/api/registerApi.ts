import { strapiRegisterApi } from "../../models/content";
import { RegisterResponse } from "../../models/register";

export default async function registerApi(formData: FormData) {
  const response = await fetch(strapiRegisterApi, {
    method: "POST",
    body: formData,
  })
  return await response.json() as RegisterResponse
}