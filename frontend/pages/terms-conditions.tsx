import Footer from "../components/footer";
import Header from "../components/header";

export interface Conditions {
  preface: string,
  policy: string,
  condition: string[],
  usability: string,
  termsofServiceUser: string[],
  subscription: string[],
  scopeofResponsibility: string,
  cancellation: string,
  updateLatest: string
}


export default function TermsConditions() {
  return (
    <div>
      <Header />
      <div className="background-light">
        <div className="sizer">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="block box-shadow-none">
                <h1>
                  <span style={{ color: "#303133" }}>
                    <strong>
                      เงื่อนไขการใช้งาน (Terms and Conditions)
                    </strong>
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}