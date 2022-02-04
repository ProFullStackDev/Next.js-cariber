import { useRouter } from "next/router";
import { FormEvent, MouseEventHandler, useState } from "react";
import authApi, { AuthApiProps } from "../apiStrapi/authApi";
import UserManager from "../auth/userManager";
import FormInput from "./formInput";
import ShowError from "./showError";
import Link from "next/link";
import Img from "./image";

interface LoginProps {
  callbackButton: MouseEventHandler<HTMLButtonElement>
}

export default function Login({ callbackButton }: LoginProps) {
  const router = useRouter()
  const userManager = new UserManager()
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  })
  const [errorLogin, setErrorLogin] = useState({
    isError: false,
    message: "",
  })

  async function loginRequest(event?: FormEvent) {
    event && event.preventDefault();
    setErrorLogin({
      isError: false,
      message: ""
    })
    const formData: AuthApiProps = {
      email: formLogin.email,
      password: formLogin.password
    }
    const data = await authApi(formData)
    if (!data.error) {
      userManager.saveToken(data.jwt)
      router.replace("/library")
    } else {
      setErrorLogin({
        isError: true,
        message: data.error.message
      })
    }
  }

  return (
    <div>
      <h2 className="color-white text-center">
        เข้าสู่ระบบ
      </h2>
      <div className="column-center">
        <button className="btn btn-icon btn-full m-b-5 m-x-0 background-color-facebook">
          <div className="icon-frame p-0">
            <Img src="/login/facebook-icon.png"
              width={25}
              height={25}
              alt="Facebook"
            />
          </div>
          เข้าสู่ระบบด้วย Facebook
        </button>
        <button className="btn btn-icon btn-full m-b-10 m-x-0 background-color-google">
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
                    onChange={(e) => { formLogin.email = e.currentTarget.value }} />
                </div>
                <div className="form-group">
                  <label className="label" form="member-email">
                    รหัสผ่าน
                  </label>
                  <FormInput id={"password"}
                    type={"password"}
                    required={true}
                    placeholder={""}
                    onChange={(e) => { formLogin.password = e.currentTarget.value }} />
                </div>
                <button id="form-button" className="btn btn-solid btn-full btn-small" type="submit">
                  เข้าสู่ระบบ
                </button>
              </form>
            </div>
            <div className="login-bottom">
              <div className="color-white row justify-content-center">
                ไม่ได้เป็นสมาชิก?
                &nbsp;
                <button onClick={callbackButton} className="btn btn-small m-0 p-0 link-colorless color-white">
                  คลิกเพื่อสร้างบัญชีผู้ใช้งานใหม่
                </button>
              </div>
              <Link href={"/forgot-password"} passHref={true}>
                <a className="btn btn-small m-t-20 m-0 p-0 link-colorless color-white">
                  ลืมรหัสผ่าน?
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}