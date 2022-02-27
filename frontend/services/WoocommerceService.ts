import { WoocommerceCredentials } from "../apiNest/models/content/woocommerce";
import { NEST_API_URLS, nestHeaderAuth } from "../apiNest/models/contact";


export class WoocommerceService {
  static async checkClaimedOrNot(credentials: WoocommerceCredentials) {
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
}