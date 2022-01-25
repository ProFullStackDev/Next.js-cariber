import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import Img from "../components/image";

export default function Login() {
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
                <form action="">
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
                  <button id="form-button" className="form-btn btn-solid btn-full" type="submit">
                    เข้าสู่ระบบ
                  </button>
                  <div className="form-group" style={{ padding: "15px 0px 5px 0px" }}>
                    <label className="jus-between">
                      <span className="auth-label">
                        <input className="boolean optional" type="checkbox" value="1" id="member-remember-me">
                        </input>
                        จดจำรหัสผ่าน
                      </span>
                      <span style={{ justifySelf: "end" }}>
                        <Link href="/forgot-password" passHref={true}>
                          <a className="link-colorful">
                            ลืมรหัสผ่าน
                          </a>
                        </Link>
                      </span>
                    </label>
                  </div>
                </form>
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
                      <div style={{maxHeight: "25px", margin: "auto 0px"}}>
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
                <div style={{marginTop: "3rem"}}>
                  <a className="link-colorless" href="#">
                    สร้างบัญชีผู้ใช้งานใหม่
                  </a>
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