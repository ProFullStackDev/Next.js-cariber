import Header from "../components/header"
import Footer from "../components/footer"
import {
  PolicySection1,
  PolicySection2,
  PolicySection3,
  PolicySection4,
  PolicySection5,
  PolicySection6,
  PolicySection7,
  PolicySection8,
  PolicySection9,
  PolicySection10,
  PolicySection11,
  PolicySection12,
  PolicySection13,
  PolicySection14,
  PolicySection15,
  PolicySection16
} from "../components/privacyPolicy/policySection"

export default function PrivacyPolicy() {
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
                      นโยบายความเป็นส่วนตัว (Privacy Policy)
                    </strong>
                  </span>
                </h1>
                <br />
                <PolicySection1 />
                <PolicySection2 />
                <PolicySection3 />
                <PolicySection4 />
                <PolicySection5 />
                <PolicySection6 />
                <PolicySection7 />
                <PolicySection8 />
                <PolicySection9 />
                <PolicySection10 />
                <PolicySection11 />
                <PolicySection12 />
                <PolicySection13 />
                <PolicySection14 />
                <PolicySection15 />
                <PolicySection16 />
                <h2>
                  นโยบายการขอคืนเงิน (Refund Policy)
                </h2>
                <p>
                  ทางบริษัท คาริเบอร์ จำกัด (เจ้าของเว็บไซต์ www.cariber.co) มีนโยบายการดูแลลูกค้าที่มีความประสงค์จะขอรับเงินคืน (Refund) โดยมีรายละเอียดดังนี้
                </p>
                <h2>
                  เงื่อนไขในการขอคืนเงินค่าสินค้า
                </h2>
                <ul>
                  <li>
                    เงื่อนไขการยกเลิกและขอคืนเงินค่าสินค้า
                  </li>
                </ul>
                <p>
                  &nbsp;&nbsp;&nbsp;รายการที่สั่งซื้อและชำระเงินเรียบร้อยแล้วไม่สามารถยกเลิกได้ทุกกรณี
                </p>
                <br />
                <br />
                <h2>
                  ปรับปรุงครั้งล่าสุดวันที่ 2 กุมภาพันธ์ พ.ศ. 2564
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}