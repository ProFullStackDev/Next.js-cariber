import Popup from "reactjs-popup"
import Img from "../image"

export default function ProductSale() {
  return (
    <Popup className="popup-product-sale"
      trigger={
        <button className="btn btn-not-focus btn-small m-t-0">
          ซื้อคอร์สนี้
        </button>
      }
      modal
      closeOnDocumentClick={false}>
      {(close: any) => {
        return (
          <div className="pop-modal">
            <button className="close" onClick={close}>
              <p>
                &times;
              </p>
            </button>
            <div className="block-type-form text-center">
              <div className="block box-shadow-none">
                <h3>
                  สนใจคอร์สเรียนของเราแล้วใช่ไหม?
                </h3>
                <h6>
                  กรุณาเลือกแพ็คเกจที่คุณต้องการ
                </h6>
                <div id="singlebanner" className="feature column-center text-center m-b-40">
                  <a href="https://checkout.cariber.co?add-to-cart=685&cfp=eWVhcmx5YmFubm5lcl9kZXNrdG9wX0M6L1VzZXJzL2luemVlL09uZURyaXZlJTIwLSUyMFVuaXZlcnNpdHklMjBvZiUyMFBoYXlhby9DYXJpYmVyJTIwZG91Y3VtZW50L3NhdmUlMjBwYWdlLyVFMCVCOCU4NCVFMCVCOCVBRCVFMCVCOCVBMyVFMCVCOSU4QyVFMCVCOCVBQSVFMCVCOCVBRCVFMCVCOCVBRCVFMCVCOCU5OSVFMCVCOSU4NCVFMCVCOCVBNSVFMCVCOCU5OSVFMCVCOSU4QyVFMCVCOCU4MSVFMCVCOCVCMSVFMCVCOCU5QSVFMCVCOCU4QiVFMCVCOCVCNCVFMCVCOSU4MiVFMCVCOCU4MSVFMCVCOSU4OSUyMCVFMCVCOSU4MCVFMCVCOCU4MSVFMCVCOCVCNSVFMCVCOCVBMiVFMCVCOCVBMyVFMCVCOCU5NSVFMCVCOCVCNCVFMCVCOCVBOCVFMCVCOCVCMSVFMCVCOCU4MSVFMCVCOCU5NCVFMCVCOCVCNCVFMCVCOSU4QyUyMCVFMCVCOSU4MCVFMCVCOCVBQSVFMCVCOCU5OSVFMCVCOCVCMiVFMCVCOSU4MCVFMCVCOCVBMSVFMCVCOCVCNyVFMCVCOCVBRCVFMCVCOCU4NyUyMEtpYXRpc3VrJTIwU2VuYW11YW5nLmh0bWw=">
                    <Img id="block-single-img"
                      className="feature-image"
                      src={"/courseDetail/single-course.jpg"}
                      width={623.183}
                      height={400}
                      alt="Cariber single Subscription"
                    />
                  </a>
                  <a className="btn btn-not-focus btn-small m-t-10"
                    href="https://checkout.cariber.co?add-to-cart=685&amp;cfp=eWVhcmx5YmFubm5lcl9kZXNrdG9wX0M6L1VzZXJzL2luemVlL09uZURyaXZlJTIwLSUyMFVuaXZlcnNpdHklMjBvZiUyMFBoYXlhby9DYXJpYmVyJTIwZG91Y3VtZW50L3NhdmUlMjBwYWdlLyVFMCVCOCU4NCVFMCVCOCVBRCVFMCVCOCVBMyVFMCVCOSU4QyVFMCVCOCVBQSVFMCVCOCVBRCVFMCVCOCVBRCVFMCVCOCU5OSVFMCVCOSU4NCVFMCVCOCVBNSVFMCVCOCU5OSVFMCVCOSU4QyVFMCVCOCU4MSVFMCVCOCVCMSVFMCVCOCU5QSVFMCVCOCU4QiVFMCVCOCVCNCVFMCVCOSU4MiVFMCVCOCU4MSVFMCVCOSU4OSUyMCVFMCVCOSU4MCVFMCVCOCU4MSVFMCVCOCVCNSVFMCVCOCVBMiVFMCVCOCVBMyVFMCVCOCU5NSVFMCVCOCVCNCVFMCVCOCVBOCVFMCVCOCVCMSVFMCVCOCU4MSVFMCVCOCU5NCVFMCVCOCVCNCVFMCVCOSU4QyUyMCVFMCVCOSU4MCVFMCVCOCVBQSVFMCVCOCU5OSVFMCVCOCVCMiVFMCVCOSU4MCVFMCVCOCVBMSVFMCVCOCVCNyVFMCVCOCVBRCVFMCVCOCU4NyUyMEtpYXRpc3VrJTIwU2VuYW11YW5nLmh0bWw="
                    id="block-single-button">
                    ซื้อเฉพาะคอร์สนี้
                  </a>
                </div>
                <div id="yearlybanner" className="feature column-center text-center m-b-20">
                  <a href="https://checkout.cariber.co?add-to-cart=685&cfp=eWVhcmx5YmFubm5lcl9kZXNrdG9wX0M6L1VzZXJzL2luemVlL09uZURyaXZlJTIwLSUyMFVuaXZlcnNpdHklMjBvZiUyMFBoYXlhby9DYXJpYmVyJTIwZG91Y3VtZW50L3NhdmUlMjBwYWdlLyVFMCVCOCU4NCVFMCVCOCVBRCVFMCVCOCVBMyVFMCVCOSU4QyVFMCVCOCVBQSVFMCVCOCVBRCVFMCVCOCVBRCVFMCVCOCU5OSVFMCVCOSU4NCVFMCVCOCVBNSVFMCVCOCU5OSVFMCVCOSU4QyVFMCVCOCU4MSVFMCVCOCVCMSVFMCVCOCU5QSVFMCVCOCU4QiVFMCVCOCVCNCVFMCVCOSU4MiVFMCVCOCU4MSVFMCVCOSU4OSUyMCVFMCVCOSU4MCVFMCVCOCU4MSVFMCVCOCVCNSVFMCVCOCVBMiVFMCVCOCVBMyVFMCVCOCU5NSVFMCVCOCVCNCVFMCVCOCVBOCVFMCVCOCVCMSVFMCVCOCU4MSVFMCVCOCU5NCVFMCVCOCVCNCVFMCVCOSU4QyUyMCVFMCVCOSU4MCVFMCVCOCVBQSVFMCVCOCU5OSVFMCVCOCVCMiVFMCVCOSU4MCVFMCVCOCVBMSVFMCVCOCVCNyVFMCVCOCVBRCVFMCVCOCU4NyUyMEtpYXRpc3VrJTIwU2VuYW11YW5nLmh0bWw=">
                    <Img id="block-yearly-img"
                      className="feature-image"
                      src={"/courseDetail/yearly-sucscription-lg.png"}
                      width={623.183}
                      height={400}
                      alt="Cariber Yearly Subscription"
                    />
                  </a>
                  <a className="btn btn-small m-t-10"
                    href="https://checkout.cariber.co?add-to-cart=685&amp;cfp=eWVhcmx5YmFubm5lcl9kZXNrdG9wX0M6L1VzZXJzL2luemVlL09uZURyaXZlJTIwLSUyMFVuaXZlcnNpdHklMjBvZiUyMFBoYXlhby9DYXJpYmVyJTIwZG91Y3VtZW50L3NhdmUlMjBwYWdlLyVFMCVCOCU4NCVFMCVCOCVBRCVFMCVCOCVBMyVFMCVCOSU4QyVFMCVCOCVBQSVFMCVCOCVBRCVFMCVCOCVBRCVFMCVCOCU5OSVFMCVCOSU4NCVFMCVCOCVBNSVFMCVCOCU5OSVFMCVCOSU4QyVFMCVCOCU4MSVFMCVCOCVCMSVFMCVCOCU5QSVFMCVCOCU4QiVFMCVCOCVCNCVFMCVCOSU4MiVFMCVCOCU4MSVFMCVCOSU4OSUyMCVFMCVCOSU4MCVFMCVCOCU4MSVFMCVCOCVCNSVFMCVCOCVBMiVFMCVCOCVBMyVFMCVCOCU5NSVFMCVCOCVCNCVFMCVCOCVBOCVFMCVCOCVCMSVFMCVCOCU4MSVFMCVCOCU5NCVFMCVCOCVCNCVFMCVCOSU4QyUyMCVFMCVCOSU4MCVFMCVCOCVBQSVFMCVCOCU5OSVFMCVCOCVCMiVFMCVCOSU4MCVFMCVCOCVBMSVFMCVCOCVCNyVFMCVCOCVBRCVFMCVCOCU4NyUyMEtpYXRpc3VrJTIwU2VuYW11YW5nLmh0bWw="
                    id="block-yearly-button">
                    ซื้อแพ็กเกจรายปี
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      }}
    </Popup>
  )
}