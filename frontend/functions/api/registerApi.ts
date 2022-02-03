import { strapiRegisterApi } from "../../models/content";
import { RegisterResponse } from "../../models/register";

export interface RegisterApiProps {
  email: string,
  password: string
}

export default async function registerApi(body: RegisterApiProps) {
  const formData = new FormData();
  formData.append("email", body.email);
  formData.append("password", body.password);
  const response = await fetch(strapiRegisterApi, {
    method: "POST",
    body: formData,
  })
  return await response.json() as RegisterResponse
}