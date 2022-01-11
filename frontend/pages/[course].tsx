import { useRouter } from "next/router"
import Accordion from "../components/course/accordion"
import Footer from "../components/footer"
import FooterBrand from "../components/footerBrand"
import Header from "../components/header"
import Img from "../components/image"
import ReviewStudents from "../components/reviewStudents"
import SlideCourse from "../components/slideCourse"
import * as staticDataReview from "../components/static/review"
import * as staticData from "../components/static/course"
import { InterestingTopic, CardDescription } from "../components/static/interface"

export interface CourseData {
  yearlySubscriptionImage: string,
  yearlySubscriptionImageMobile: string,
  singleCourseImage: string,
  video: string,
  videoPoster: string,
  fullName: string,
  personalHistoryImage: string,
  interestingTopics: InterestingTopic[],
  suitableFor: string[],
  totalHours: string,
  totalEpisodes: string,
  episodes: CardDescription[],
  singleCoursePersonalImage: string
}

export default function Course() {
  const slideCourses = staticDataReview.slideCourses
  const courseData: CourseData = {
    yearlySubscriptionImage: "/course/yearly-subscription.jpg",
    yearlySubscriptionImageMobile: "/course/yearly-subscription-mobile.jpg",
    singleCourseImage: "/course/single-courese.jpg",
    video: "/index/cariber-video.mp4",
    videoPoster: "/course/poster.jpg",
    fullName: "เกียรติศักดิ์ เสนาเมือง",
    personalHistoryImage: "/course/information.jpg",
    interestingTopics: staticData.interestingTopics,
    suitableFor: staticData.suitable,
    totalHours: "1:51",
    totalEpisodes: "9",
    episodes: staticData.episodes,
    singleCoursePersonalImage: "/course/singlebanner.jpg"
  }

  return (
    <div>
      <Header />
      <div className="background-dark">
        <div className="sizer">
          <div className="row align-items-center justify-content-center">
            <div className="block-type-code text-left col-3 md-none" style={{ padding: "0px" }}>
              <div className="block box-shadow-none">
                <div className="image">
                  <a href="https://checkout.cariber.co?add-to-cart=685&cfp=dG9weWVhcmx5YmFubm5lcl9kZXNrdG9wX0M6L1VzZXJzL2luemVlL09uZURyaXZlJTIwLSUyMFVuaXZlcnNpdHklMjBvZiUyMFBoYXlhby9DYXJpYmVyJTIwZG91Y3VtZW50L3NhdmUlMjBwYWdlLyVFMCVCOCU4NCVFMCVCOCVBRCVFMCVCOCVBMyVFMCVCOSU4QyVFMCVCOCVBQSVFMCVCOCVBRCVFMCVCOCVBRCVFMCVCOCU5OSVFMCVCOSU4NCVFMCVCOCVBNSVFMCVCOCU5OSVFMCVCOSU4QyVFMCVCOCU4MSVFMCVCOCVCMSVFMCVCOCU5QSVFMCVCOCU4QiVFMCVCOCVCNCVFMCVCOSU4MiVFMCVCOCU4MSVFMCVCOSU4OSUyMCVFMCVCOSU4MCVFMCVCOCU4MSVFMCVCOCVCNSVFMCVCOCVBMiVFMCVCOCVBMyVFMCVCOCU5NSVFMCVCOCVCNCVFMCVCOCVBOCVFMCVCOCVCMSVFMCVCOCU4MSVFMCVCOCU5NCVFMCVCOCVCNCVFMCVCOSU4QyUyMCVFMCVCOSU4MCVFMCVCOCVBQSVFMCVCOCU5OSVFMCVCOCVCMiVFMCVCOSU4MCVFMCVCOCVBMSVFMCVCOCVCNyVFMCVCOCVBRCVFMCVCOCU4NyUyMEtpYXRpc3VrJTIwU2VuYW11YW5nLmh0bWw=">
                    <Img className="image-image"
                      src={courseData.yearlySubscriptionImage}
                      width={384.6}
                      height={246.85}
                    />
                  </a>
                </div>
                <div className="image">
                  <a href="https://checkout.cariber.co/?add-to-cart=74465&cfp=dG9wc2luZ2xlYmFubm5lcl9kZXNrdG9wX2tpYXRpc3VrLXNlbmFtdWFuZw==">
                    <Img className="image-image"
                      src={courseData.singleCourseImage}
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
                  <video width="100%" controls poster={courseData.videoPoster} muted style={{ borderRadius: "4px" }}>
                    <source src={courseData.video} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div className="block-type-video col-8 lg-none">
              <div className="block box-shadow-none">
                <div className="image" style={{ textAlign: "center" }}>
                  <a href="https://shp.ee/ncpeyxv">
                    <Img className="feature-image"
                      src={courseData.yearlySubscriptionImage}
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
        <div className="sizer">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="block-type-text text-left col-11">
                <div className="block box-shadow-none">
                  <h3 style={{ textAlign: "center", margin: "0px" }}>
                    <span style={{ color: "#ed9081" }}>
                      <strong>
                        รู้จักคุณ{courseData.fullName}
                      </strong>
                    </span>
                  </h3>
                </div>
              </div>
              <div className="block-type-image text-center col-11">
                <div className="block box-shadow-none">
                  <div className="image">
                    <Img className="image-image"
                      src={courseData.personalHistoryImage}
                      width={995.6}
                      height={667.75}
                    />
                  </div>
                </div>
              </div>
              <div className="block-type-text text-center col-6">
                <div className="block box-shadow-none">
                  <p style={{ fontSize: "24px", textAlign: "center" }}>
                    <strong>
                      <span style={{ color: "#ed9081" }}>
                        หัวข้อที่น่าสนใจ
                      </span>
                    </strong>
                  </p>
                </div>
              </div>
              <div className="block-break"></div>
              {courseData.interestingTopics.map((value, index) => {
                return (
                  <div key={index} className="block-type-feature text-center col-2">
                    <div className="block box-shadow-none">
                      <div className="feature">
                        <Img className="feature-image"
                          src={value.image}
                          width={50}
                          height={50}
                        />
                        <div className="feature-text">
                          <p style={{ fontSize: "14px", textAlign: "center" }}>
                            <strong>
                              <span style={{ color: "#fbf5e4" }}>
                                {value.name}
                              </span>
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="block-type-text text-left col-6">
                <div className="block box-shadow-none">
                  <p style={{ fontSize: "26px", textAlign: "center" }}>
                    <span style={{ color: "#ed9081" }}>
                      <strong>
                        คอร์สนี้เหมาะสำหรับ
                      </strong>
                    </span>
                  </p>
                </div>
              </div>
              <div className="block-type-text text-left col-10">
                <div className="block box-shadow-none">
                  {courseData.suitableFor.map((value, index) => {
                    return (
                      <p key={index} style={{ textAlign: "left", paddingLeft: "30px", fontWeight: "normal" }}>
                        <strong>
                          <span style={{ color: "#ed9081" }}>
                            ✓ &nbsp;
                          </span>
                          <span style={{ color: "#fbf5e4" }}>
                            {value}
                          </span>
                        </strong>
                      </p>
                    )
                  })}
                </div>
              </div>
              <div className="block-type-text text-left col-10">
                <div className="block box-shadow-none">
                  <h1 style={{ textAlign: "center" }}>
                    <strong>
                      <span style={{ color: "#fbf5e4" }}>
                        ⌛ {courseData.totalHours} ชั่วโมง &nbsp;&nbsp;&nbsp; 📚 {courseData.totalEpisodes} บทเรียน
                      </span>
                    </strong>
                  </h1>
                </div>
              </div>
              {courseData.episodes.map((value, index) => {
                return (
                  <Accordion key={index} title={value.title} description={value.description} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="background-light">
        <div className="sizer">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="block-type-text text-left col-12">
                <div className="block box-shadow-none">
                  <h2 style={{ textAlign: "center" }}>
                    <span style={{ color: "#e74e25" }}>ปีใหม่นี้ยกระดับให้คุณเป็นคนใหม่ เรียนรู้กับ &lsquo;ผู้นำตัวจริง&rsquo; จากทุกวงการ
                      <br />
                      แพ็กเกจรายปี ที่คุณจ่ายครั้งเดียว เข้าชมผู้สอนได้ทุกท่าน
                    </span>
                  </h2>
                </div>
              </div>
              <div className="block-type-code text-left col-7">
                <div className="block box-shadow-none md-none">
                  <div id="yearlybanner" className="feature" style={{ textAlign: "center" }}>
                    <a href="https://checkout.cariber.co?add-to-cart=685&cfp=eWVhcmx5YmFubm5lcl9kZXNrdG9wX0M6L1VzZXJzL2luemVlL09uZURyaXZlJTIwLSUyMFVuaXZlcnNpdHklMjBvZiUyMFBoYXlhby9DYXJpYmVyJTIwZG91Y3VtZW50L3NhdmUlMjBwYWdlLyVFMCVCOCU4NCVFMCVCOCVBRCVFMCVCOCVBMyVFMCVCOSU4QyVFMCVCOCVBQSVFMCVCOCVBRCVFMCVCOCVBRCVFMCVCOCU5OSVFMCVCOSU4NCVFMCVCOCVBNSVFMCVCOCU5OSVFMCVCOSU4QyVFMCVCOCU4MSVFMCVCOCVCMSVFMCVCOCU5QSVFMCVCOCU4QiVFMCVCOCVCNCVFMCVCOSU4MiVFMCVCOCU4MSVFMCVCOSU4OSUyMCVFMCVCOSU4MCVFMCVCOCU4MSVFMCVCOCVCNSVFMCVCOCVBMiVFMCVCOCVBMyVFMCVCOCU5NSVFMCVCOCVCNCVFMCVCOCVBOCVFMCVCOCVCMSVFMCVCOCU4MSVFMCVCOCU5NCVFMCVCOCVCNCVFMCVCOSU4QyUyMCVFMCVCOSU4MCVFMCVCOCVBQSVFMCVCOCU5OSVFMCVCOCVCMiVFMCVCOSU4MCVFMCVCOCVBMSVFMCVCOCVCNyVFMCVCOCVBRCVFMCVCOCU4NyUyMEtpYXRpc3VrJTIwU2VuYW11YW5nLmh0bWw=">
                      <Img id="block-yearly-img"
                        className="feature-image"
                        src={courseData.yearlySubscriptionImage}
                        width={623.183}
                        height={400}
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
                  <div id="yearlybanner" className="feature" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <a href="https://checkout.cariber.co?add-to-cart=685&cfp=eWVhcmx5YmFubm5lcl9kZXNrdG9wX0M6L1VzZXJzL2luemVlL09uZURyaXZlJTIwLSUyMFVuaXZlcnNpdHklMjBvZiUyMFBoYXlhby9DYXJpYmVyJTIwZG91Y3VtZW50L3NhdmUlMjBwYWdlLyVFMCVCOCU4NCVFMCVCOCVBRCVFMCVCOCVBMyVFMCVCOSU4QyVFMCVCOCVBQSVFMCVCOCVBRCVFMCVCOCVBRCVFMCVCOCU5OSVFMCVCOSU4NCVFMCVCOCVBNSVFMCVCOCU5OSVFMCVCOSU4QyVFMCVCOCU4MSVFMCVCOCVCMSVFMCVCOCU5QSVFMCVCOCU4QiVFMCVCOCVCNCVFMCVCOSU4MiVFMCVCOCU4MSVFMCVCOSU4OSUyMCVFMCVCOSU4MCVFMCVCOCU4MSVFMCVCOCVCNSVFMCVCOCVBMiVFMCVCOCVBMyVFMCVCOCU5NSVFMCVCOCVCNCVFMCVCOCVBOCVFMCVCOCVCMSVFMCVCOCU4MSVFMCVCOCU5NCVFMCVCOCVCNCVFMCVCOSU4QyUyMCVFMCVCOSU4MCVFMCVCOCVBQSVFMCVCOCU5OSVFMCVCOCVCMiVFMCVCOSU4MCVFMCVCOCVBMSVFMCVCOCVCNyVFMCVCOCVBRCVFMCVCOCU4NyUyMEtpYXRpc3VrJTIwU2VuYW11YW5nLmh0bWw=">
                      <Img id="block-yearly-img"
                        className="feature-image"
                        src={courseData.yearlySubscriptionImageMobile}
                        width={400}
                        height={400}
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
                  <div id="singlebanner" className="feature" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <a href="https://checkout.cariber.co/?add-to-cart=74465&cfp=c2luZ2xlYmFubm5lcl9kZXNrdG9wX2tpYXRpc3VrLXNlbmFtdWFuZw==">
                      <Img id="block-single-img"
                        src={courseData.singleCoursePersonalImage}
                        className="feature-image"
                        width={400}
                        height={400}
                      />
                    </a>
                    <a id="block-single-button"
                      className="btn btn-medium btn-solid btn-auto background-dark"
                      href="https://checkout.cariber.co/?add-to-cart=74465&amp;cfp=c2luZ2xlYmFubm5lcl9kZXNrdG9wX2tpYXRpc3VrLXNlbmFtdWFuZw==">
                      ซื้อเฉพาะคอร์สนี้
                    </a>
                  </div>
                </div>
              </div>
              <div className="block-type-text text-center col-12" style={{ marginTop: "50px" }}>
                <div className="block box-shadow-none">
                  <h2 className="font-md-20" style={{ textAlign: "center" }}>
                    <span style={{ color: "#e74e25" }}>
                      คอร์สอื่น ๆ จาก &quot;ที่สุด&quot; ของประเทศอีกมากมาย
                    </span>
                  </h2>
                </div>
              </div>
              <div className="block-type-code text-left col-12">
                <SlideCourse slideCourses={slideCourses} slideView={4} imageWidth={235} imageHeight={470.533} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background-dark">
        <ReviewStudents />
      </div>
      <FooterBrand />
      <Footer />
    </div>
  )
}