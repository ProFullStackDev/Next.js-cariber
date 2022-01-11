import type { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import Accordion from '../components/index/accordion'
import Img from '../components/image'
import SlideCourse from '../components/slideCourse'
import * as staticDataReview from "../components/static/review"
import * as staticData from "../components/static/index"
import FooterBrand from '../components/footerBrand'
import ShopeeReviews from '../components/index/shopeeReviews'
import Specific from '../components/index/specific'
import Mystudent from '../components/index/myStudent'
import CoursesUpdate from '../components/index/coursesUpdate'
import ReviewStudents from '../components/reviewStudents'

const Index: NextPage = () => {
  const reviews = staticDataReview.reviewsCariberFirst
  const shopeeReviews = staticData.shopeeReviews
  const myStudents = staticData.myStudents
  const frequentlyAskedQuestions = staticData.frequentlyAskedQuestions
  const slideCourses = staticDataReview.slideCourses
  const coursesSoon = staticData.coursesSoon
  const coursesLatest = staticData.coursesLatest

  return (
    <div className="index">
      <Header />
      <div className="background-dark">
        <div className="sizer">
          <div className="row align-items-center justify-content-center">
            <div className="block-type-form text-center col-3">
              <div className="block box-shadow-none">
                <div className="form">
                  <h2 style={{ fontSize: "28px" }}>
                    ลงทะเบียนทดลองเรียน 7 วัน ฟรี!
                  </h2>
                  <p>
                    ทดลองเรียนได้ทันทีทุกคอร์ส คอร์สละ 1 บทเรียน
                  </p>
                  <form action="">
                    <div className="text-field form-group">
                      <input id="form_submission_name"
                        className="form-control"
                        type="text"
                        required={true}
                        placeholder="ชื่อ - นามสกุล" />
                    </div>
                    <div className="email-field form-group">
                      <input id="form_submission_email"
                        className="form-control"
                        type="email"
                        required={true}
                        placeholder="อีเมลของคุณ" />
                    </div>
                    <div className="phone-field form-group">
                      <input id="form_submission_phone"
                        className="form-control"
                        type="tel"
                        required={true}
                        placeholder="เบอร์โทรศัพท์" />
                    </div>
                    <button id="form-button" className="btn btn-solid btn-full btn-small" type="submit">
                      ลงทะเบียน
                    </button>
                  </form>
                  <p className="disclaimer-text">
                    คอร์สทดลองเรียนจะหมดอายุภายใน 7 วัน นับจากวันที่ลงทะเบียนและได้รับคอร์ส
                  </p>
                </div>
              </div>
            </div>
            <div className="block-type-image text-center col-7">
              <div className="block box-shadow-none">
                <div className="image">
                  <Img className="image-image"
                    src="/index/block-title.png"
                    alt=""
                    width={855.733}
                    height={434.817}
                  />
                </div>
              </div>
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
                    <strong>
                      <span style={{ color: "#e74e25" }}>
                        ปีใหม่นี้ยกระดับให้คุณเป็นคนใหม่ เรียนรู้กับ &lsquo;ผู้นำตัวจริง&rsquo; จากทุกวงการ<br />
                        แพ็กเกจรายปี ที่คุณจ่ายครั้งเดียว เข้าชมผู้สอนได้ทุกท่าน<br />
                      </span>
                    </strong>
                  </h2>
                </div>
              </div>
              <div className="block-type-feature text-center col-5">
                <div className="block box-shadow-none">
                  <div className="feature" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Img className="feature-image"
                      src="/index/yearly-subscription.jpg"
                      width={400}
                      height={400}
                      alt="Yearly Subscription"
                    />
                    <a className="btn btn-solid btn-medium btn-auto" href="https://checkout.cariber.co/?add-to-cart=685&cfp=YmFubmVyK3NsaWRlc2hvd19ob21l">
                      สมัครเลย
                    </a>
                  </div>
                </div>
              </div>
              <div className="block-type-code text-left col-6">
                <SlideCourse slideCourses={slideCourses} slideView={2} imageWidth={220} imageHeight={400} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background-dark">
        <div className="sizer">
          <div className="container">
            <Specific />
          </div>
        </div>
      </div>
      <div className="background-light">
        <div className="sizer">
          <div className="row align-items-center justify-content-center">
            <div className="block-type-text text-center col-3">
              <div className="block box-shadow-none" style={{ flexDirection: "column", alignItems: "center" }}>
                <p style={{ fontSize: "30px" }}>
                  <strong>
                    <span style={{ color: "#e74e25" }}>
                      สูตรความสำเร็จกับ
                      <br />
                      &quot;ที่สุด&quot; ของประเทศ
                    </span>
                  </strong>
                </p>
                <p style={{ fontSize: "20px" }}>
                  <em>
                    <strong>
                      <span style={{ color: "#e74e25" }}>
                        คอร์สออนไลน์กับผู้บริหาร ผู้นำทางความคิด แบบที่ไม่เคยมีมาก่อน
                      </span>
                    </strong>
                  </em>
                </p>
                <Img className="feature-image"
                  src="/index/yearly-subscription-1.jpg"
                  width={329.6}
                  height={211.55}
                />
                <a className="btn btn-solid btn-medium btn-auto" href="https://checkout.cariber.co/?add-to-cart=685&cfp=eWVhcmx5YmFubm5lcl9kZXNrdG9wXw==">
                  ซื้อแพ็กเกจรายปี
                </a>
              </div>
            </div>
            <div className="block-type-video col-7">
              <div className="block box-shadow-none">
                <div className="video">
                  <video width="100%" controls loop={true} muted={true} autoPlay={true} style={{ borderRadius: "4px" }}>
                    <source src="/index/cariber-video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sizer">
          <CoursesUpdate coursesSoon={coursesSoon} coursesLatest={coursesLatest} />
        </div>
      </div>
      <div className="background-dark">
        <ReviewStudents />
        <div className="sizer" style={{ paddingTop: "20px" }}>
          <div className="container">
            <ShopeeReviews shopeeReviews={shopeeReviews} />
          </div>
        </div>
      </div>
      <div className="sizer background-light">
        <div className="container">
          <Mystudent myStudents={myStudents} />
        </div>
      </div>
      <div className="sizer background-light">
        <div className="container">
          <div className="row align-items-start justify-content-center">
            <div className="block-type-text text-left col-8">
              <div className="block box-shadow-none">
                <h2 style={{ textAlign: "center" }}>
                  <span style={{ color: "#e74e25" }}>
                    คำถามที่พบบ่อย
                  </span>
                </h2>
              </div>
            </div>
            {frequentlyAskedQuestions.map((value, index) => {
              return (
                <Accordion key={index} title={value.title} description={value.description} />
              )
            })}
          </div>
        </div>
      </div>
      <FooterBrand />
      <Footer />
    </div >
  )
}

export default Index