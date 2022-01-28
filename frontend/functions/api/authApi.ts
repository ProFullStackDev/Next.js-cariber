import { Auth } from '../../models/auth';
import { strapiAuthApi } from '../../models/content';

export default async function authApi(formData: FormData) {
  const response = await fetch(strapiAuthApi, {
    method: "POST",
    body: formData,
  })
  return await response.json() as Auth
}