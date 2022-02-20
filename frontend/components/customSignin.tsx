import { FormEvent, MouseEventHandler, useState } from "react";
import { AuthApiProps, loginApi, loginOrCreateApi, NextAuthResponse } from "../apiNest/authApi";
import FormInput from "./formInput";
import ShowError from "./showError";
import Link from "next/link";
import Img from "./image";
import { signIn } from 'next-auth/react';
import UserManager from "../auth/userManager";
import { useRouter } from "next/router";

interface CustomLoginProp {
    path: string,
    callbackButton: Function
  }


export default function CustomLogin({ path, callbackButton }: CustomLoginProp) {
  const userManager = new UserManager();
  const router = useRouter();
  const [formLogin, setFormLogin] = useState({
    email: "",
  })
  const [password, setPassword] = useState("")
  const [errorLogin, setErrorLogin] = useState({
    isError: false,
    message: "",
  })
  const [userExits, setUserExits] = useState(false)
  async function loginRequest(event?: FormEvent) {
    event && event.preventDefault();
    setErrorLogin({
      isError: false,
      message: ""
    })
    if (userExits) {
        const dataLogin = await signIn("credentials", {
            redirect: false,
            email: formLogin.email,
            password: password,
          }) as unknown as NextAuthResponse;
          callbackButton(path)
    } else {
        const dataLogin = await loginOrCreateApi(formLogin)
        setUserExits(dataLogin.is_exist)   
        if(!dataLogin.is_exist){
            userManager.saveToken(dataLogin?.access_token)
            callbackButton(path)
        }
    }
    
  }

  async function socialLogin(type?: string) {
    await signIn(type);
  }

  return (
    <div>
      <h2 className="color-white text-center">
        เข้าสู่ระบบ
      </h2>
      <div className="column-center">
        <button
          className="btn btn-icon btn-full m-b-5 m-x-0 background-color-facebook"
          onClick={() => socialLogin('facebook')}>
          <div className="icon-frame p-0">
            <Img src="/login/facebook-icon.png"
              width={25}
              height={25}
              alt="Facebook"
            />
          </div>
          เข้าสู่ระบบด้วย Facebook
        </button>
        <button
          className="btn btn-icon btn-full m-b-10 m-x-0 background-color-google"
          onClick={() => socialLogin('google')}>
          <div className="icon-frame">
            <Img src="/login/google-icon.svg"
              width={25}
              height={25}
              alt="Google"
            />
          </div>
          เข้าสู่ระบบด้วย Google
        </button>
      </div>
      <hr />
      <div className="p-20">
        <div className="block-type-form text-center">
          <div className="block box-shadow-none">
            <div className="form">
              <form onSubmit={loginRequest}>
                {errorLogin.isError && (<ShowError message={errorLogin.message} />)}
                <div className="form-group">
                  <label className="label" form="member-email">
                    อีเมล
                  </label>
                  <FormInput id={"email"}
                    type={"email"}
                    required={true}
                    placeholder={""}
                    onChange={(e) => { formLogin.email = e.currentTarget.value; }}
                    minLength={0} />
                </div>
                { userExits ? (
                    <div className="form-group">
                    <label className="label" form="member-email">
                        รหัสผ่าน
                    </label>
                    <FormInput id={"password"}
                        type={"password"}
                        required={true}
                        placeholder={""}
                        onChange={(e) => { setPassword(e.currentTarget.value); }}
                        minLength={8} />
                    </div>)
                    : (
                        <div></div>
                    ) }
                
                <button id="form-button" className="btn btn-solid btn-full btn-small" type="submit">
                  เข้าสู่ระบบ
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
