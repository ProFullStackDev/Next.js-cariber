import { useState } from "react";
import Login from "./login";
import Register from "./register";

enum SwitchPage {
  SignIn,
  SignUp
}

export default function SwitchSignInSignUp() {
  const [actualPage, setActualPage] = useState(SwitchPage.SignIn);

  function switchPage() {
    setActualPage(actualPage === SwitchPage.SignIn ? SwitchPage.SignUp : SwitchPage.SignIn)
  }

  return (
    <div>
      {actualPage === SwitchPage.SignIn ? (<Login callbackButton={switchPage} />) : (<Register callbackButton={switchPage}/>)}
    </div>
  )
}