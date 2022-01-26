import Footer from "../components/footer";
import Header from "../components/header";

export default function ForgotPassword() {
  return (
    <div className="background-image forgot-password">
      <Header />
      <div className="sizer sizer-full">
        <div className="container">
          <div className="row align-items-center justify-content-center h-670">
            <div className="col-6 text-center">
              <div className="auth-content">
              <h1 className="auth-title">
                กู้คืนรหัสผ่าน
                </h1>
                <form action="">
                  <div className="form-group">
                    <label className="auth-label" form="member-email">
                      อีเมล
                    </label>
                    <input id="member-email" className="form-control auth-field" type="text"></input>
                  </div>
                  <button id="form-button" className="form-btn btn-solid btn-full btn-small" type="submit">
                    ยืนยัน
                  </button>
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