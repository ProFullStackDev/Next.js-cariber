import { FormEvent, useState } from "react";
import forgotPasswordApi from "../api/forgotPasswordApi";
import Footer from "../components/footer";
import FormInput from "../components/formInput";
import Header from "../components/header";
import ShowError from "../components/showError";

export default function ForgotPassword() {
  const [formForgotPassword, setForgotPassword] = useState({
    email: "",
  });
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  async function forgotPasswordRequest(event: FormEvent) {
    setError({
      isError: false,
      message: "",
    })
    event.preventDefault();
    const formData = new FormData();
    formData.append("email", formForgotPassword.email);
    await forgotPasswordApi(formData)
    setError({
      isError: true,
      message: "If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.",
    })
  }

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
                <form onSubmit={forgotPasswordRequest}>
                  {error.isError && (<ShowError message={error.message} />)}
                  <div className="form-group">
                    <label className="auth-label" form="member-email">
                      อีเมล
                    </label>
                    <FormInput id={"email"}
                      type={"email"}
                      required={true}
                      placeholder={""}
                      onChange={(e) => { formForgotPassword.email = e.currentTarget.value }} />
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