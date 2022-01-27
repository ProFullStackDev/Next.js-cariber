import { useRouter } from "next/router";
import { useEffect } from "react";
import UserManager from "../auth/userManager";


export default function Logout() {
  const userManager = new UserManager();
  const router = useRouter();
  userManager.destroyToken()
  useEffect(() => {
    router.push("/")
  })
  return(
    <div></div>
  )
}