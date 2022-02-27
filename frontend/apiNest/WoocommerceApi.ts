import {NEST_API_URLS, nestHeaderAuth} from "./models/contact";

export interface WoocommerceCredentials {
  email: string,
  shopee_id: string,
}

export default async function checkClaimed(credentials: WoocommerceCredentials) {
  try {
    const response = await fetch(NEST_API_URLS.users + `/claim-shopee-id`, {
      method: "POST",
      headers: nestHeaderAuth(),
      body: JSON.stringify(credentials),
    })
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}