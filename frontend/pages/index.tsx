import type { NextPage } from 'next'
import Header from '../components/header'
import Footer from '../components/footer'
import Accordion from '../components/index/accordion'
import Link from 'next/link'
import Img from '../components/image'
import SlideCourse from '../components/slideCourse'
import * as staticDataReview from "../static/review"
import * as staticData from "../static/index"
import FooterBrand from '../components/footerBrand'

export interface Feature {
  image: string,
  name: string,
  career: string,
  review: string,
}

export interface ShopeeReview {
  rating: string,
  review: string,
  name: string,
  date: string,
}

export interface MyStudent {
  image: string,
  alt: string,
  width: number,
  height: number,
}

export interface CoursesSoon {
  image: string,
  alt: string,
}

export interface FrequentlyAskedQuestion {
  title: string,
  description: string[],
}

export interface CoursesLatest {
  image: string,
  alt: string,
  link: string
}

const Index: NextPage = () => {
  const features = staticData.features
  const shopeeReviews = staticData.shopeeReviews
  const myStudents = staticData.myStudents
  const frequentlyAskedQuestions = staticData.frequentlyAskedQuestions
  const slideCourse = staticDataReview.slideCourse
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
                  <h3 style={{ fontSize: "34px", textAlign: "center" }}>
                    <strong>
                      <span style={{ color: "#e74e25" }}>
                        ปีใหม่นี้ยกระดับให้คุณเป็นคนใหม่ เรียนรู้กับ &lsquo;ผู้นำตัวจริง&rsquo; จากทุกวงการ<br />
                        แพ็กเกจรายปี ที่คุณจ่ายครั้งเดียว เข้าชมผู้สอนได้ทุกท่าน<br />
                      </span>
                    </strong>
                  </h3>
                </div>
              </div>
              <div className="block-type-feature text-center col-5">
                <div className="block box-shadow-none">
                  <div className="feature" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div>
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
              </div>
              <div className="block-type-code text-left col-6">
                <SlideCourse slideCourse={slideCourse} slideView={2} imageWidth={247.5} imageHeight={400}></SlideCourse>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background-dark">
        <div className="sizer">
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <div className="block-type-image col-1">
                <div className="block box-shadow-none">
                  <div className="image">
                    <Img className="image-image"
                      src="/index/book.webp"
                      alt="กว่า 168 บทเรียน จากผู้เชี่ยวชาญ"
                      width={70.0333}
                      height={70.0333}
                    />
                  </div>
                </div>
              </div>
              <div className="block-type-text text-left col-2">
                <div className="block box-shadow-none">
                  <h5>
                    <span style={{ fontWeight: "400" }}>
                      กว่า 168 บทเรียน
                    </span>
                  </h5>
                  <h5>
                    <span style={{ fontWeight: "400" }}>
                      จากผู้เชี่ยวชาญ
                    </span>
                  </h5>
                </div>
              </div>
              <div className="block-type-image col-1">
                <div className="block box-shadow-none">
                  <div className="image">
                    <Img className="image-image"
                      src="/index/hourglass.webp"
                      alt="เต็มอิ่มกับคอร์สเรียน กว่า 31 ชั่วโมง"
                      width={70.0333}
                      height={70.0333}
                    />
                  </div>
                </div>
              </div>
              <div className="block-type-text text-left col-2">
                <div className="block box-shadow-none">
                  <h5>
                    <span style={{ fontWeight: "400" }}>
                      เต็มอิ่มกับคอร์สเรียน
                    </span>
                  </h5>
                  <h5>
                    <span style={{ fontWeight: "400" }}>
                      กว่า 31 ชั่วโมง
                    </span>
                  </h5>
                </div>
              </div>
              <div className="block-type-image col-1">
                <div className="block box-shadow-none">
                  <div className="image">
                    <Img className="image-image"
                      src="/index/person.webp"
                      alt="เต็มอิ่มกับคอร์สเรียน กว่า 31 ชั่วโมง"
                      width={70.0333}
                      height={70.0333}
                    />
                  </div>
                </div>
              </div>
              <div className="block-type-text text-left col-2">
                <div className="block box-shadow-none">
                  <h5>
                    <span style={{ fontWeight: "400" }}>
                      อัพเดทคอร์สใหม่
                    </span>
                  </h5>
                  <h5>
                    <span style={{ fontWeight: "400" }}>
                      ตลอดทั้งปี
                    </span>
                  </h5>
                </div>
              </div>
            </div>
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
          <div className="row align-items-center justify-content-center">
            <div className="block-type-text text-center col-12">
              <div className="block box-shadow-none">
                <h2>
                  <span style={{ fontSize: "45px", color: "#e74e25" }}>
                    คอร์สเปิดตัวล่าสุด
                  </span>
                </h2>
              </div>
            </div>
            {coursesLatest.map((value, index) => {
              return (
                <div key={index} className="block-type-feature text-center col-6">
                  <div className="block box-shadow-none">
                    <div className="feature">
                      <Img className="feature-image"
                        src={value.image}
                        alt={value.alt}
                        width={600}
                        height={337.5}
                      />
                      <Link href={value.link}>
                        <a className="btn btn-solid btn-small btn-auto" >ดูรายละเอียดคอร์ส</a>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })
            }
            <div className="block-type-text text-center col-12">
              <div className="block box-shadow-none">
                <h2>
                  <span style={{ fontSize: "45px", color: "#e74e25" }}>
                    คอร์สที่กำลังจะเปิดตัว
                  </span>
                </h2>
              </div>
            </div>
            {
              coursesSoon.map((value, index) => {
                return (
                  <div key={index} className="block-type-image col-3">
                    <div className="block box-shadow-none">
                      <div className="image">
                        <Img className="image-image"
                          src={value.image}
                          alt={value.alt}
                          width={349.6}
                          height={196.733}
                        />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="background-dark">
        <div className="sizer" style={{ paddingTop: "20px" }}>
          <div className="container">
            <div className="row align-items-start justify-content-between">
              <div className="block-type-text text-left col-12">
                <div className="block box-shadow-none">
                  <p style={{ fontSize: "36px", textAlign: "center" }}>
                    <strong>
                      <span style={{ color: "#e74e25" }}>
                        รีวิวจากผู้เรียน
                      </span>
                    </strong>
                  </p>
                </div>
              </div>
              {features.map((value, index) => {
                return (
                  <div key={index} className="block-type-feature text-center col-2">
                    <div className="block box-shadow-none">
                      <div className="feature">
                        <Img className="feature-image"
                          src={value.image}
                          alt=''
                          width={175}
                          height={185.917}
                        />
                        <div className="feature-text">
                          <p style={{ textAlign: "center" }}>
                            <span style={{ color: "#fbf5e4" }}>
                              &quot;{value.review}&quot;
                            </span>
                          </p>
                          <h4>
                            <span style={{ color: "#ed9081" }}>
                              {value.name}
                            </span>
                          </h4>
                          <span style={{ color: "#e74e25" }}>
                            <em>
                              {value.career}
                            </em>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="sizer" style={{ paddingTop: "20px" }}>
          <div className="container">
            <div className="row align-items-start justify-content-between">
              <div className="block-type-feature text-center col-3">
                <div className="block box-shadow-none">
                  <div className="feature">
                    <Img className="feature-image"
                      src="/index/shopee.png"
                      alt="Shopee Review"
                      width={200}
                      height={65.9}
                    />
                    <div className="feature-text">
                      <h5 style={{ textAlign: "center" }}>
                        <span style={{ color: "#fbf5e4" }}>
                          4.9 stars rating
                        </span>
                      </h5>
                      <h5 style={{ textAlign: "center", marginBottom: "30px" }}>
                        <strong>
                          <span style={{ color: "#0e1b20" }}>
                            ⭐️⭐️⭐️⭐️⭐️
                          </span>
                        </strong>
                      </h5>
                      <h5>
                        <span style={{ color: "#e74e25" }}>
                          จากทั้งหมด 207 รีวิวใน Shopee
                        </span>
                      </h5>
                    </div>
                    <Link href="/review">
                      <a className="btn btn-solid btn-small btn-auto" style={{ margin: "0px" }}>
                        คลิกเพื่อดูรีวิวทั้งหมด
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {shopeeReviews.map((value, index) => {
                return (
                  <div key={index} className="block-type-feature text-center col-2">
                    <div className="block box-shadow-none">
                      <div className="feature">
                        <div className="feature-text">
                          <h5 style={{ textAlign: "center" }}>
                            <strong>
                              <span style={{ color: "#0e1b20" }}>
                                {value.rating}
                              </span>
                            </strong>
                          </h5>
                          <p style={{ textAlign: "center" }}>
                            <span style={{ color: "#fbf5e4" }}>
                              &quot;{value.review}&quot;
                            </span>
                          </p>
                          <h6 style={{ textAlign: "center", fontSize: "16px" }}>
                            <em>
                              <span style={{ color: "#e74e25" }}>
                                <strong>
                                  {value.name}
                                </strong>
                              </span>
                            </em>
                            <br />
                            <em>
                              <span style={{ color: "#e74e25" }}>
                                <strong>
                                  {value.date}
                                </strong>
                              </span>
                            </em>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="sizer background-light">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="block-type-text text-left col-6">
              <div className="block box-shadow-none" >
                <p style={{ fontSize: "36px", textAlign: "center" }}>
                  <strong>
                    <span style={{ color: "#e74e25" }}>
                      ผู้เรียนของเรา
                    </span>
                  </strong>
                </p>
              </div>
            </div>
            <div className="block-break"></div>
            {myStudents.map((value, index) => {
              return (
                <div key={index} className="block-type-image col-2" style={{ marginRight: "5px" }}>
                  <div className="block box-shadow-none">
                    <div className="image">
                      <Img className="image-image"
                        src={value.image}
                        alt={value.alt}
                        width={value.width}
                        height={value.height}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="sizer background-light">
        <div className="container">
          <div className="row align-items-start justify-content-center">
            <div className="block-type-text text-left col-8">
              <div className="block box-shadow-none">
                <p style={{ fontSize: "36px", textAlign: "center" }}>
                  <strong>
                    <span style={{ color: "#e74e25" }}>
                      คำถามที่พบบ่อย
                    </span>
                  </strong>
                </p>
              </div>
            </div>
            {frequentlyAskedQuestions.map((value, index) => {
              return (
                <Accordion key={index} title={value.title} description={value.description}></Accordion>
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
