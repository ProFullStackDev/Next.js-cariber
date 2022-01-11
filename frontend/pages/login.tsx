import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import Img from "../components/image";

export default function Login() {
  return (
    <div className="bg-login login">
      <Header />
      <div className="sizer sizer-full">
        <div className="container">
          <div className="row align-items-center justify-content-center ">
            <div className="col-6 text-center">
              <div className="auth-content">
                <div className="auth-image">
                  <Img
                    src="/login/image-title.jpg"
                    alt=""
                    width={615}
                    height={274.183}
                  />
                </div>
                <form action="">
                  <div className="form-group">
                    <label className="auth-label" form="member-email">
                      อีเมล
                    </label>
                    <input id="member-email" className="form-control auth-field" type="text"></input>
                  </div>
                  <div className="form-group">
                    <label className="auth-label" form="member-password">
                      รหัสผ่าน
                    </label>
                    <input id="member-password" className="form-control auth-field" type="password"></input>
                  </div>
                  <div className="form-group">
                    <label>
                      <input className="boolean optional" type="checkbox" value="1" id="member-remember-me">
                      </input>
                      <span className="auth-label" style={{ display: "inline-block" }}>
                        จดจำรหัสผ่าน
                      </span>
                    </label>
                  </div>
                  <button id="form-button" className="form-btn btn-solid btn-full btn-small" type="submit">
                    เข้าสู่ระบบ
                  </button>
                  <div className="auth-link">
                    <Link href="/password/new">ลืมรหัสผ่าน</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}