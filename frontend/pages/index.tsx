import type { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import Accordion, { Color } from '../components/accordion'
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
            <div className="block-type-image text-center col-12">
              <div className="block box-shadow-none">
                <div className="image">
                  <Img className="image-image"
                    src="/index/block-title.png"
                    alt="ผู้นำตัวจริง"
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
                  <h2 className="text-center">
                    <strong>
                      <span className="color-primary">
                        ปีใหม่นี้ยกระดับให้คุณเป็นคนใหม่ เรียนรู้กับ &lsquo;ผู้นำตัวจริง&rsquo; จากทุกวงการ<br />
                        แพ็กเกจรายปี ที่คุณจ่ายครั้งเดียว เข้าชมผู้สอนได้ทุกท่าน<br />
                      </span>
                    </strong>
                  </h2>
                </div>
              </div>
              <div className="block-type-feature text-center col-5">
                <div className="block box-shadow-none">
                  <div className="feature column-center">
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
                <SlideCourse slideCourses={slideCourses} slideView={2} imageWidth={232.85} imageHeight={425.05} />
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
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="block-type-text text-center col-3">
                <div className="block box-shadow-none column-center">
                  <p className="f-s-30">
                    <strong>
                      <span className="color-primary">
                        สูตรความสำเร็จกับ
                        <br />
                        &quot;ที่สุด&quot; ของประเทศ
                      </span>
                    </strong>
                  </p>
                  <p className="f-s-20">
                    <em>
                      <strong>
                        <span className="color-primary">
                          คอร์สออนไลน์กับผู้บริหาร ผู้นำทางความคิด แบบที่ไม่เคยมีมาก่อน
                        </span>
                      </strong>
                    </em>
                  </p>
                  <Img className="feature-image"
                    src="/index/yearly-subscription-1.jpg"
                    width={329.6}
                    height={211.55}
                    alt="Yearly Subscription"
                  />
                  <a className="btn btn-solid btn-medium btn-auto" href="https://checkout.cariber.co/?add-to-cart=685&cfp=eWVhcmx5YmFubm5lcl9kZXNrdG9wXw==">
                    ซื้อแพ็กเกจรายปี
                  </a>
                </div>
              </div>
              <div className="block-type-video col-7">
                <div className="block box-shadow-none">
                  <div className="video">
                    <video className="b-r-4" width="100%" controls loop={true} muted={true} autoPlay={true}>
                      <source src="/index/cariber-video.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sizer">
          <div className="container">
            <CoursesUpdate coursesSoon={coursesSoon} coursesLatest={coursesLatest} />
          </div>
        </div>
      </div>
      <div className="background-dark">
        <ReviewStudents />
        <div className="sizer p-t-20">
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
                <h2 className="text-center">
                  <span className="color-primary">
                    คำถามที่พบบ่อย
                  </span>
                </h2>
              </div>
            </div>
            {frequentlyAskedQuestions.map((value, index) => {
              return (
                <Accordion key={index} title={value.title} description={value.description} col={8} color={Color.light} />
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