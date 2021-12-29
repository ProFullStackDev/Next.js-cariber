import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/header'
import Footer from '../components/footer'
import Image from 'next/image'

const Index: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
  })

  return (
    <div className="index">
      <Header />
      <div className="background-dark">
        <div className="sizer">
          <div className="">
            <div className="row align-items-center justify-content-center">
              <div className="block-type-form text-center col-3">
                <div className="block box-shadow-none aos-init aos-animate">
                  <div className="form">
                    <div>
                      <h2 style={{ fontSize: "28px" }}>
                        ลงทะเบียนทดลองเรียน 7 วัน ฟรี!
                      </h2>
                      <p>
                        ทดลองเรียนได้ทันทีทุกคอร์ส คอร์สละ 1 บทเรียน
                      </p>
                    </div>
                    <form action="">
                      <div>
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
                      </div>
                    </form>
                    <p className="disclaimer-text">
                      คอร์สทดลองเรียนจะหมดอายุภายใน 7 วัน นับจากวันที่ลงทะเบียนและได้รับคอร์ส
                    </p>
                  </div>
                </div>
              </div>
              <div className="block-type-image text-center col-7">
                <div className="block box-shadow-none aos-init aos-animate">
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
      </div>
      <div className="">
        <div className="">
          <div className="">

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Index
