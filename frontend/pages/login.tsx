import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import Popup from "reactjs-popup";
import UserManager from "../auth/userManager";
import Footer from "../components/footer";
import Header from "../components/header";
import Img from "../components/image";
import { Auth } from "../models/auth";
import { strapiApiAuth } from "../models/content";

export default function Login() {
  const router = useRouter()
  const userManager = new UserManager()
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  async function loginRequest() {
    setError({
      isError: false,
      message: ""
    })
    const formData = new FormData();
    formData.append('identifier', "test_user@codium.co");
    formData.append('password', "Codium123!");
    try {
      const response = await fetch(strapiApiAuth, {
        method: "POST",
        body: formData,
      })
      const data = await response.json() as Auth
      if (data.error === undefined) {
        userManager.saveToken(data.jwt)
        router.replace("/library")
      } else {
        setError({
          isError: true,
          message: data.error.message
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  function showError(message: string) {
    return (
      <div className="auth-message alert alert-danger">
        {message}
      </div>
    )
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
                  {error.isError && (
                    showError(error.message)
                  )}
                  <div className="form-group">
                    <label className="auth-label" form="member-email">
                      ชื่ออีเมลหรือชื่อผู้ใช้งาน
                    </label>
                    <input id="member-email" className="form-control auth-field" type="text"></input>
                  </div>
                  <div className="form-group">
                    <label className="auth-label" form="member-password">
                      รหัสผ่าน
                    </label>
                    <input id="member-password" className="form-control auth-field" type="password"></input>
                  </div>
                  <button id="form-button" onClick={loginRequest} className="form-btn btn-solid btn-full" type="button">
                    เข้าสู่ระบบ
                  </button>
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
                      <div style={{ maxHeight: "25px", margin: "auto 0px" }}>
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
                          <div className="block-type-form h-340 text-center">
                            <div className="block box-shadow-none">
                              <Img className="logo-image m-t-2"
                                src="/header/header-logo.png"
                                width={120}
                                height={41.8833}
                                alt="Header Logo"
                              />
                              <div className="form p-t-30">
                                <form action="">
                                  <div className="email-field form-group">
                                    <input id="form_submission_email"
                                      className="form-control"
                                      type="email"
                                      required={true}
                                      placeholder="อีเมลของคุณ" />
                                  </div>
                                  <div className="text-field form-group">
                                    <input id="form_submission_password"
                                      className="form-control"
                                      type="password"
                                      required={true}
                                      placeholder="รหัสผ่าน" />
                                  </div>
                                  <div className="phone-field form-group">
                                    <input id="form_submission_confirm_password"
                                      className="form-control"
                                      type="tel"
                                      required={true}
                                      placeholder="ยืนยันรหัสผ่าน" />
                                  </div>
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