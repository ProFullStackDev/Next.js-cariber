import { User } from "../models/auth";
import { strapiRegisterApi } from "../models/content";
import { ResponseData } from "../models/data";

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
  return await response.json() as ResponseData<User>
}