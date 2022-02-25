import { nestHeaderAuth, NEST_API_URLS } from './models/contact';
import { RegisterContent } from './models/content/register';

export interface ResetPasswordProps {
  password: string;
  passwordConfirmation: string;
}

export default async function resetPasswordApi(body: ResetPasswordProps) {
  try {
    const response = await fetch(NEST_API_URLS.resetPassword, {
      method: "POST",
      headers: nestHeaderAuth(),
      body: JSON.stringify(body),
    })
    return await response.json() as RegisterContent;
  } catch (error) {
    console.log(error);
  }
}