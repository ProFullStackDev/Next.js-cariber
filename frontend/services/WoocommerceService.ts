import { WoocommerceCredentials } from "../apiNest/models/content/woocommerce";
import { NEST_API_URLS, nestHeaderAuth } from "../apiNest/models/contact";
import {notification} from "antd";
import router from "next/router";
import { validateTokenApi } from "../apiNest/authApi";


export class WoocommerceService {

  public static claimOrderIDWithCurrentUser(shopeeID: string) {
    validateTokenApi().then(
      (res)=> {
        if (!res?.email) {
          notification['error']({ message: 'Email Not Found' })
          return
        }
        const credentials: WoocommerceCredentials = {
          email: res.email || '',
          shopee_id: shopeeID,
        }
        this.checkClaimedOrNot(credentials).then(() => {});
      },
      (error) => notification['error']({ message: error.message }),
    );
  }

  private static async checkClaimedOrNot(credentials: WoocommerceCredentials) {
    try {
      const response = await fetch(NEST_API_URLS.users + `/claim-shopee-id`, {
        method: "POST",
        headers: nestHeaderAuth(),
        body: JSON.stringify(credentials),
      })
      this.redirect('success');
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  private static redirect(type:string) {
    if (type === 'success') { //response === 'Shopee ID has claimed'
      notification['success']({message: 'Successfully Claimed'});
      setTimeout( () => {
        // show notification for 3 s
        router.replace("/library").then(() => {});
      }, 3000);
      return;
    }
    notification['error']({message: 'This Course has been Claimed'});
    setTimeout( () => {
      // show notification for 3 s
      router.replace("/library").then(() => {});
    }, 3000);
  }

}