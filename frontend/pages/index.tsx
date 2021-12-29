import type { NextPage } from 'next'
import { useEffect } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Image from 'next/image'

interface Feature {
  image: string,
  name: string,
  career: string,
  review: string,
}

interface ShopeeReview {
  rating: string,
  review: string,
  name: string,
  date: string,
}

const Index: NextPage = () => {
  const features: Feature[] = [
    {
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3625250/settings_images/gSObK5T7SMiVlxNr30ES_03.webp",
      name: "นิกส์ อรรถพล",
      career: "Country Manager - Tinder",
      review: "การที่ได้เรียนรู้ความสำเร็จจากผู้บริหารที่ประสบความสำเร็จมาแล้วเป็นอะไรที่หาได้ยากมาก ๆ คุ้มค่า แนะนำเลย"
    },
    {
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3625250/settings_images/qMDsMB4iTyCkpq2sXuov_01.webp",
      name: "พีช พิชญา",
      career: "Head of Monetization - Shopee",
      review: "แตกต่างจากคอร์สเรียนที่อื่น เหมาะสำหรับพนักงานประจำที่ต้องการพัฒนาตัวเอง มีคอร์สใหม่ตลอดสำหรับแพ็กเกจรายปี"
    },
    {
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3625250/settings_images/JMEbNcRSTvy55UcFPP1w_08.webp",
      name: "วิล ชนากานต์",
      career: "Business Analyst - McKinsey & Company",
      review: "ได้เรียนรู้จากประสบการณ์จริงของผู้บริหาร การเรียบเรียงและตัดต่อกระชับน่าติดตามเหมือนได้ดูซีรี่ย์ Netflix ดี ๆ เรื่องนึง"
    },
    {
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3625250/settings_images/oiZPcYrQ8mNhDOKci9PQ_10.webp",
      name: "มุก ภัณฑิลา",
      career: "MBA Candidate - Stanford University, Graduate School of Business",
      review: "ได้พัฒนาตัวเองในหลายๆด้าน โดยที่ไม่ต้องเสียเวลาในการหาข้อมูลเยอะ เพราะได้เรียนจากผู้สอนเก่ง ๆ"
    },
  ]

  const shopeeReviews: ShopeeReview[] = [
    {
      rating: "⭐️⭐️⭐️⭐️⭐️",
      review: "เจ้าหน้าที่ตอบไวมากคอสดี มากค่ะ แค่ฟังคุณบรรยงค์ ท่านเดียวก็ถือว่าคุ้มค่ามากๆแล้วค่ะ ขอให้มีspeakerท่านอื่นๆตามมาอีกเยอะๆนะคะ 👏🏻👏🏻👏🏻👏🏻🎀🎀🎀🎀🎀🎀🧡🧡🧡🧡🧡❤️❤️❤️❤️❤️❤️❤️💕💕💕💕💕💕💕💕",
      name: "phanrapeevarakul",
      date: "17-Aug-2021",
    },
    {
      rating: "⭐️⭐️⭐️⭐️⭐️",
      review: "เป็นคอร์ สที่คุ้มมาก แค่ผู้สอนก็ก็เกินคุ้มแล้ว หลากหลายมากเลยค่ะ เป็นโอกาสที่ดีมากๆ ฟังไม่เบื่อเลย เดินเรื่องได้สนุกมากค่ะ ฟังจบไปแต่ละคอร์ส รู้สึกถึง mindset ที่เปลี่ยนไปเยอะ ได้ความรู้ เทคนิคต่างๆนาๆ ไปพัฒนาตัวเองได้เยอะจริงๆ บางคอร์สสามารถตอบปัญหาที่คาใจมานานไดด้วย สุดยอดค่ะ แนะนำมากๆค่ะ 👍🏻👍🏻",
      name: "fernchanikanbualert",
      date: "17-Oct-2021",
    },
    {
      rating: "⭐️⭐️⭐️⭐️⭐️",
      review: "ดีนะคะ ลองเรียนแล้วได้ไอเดียในการทำงาน/ทำธุรกิจเยอะเลยค่ะ ราคาถือว่าคุ้มมากสำหรับการได้ฟังผู้บริหารระดับนี้ ตัวโปรแกรมเรียนใช้ง่ายดีค่ะ ขอบคุณที่พัฒนาอะไรดีๆแบบนี้นะคะ🙏🏻😊",
      name: "bellnapasorn",
      date: "06-Jun-2021",
    },
    {
      rating: "⭐️⭐️⭐️⭐️⭐️",
      review: "โปรโมชั่น ดีมากกก 1 ปี กับโค้ชที่ระดับคุณภาพพพพพ เห็นคอร์สนี้ตอนฟัง the standard ใน YouTube เลย คือตัดสินใจซื้อแทบจะทันที เพราะเหล่าโค้ชที่มาพูดคือดีอ่ะ",
      name: "danut_nammon22",
      date: "17-Sep-2021",
    },
  ]

  useEffect(() => {
  })

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
                  <Image className="image-image"
                    src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3625250/settings_images/kqTbyfM4SvqYxP1vW6MQ_SeaTalk_IMG_1638377752.png"
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
      <div className="background-dark">
        <div className="sizer">
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <div className="block-type-image col-1">
                <div className="block box-shadow-none">
                  <div className="image">
                    <Image className="image-image"
                      src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3625250/settings_images/Bpq4QpQwQlGyeUAhSIf6_IJUkoOOvRBK2doSmX7tY_SeaTalk_IMG_1615191655.webp"
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
                    <Image className="image-image"
                      src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3625250/settings_images/mmY3qiSoQqa95xWdvhse_MXeLmd2SYmCDABCmLHUs_SeaTalk_IMG_1615191654.webp"
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
                    <Image className="image-image"
                      src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3625250/settings_images/DoeTYqmTXGS3sJwpztVQ_5vpge9nSUS6RY5TkzD24_SeaTalk_IMG_1615191655_1.webp"
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
                        <Image className="feature-image"
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
            <div className="sizer" style={{ paddingTop: "20px" }}>
              <div className="container">
                <div className="row align-items-start justify-content-between">
                  <div className="block-type-feature text-center col-3">
                    <div className="block box-shadow-none">
                      <div className="feature">
                        <Image className="feature-image"
                          src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3625250/settings_images/pExfdCf5QiihoIdquVOt_Daco_4729935.png"
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
                        <a className="btn btn-solid btn-small btn-auto" href="/review" style={{ margin: "0px" }}>
                          คลิกเพื่อดูรีวิวทั้งหมด
                        </a>
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
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default Index
