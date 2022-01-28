import { Auth } from '../models/auth';
import { strapiAuthApi } from '../models/content';

export async function authApi(formData: FormData) {
  const response = await fetch(strapiAuthApi, {
    method: "POST",
    body: formData,
  })
  const data = await response.json() as Auth
  return data
}