import Img from "../image";
import { CourseHeaderCourseDetail } from "../static/interface"

export default function CourseHeader({ yearlySubscriptionImage,
                                       singleCourseImage,
                                       videoPoster,
                                       video }: CourseHeaderCourseDetail) {
  return (
    <div className="background-dark">
      <div className="sizer" style={{ paddingTop: "0px" }}>
        <div className="row align-items-center justify-content-center">
          <div className="block-type-code text-left col-3 md-none" style={{ padding: "0px" }}>
            <div className="block box-shadow-none">
              <div className="image">
                <a href="https://checkout.cariber.co?add-to-cart=685&cfp=dG9weWVhcmx5YmFubm5lcl9kZXNrdG9wX0M6L1VzZXJzL2luemVlL09uZURyaXZlJTIwLSUyMFVuaXZlcnNpdHklMjBvZiUyMFBoYXlhby9DYXJpYmVyJTIwZG91Y3VtZW50L3NhdmUlMjBwYWdlLyVFMCVCOCU4NCVFMCVCOCVBRCVFMCVCOCVBMyVFMCVCOSU4QyVFMCVCOCVBQSVFMCVCOCVBRCVFMCVCOCVBRCVFMCVCOCU5OSVFMCVCOSU4NCVFMCVCOCVBNSVFMCVCOCU5OSVFMCVCOSU4QyVFMCVCOCU4MSVFMCVCOCVCMSVFMCVCOCU5QSVFMCVCOCU4QiVFMCVCOCVCNCVFMCVCOSU4MiVFMCVCOCU4MSVFMCVCOSU4OSUyMCVFMCVCOSU4MCVFMCVCOCU4MSVFMCVCOCVCNSVFMCVCOCVBMiVFMCVCOCVBMyVFMCVCOCU5NSVFMCVCOCVCNCVFMCVCOCVBOCVFMCVCOCVCMSVFMCVCOCU4MSVFMCVCOCU5NCVFMCVCOCVCNCVFMCVCOSU4QyUyMCVFMCVCOSU4MCVFMCVCOCVBQSVFMCVCOCU5OSVFMCVCOCVCMiVFMCVCOSU4MCVFMCVCOCVBMSVFMCVCOCVCNyVFMCVCOCVBRCVFMCVCOCU4NyUyMEtpYXRpc3VrJTIwU2VuYW11YW5nLmh0bWw=">
                  <Img className="image-image"
                    src={yearlySubscriptionImage}
                    width={384.6}
                    height={246.85}
                  />
                </a>
              </div>
              <div className="image">
                <a href="https://checkout.cariber.co/?add-to-cart=74465&cfp=dG9wc2luZ2xlYmFubm5lcl9kZXNrdG9wX2tpYXRpc3VrLXNlbmFtdWFuZw==">
                  <Img className="image-image"
                    src={singleCourseImage}
                    width={384.6}
                    height={246.85}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="block-type-video col-8">
            <div className="block box-shadow-none">
              <div className="video">
                <video width="100%" controls poster={videoPoster} muted style={{ borderRadius: "4px" }}>
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="block-type-video col-8 lg-none">
            <div className="block box-shadow-none">
              <div className="image" style={{ textAlign: "center" }}>
                <a href="https://shp.ee/ncpeyxv">
                  <Img className="feature-image"
                    src={yearlySubscriptionImage}
                    width={623.333}
                    height={400} />
                </a>
                <a className="btn btn-medium btn-solid btn-auto background-dark" href="https://shp.ee/ncpeyxv" >
                  ซื้อผ่าน Shopee เลย
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}