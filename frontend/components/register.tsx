import { useState, FormEvent } from "react";
import Popup from "reactjs-popup"
import registerApi from "../functions/api/registerApi";
import FormInput from "./formInput"
import ShowError from "./showError";

export default function Register() {
  const [formRegister, setFormRegister] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errorRegister, setErrorRegister] = useState({
    isError: false,
    message: "",
  });

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
    } else {
      setErrorRegister({
        isError: true,
        message: data.error.message
      })
    }
  }

  return (
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
                <div className="form p-t-30">
                  <form onSubmit={registerRequest}>
                    {errorRegister.isError && (<ShowError message={errorRegister.message} />)}
                    <div className="form-group">
                      <label className="label" form="member-email">
                        อีเมล
                      </label>
                      <FormInput id={"email"}
                        type={"email"}
                        required={true}
                        placeholder={""}
                        onChange={(e) => { formRegister.email = e.currentTarget.value }} />
                    </div>
                    <div className="form-group">
                      <label className="label" form="member-email">
                        รหัสผ่าน
                      </label>
                      <FormInput id={"password"}
                        type={"password"}
                        required={true}
                        placeholder={""}
                        onChange={(e) => { formRegister.password = e.currentTarget.value }} />
                    </div>
                    <div className="form-group">
                      <label className="label" form="member-email">
                        ยืนยันรหัสผ่าน
                      </label>
                      <FormInput id={"confirm-password"}
                        type={"password"}
                        required={true}
                        placeholder={""}
                        onChange={(e) => { formRegister.confirmPassword = e.currentTarget.value }} />
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
  )
}