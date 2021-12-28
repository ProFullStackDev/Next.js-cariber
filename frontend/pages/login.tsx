import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";

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
                  <Image
                    src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3625250/settings_images/ACVU5ScLT32Ts3CDFaaz_Cover_Facebook-02-01.jpg"
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
                    <a href="/password/new">ลืมรหัสผ่าน</a>
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