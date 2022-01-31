import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import Popup from "reactjs-popup";
import authApi from "../functions/api/authApi";
import registerApi from "../functions/api/registerApi";
import UserManager from "../auth/userManager";
import Footer from "../components/footer";
import FormInput from "../components/formInput";
import Header from "../components/header";
import Img from "../components/image";
import ShowError from "../components/showError";

export default function Login() {
  const router = useRouter()
  const userManager = new UserManager()
  const [errorLogin, setErrorLogin] = useState({
    isError: false,
    message: "",
  });
  const [errorRegister, setErrorRegister] = useState({
    isError: false,
    message: "",
  });
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: ""
  });
  const [formRegister, setFormRegister] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  async function loginRequest(event?: FormEvent) {
    event && event.preventDefault();
    setErrorLogin({
      isError: false,
      message: ""
    })
    const formData = new FormData();
    formData.append("identifier", formLogin.email);
    formData.append("password", formLogin.password);
    const data = await authApi(formData)
    if (data.error === undefined) {
      userManager.saveToken(data.jwt)
      router.replace("/library")
    } else {
      setErrorLogin({
        isError: true,
        message: data.error.message
      })
    }
  }

  async function registerRequest(event: FormEvent) {
    event.preventDefault();
    if (formRegister.password !== formRegister.confirmPassword) {
      setErrorRegister({
        isError: true,
        message: "Passwords do not match"
      })
      return
    }
    const formData = new FormData();
    formData.append("email", formRegister.email);
    formData.append("password", formRegister.password);
    const data = await registerApi(formData)
    if (data.error === undefined) {
      formLogin.email = formRegister.email
      formLogin.password = formRegister.password
      loginRequest()
    } else {
      setErrorRegister({
        isError: true,
        message: data.error.message
      })
    }
  }

  return (
    <div className="background-image login">
      <Header />
      <div className="sizer sizer-full">
        <div className="container">
          <div className="row align-items-center justify-content-center ">
            <div className="col-6 text-center">
              <div className="auth-content">
                <div className="auth-image">
                  <Img
                    src="/login/image-title.jpg"
                    alt="Cariber Login"
                    width={615}
                    height={274.183}
                  />
                </div>
                <div>
                  {errorLogin.isError && (<ShowError message={errorLogin.message} />)}
                  <form onSubmit={loginRequest}>
                    <div className="form-group">
                      <label className="auth-label" form="member-email">
                        ชื่ออีเมลหรือชื่อผู้ใช้งาน
                      </label>
                      <FormInput id={"member-email"}
                        type={"email"}
                        required={true}
                        placeholder={""}
                        onChange={(e) => { formLogin.email = e.currentTarget.value }} />
                    </div>
                    <div className="form-group">
                      <label className="auth-label" form="member-password">
                        รหัสผ่าน
                      </label>
                      <FormInput id={"member-password"}
                        type={"password"}
                        required={true}
                        placeholder={""}
                        onChange={(e) => { formLogin.password = e.currentTarget.value }} />
                    </div>
                    <button id="form-button" className="form-btn btn-solid btn-full" type="submit">
                      เข้าสู่ระบบ
                    </button>
                  </form>
                  <div className="form-group p-t-15 p-x-0 p-n-5">
                    <label className="jus-between">
                      <span className="auth-label">
                        <input className="boolean optional" type="checkbox" value="1" id="member-remember-me">
                        </input>
                        จดจำรหัสผ่าน
                      </span>
                      <span className="justify-end">
                        <Link href="/forgot-password" passHref={true}>
                          <a className="link-colorful">
                            ลืมรหัสผ่าน
                          </a>
                        </Link>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="social-registration">
                  <div className="line-or">
                    <hr className="col-5" />
                    <p>
                      หรือ
                    </p>
                    <hr className="col-5" />
                  </div>
                  <a className="btn btn-box btn-solid btn-full">
                    <div className="flex-row">
                      <Img src="/login/google-icon.svg"
                        width={25}
                        height={25}
                        alt="Google"
                      />
                      <hr />
                      <p className="text-btn">
                        เข้าสู่ระบบด้วย Google
                      </p>
                    </div>
                  </a>
                  <a className="btn btn-box btn-solid btn-full">
                    <div className="flex-row">
                      <div className="facebook-icon">
                        <Img src="/login/facebook-icon.svg"
                          width={25}
                          height={25}
                          alt="Facebook"
                        />
                      </div>
                      <hr />
                      <p className="text-btn">
                        เข้าสู่ระบบด้วย Facebook
                      </p>
                    </div>
                  </a>
                </div>
                <div className="m-t-30">
                  <Popup className="popup-register"
                    trigger={
                      <button className="link-colorless" >
                        สร้างบัญชีผู้ใช้งานใหม่
                      </button>
                    }
                    modal
                    closeOnDocumentClick={false}
                    position="right center">
                    {(close: any) => {
                      return (
                        <div className="pop-modal">
                          <button className="close" onClick={close}>
                            &times;
                          </button>
                          <div className="block-type-form text-center">
                            <div className="block box-shadow-none">
                              <Img className="logo-image m-t-2"
                                src="/header/header-logo.png"
                                width={120}
                                height={41.8833}
                                alt="Header Logo"
                              />
                              <div className="form p-t-30">
                                <form onSubmit={registerRequest}>
                                  {errorRegister.isError && (<ShowError message={errorRegister.message} />)}
                                  <FormInput id={"email"}
                                    type={"email"}
                                    required={true}
                                    placeholder={"อีเมล"}
                                    onChange={(e) => { formRegister.email = e.currentTarget.value }} />
                                  <FormInput id={"password"}
                                    type={"password"}
                                    required={true}
                                    placeholder={"รหัสผ่าน"}
                                    onChange={(e) => { formRegister.password = e.currentTarget.value }} />
                                  <FormInput id={"confirm-password"}
                                    type={"password"}
                                    required={true}
                                    placeholder={"ยืนยันรหัสผ่าน"}
                                    onChange={(e) => { formRegister.confirmPassword = e.currentTarget.value }} />
                                  <button id="form-button" className="btn btn-solid btn-full btn-small" type="submit">
                                    ลงทะเบียน
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }}
                  </Popup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}