import Img from "../image";
import { CourseDetailSale } from "../static/interface"

export default function Sale({ yearlySubscriptionImage,
  yearlySubscriptionImageMobile,
  singleCoursePersonalImage,
  singleCheckoutUrl }: CourseDetailSale) {
  return (
    <div className="background-light">
      <div className="sizer p-b-0">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="block-type-text text-left col-12">
              <div className="block box-shadow-none">
                <h2 className="text-center">
                  <span className="color-primary">ปีใหม่นี้ยกระดับให้คุณเป็นคนใหม่ เรียนรู้กับ &lsquo;ผู้นำตัวจริง&rsquo; จากทุกวงการ
                    <br />
                    แพ็กเกจรายปี ที่คุณจ่ายครั้งเดียว เข้าชมผู้สอนได้ทุกท่าน
                  </span>
                </h2>
              </div>
            </div>
            <div className="block-type-code text-left col-7">
              <div className="block box-shadow-none sm-none">
                <div id="yearlybanner" className="feature column-center text-center">
                  <a href="https://checkout.cariber.co?add-to-cart=685&cfp=eWVhcmx5YmFubm5lcl9kZXNrdG9wX0M6L1VzZXJzL2luemVlL09uZURyaXZlJTIwLSUyMFVuaXZlcnNpdHklMjBvZiUyMFBoYXlhby9DYXJpYmVyJTIwZG91Y3VtZW50L3NhdmUlMjBwYWdlLyVFMCVCOCU4NCVFMCVCOCVBRCVFMCVCOCVBMyVFMCVCOSU4QyVFMCVCOCVBQSVFMCVCOCVBRCVFMCVCOCVBRCVFMCVCOCU5OSVFMCVCOSU4NCVFMCVCOCVBNSVFMCVCOCU5OSVFMCVCOSU4QyVFMCVCOCU4MSVFMCVCOCVCMSVFMCVCOCU5QSVFMCVCOCU4QiVFMCVCOCVCNCVFMCVCOSU4MiVFMCVCOCU4MSVFMCVCOSU4OSUyMCVFMCVCOSU4MCVFMCVCOCU4MSVFMCVCOCVCNSVFMCVCOCVBMiVFMCVCOCVBMyVFMCVCOCU5NSVFMCVCOCVCNCVFMCVCOCVBOCVFMCVCOCVCMSVFMCVCOCU4MSVFMCVCOCU5NCVFMCVCOCVCNCVFMCVCOSU4QyUyMCVFMCVCOSU4MCVFMCVCOCVBQSVFMCVCOCU5OSVFMCVCOCVCMiVFMCVCOSU4MCVFMCVCOCVBMSVFMCVCOCVCNyVFMCVCOCVBRCVFMCVCOCU4NyUyMEtpYXRpc3VrJTIwU2VuYW11YW5nLmh0bWw=">
                    <Img id="block-yearly-img"
                      className="feature-image"
                      src={yearlySubscriptionImage}
                      width={623.183}
                      height={400}
                      alt="Cariber Yearly Subscription"
                    />
                  </a>
                  <a className="btn btn-medium btn-solid btn-auto background-dark"
                    href="https://checkout.cariber.co?add-to-cart=685&amp;cfp=eWVhcmx5YmFubm5lcl9kZXNrdG9wX0M6L1VzZXJzL2luemVlL09uZURyaXZlJTIwLSUyMFVuaXZlcnNpdHklMjBvZiUyMFBoYXlhby9DYXJpYmVyJTIwZG91Y3VtZW50L3NhdmUlMjBwYWdlLyVFMCVCOCU4NCVFMCVCOCVBRCVFMCVCOCVBMyVFMCVCOSU4QyVFMCVCOCVBQSVFMCVCOCVBRCVFMCVCOCVBRCVFMCVCOCU5OSVFMCVCOSU4NCVFMCVCOCVBNSVFMCVCOCU5OSVFMCVCOSU4QyVFMCVCOCU4MSVFMCVCOCVCMSVFMCVCOCU5QSVFMCVCOCU4QiVFMCVCOCVCNCVFMCVCOSU4MiVFMCVCOCU4MSVFMCVCOSU4OSUyMCVFMCVCOSU4MCVFMCVCOCU4MSVFMCVCOCVCNSVFMCVCOCVBMiVFMCVCOCVBMyVFMCVCOCU5NSVFMCVCOCVCNCVFMCVCOCVBOCVFMCVCOCVCMSVFMCVCOCU4MSVFMCVCOCU5NCVFMCVCOCVCNCVFMCVCOSU4QyUyMCVFMCVCOSU4MCVFMCVCOCVBQSVFMCVCOCU5OSVFMCVCOCVCMiVFMCVCOSU4MCVFMCVCOCVBMSVFMCVCOCVCNyVFMCVCOCVBRCVFMCVCOCU4NyUyMEtpYXRpc3VrJTIwU2VuYW11YW5nLmh0bWw="
                    id="block-yearly-button">
                    ซื้อแพ็กเกจรายปี
                  </a>
                </div>
              </div>
              <div className="block box-shadow-none lg-none">
                <div id="yearlybanner" className="feature column-center">
                  <a href="https://checkout.cariber.co?add-to-cart=685&cfp=eWVhcmx5YmFubm5lcl9kZXNrdG9wX0M6L1VzZXJzL2luemVlL09uZURyaXZlJTIwLSUyMFVuaXZlcnNpdHklMjBvZiUyMFBoYXlhby9DYXJpYmVyJTIwZG91Y3VtZW50L3NhdmUlMjBwYWdlLyVFMCVCOCU4NCVFMCVCOCVBRCVFMCVCOCVBMyVFMCVCOSU4QyVFMCVCOCVBQSVFMCVCOCVBRCVFMCVCOCVBRCVFMCVCOCU5OSVFMCVCOSU4NCVFMCVCOCVBNSVFMCVCOCU5OSVFMCVCOSU4QyVFMCVCOCU4MSVFMCVCOCVCMSVFMCVCOCU5QSVFMCVCOCU4QiVFMCVCOCVCNCVFMCVCOSU4MiVFMCVCOCU4MSVFMCVCOSU4OSUyMCVFMCVCOSU4MCVFMCVCOCU4MSVFMCVCOCVCNSVFMCVCOCVBMiVFMCVCOCVBMyVFMCVCOCU5NSVFMCVCOCVCNCVFMCVCOCVBOCVFMCVCOCVCMSVFMCVCOCU4MSVFMCVCOCU5NCVFMCVCOCVCNCVFMCVCOSU4QyUyMCVFMCVCOSU4MCVFMCVCOCVBQSVFMCVCOCU5OSVFMCVCOCVCMiVFMCVCOSU4MCVFMCVCOCVBMSVFMCVCOCVCNyVFMCVCOCVBRCVFMCVCOCU4NyUyMEtpYXRpc3VrJTIwU2VuYW11YW5nLmh0bWw=">
                    <Img id="block-yearly-img"
                      className="feature-image"
                      src={yearlySubscriptionImageMobile}
                      width={623.183}
                      height={400}
                      alt="Cariber Yearly Subscription"
                    />
                  </a>
                  <a className="btn btn-medium btn-solid btn-auto background-dark"
                    href="https://checkout.cariber.co?add-to-cart=685&amp;cfp=eWVhcmx5YmFubm5lcl9kZXNrdG9wX0M6L1VzZXJzL2luemVlL09uZURyaXZlJTIwLSUyMFVuaXZlcnNpdHklMjBvZiUyMFBoYXlhby9DYXJpYmVyJTIwZG91Y3VtZW50L3NhdmUlMjBwYWdlLyVFMCVCOCU4NCVFMCVCOCVBRCVFMCVCOCVBMyVFMCVCOSU4QyVFMCVCOCVBQSVFMCVCOCVBRCVFMCVCOCVBRCVFMCVCOCU5OSVFMCVCOSU4NCVFMCVCOCVBNSVFMCVCOCU5OSVFMCVCOSU4QyVFMCVCOCU4MSVFMCVCOCVCMSVFMCVCOCU5QSVFMCVCOCU4QiVFMCVCOCVCNCVFMCVCOSU4MiVFMCVCOCU4MSVFMCVCOSU4OSUyMCVFMCVCOSU4MCVFMCVCOCU4MSVFMCVCOCVCNSVFMCVCOCVBMiVFMCVCOCVBMyVFMCVCOCU5NSVFMCVCOCVCNCVFMCVCOCVBOCVFMCVCOCVCMSVFMCVCOCU4MSVFMCVCOCU5NCVFMCVCOCVCNCVFMCVCOSU4QyUyMCVFMCVCOSU4MCVFMCVCOCVBQSVFMCVCOCU5OSVFMCVCOCVCMiVFMCVCOSU4MCVFMCVCOCVBMSVFMCVCOCVCNyVFMCVCOCVBRCVFMCVCOCU4NyUyMEtpYXRpc3VrJTIwU2VuYW11YW5nLmh0bWw="
                    id="block-yearly-button">
                    ซื้อแพ็กเกจรายปี
                  </a>
                </div>
              </div>
            </div>
            <div className="block-type-code text-left col-4">
              <div className="block box-shadow-none">
                <div id="singlebanner" className="feature column-center">
                  <a href={singleCheckoutUrl}>
                    <Img id="block-single-img"
                      src={singleCoursePersonalImage}
                      className="feature-image"
                      width={400}
                      height={400}
                      alt="Cariber Single Subscription"
                    />
                  </a>
                  <a id="block-single-button"
                    className="btn btn-medium btn-solid btn-auto background-dark"
                    href={singleCheckoutUrl}>
                    ซื้อเฉพาะคอร์สนี้
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}