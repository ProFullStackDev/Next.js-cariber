import Footer from "../components/footer";
import Header from "../components/header";
import Img from "../components/image";
import FooterBrand from "../components/footerBrand";
import * as staticData from "../components/static/review"
import SlideCourse from "../components/slideCourse";

export default function Review() {
  const featureCariberFirst = staticData.featureCariberFirst
  const featureCariberSecond = staticData.featureCariberSecond
  const featureShopee = staticData.featureShopee
  const slideCourse = staticData.slideCourse

  return (
    <div className="bg-review review">
      <Header />
      <div className="section-titel">
        <div className="sizer">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="block-type-image text-col-12" style={{ marginBottom: 40 }}>
                <div className="block box-shadow-none background-unrecognized">
                  <div className="image">
                    <a href="https://checkout.cariber.co/?add-to-cart=685&amp;cfp=bGFyZ2ViYW5uZXJfY291cnNlcw==">
                      <Img className="image-image"
                        src="/review/promotion.webp"
                        alt="Promotion"
                        width={1260}
                        height={282.017} />
                    </a>
                  </div>
                </div>
              </div>
              <div id="block-titel" className="block-type-text text-center col-7" style={{ marginBottom: 50 }}>
                <div className="block box-shadow-large background-unrecognized">
                  <h1>
                    <span style={{ color: '#e74e25' }}>
                      Wall of Love
                    </span>
                  </h1>
                  <h4>
                    <span style={{ color: '#e74e25' }}>
                      ผู้เรียนมีความเห็นอย่างไรกับ Cariber
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-person-1">
        <div id="block-person-1">
          <div className="container">
            <div className="frame align-items-center justify-content-center">
              <div className="block-type-image text-col-11">
                <div className="row block box-shadow-large background-light" >
                  <Img className="image-image"
                    src="/review/person-1.webp"
                    alt="หนุ่มเมืองจันท์"
                    width={200}
                    height={200} />
                  <div className="block-text">
                    <p style={{ marginBottom: 14 }}>
                      <strong>
                        <span style={{ color: '#2c3e50' }}>
                          &quot;ถ้าข้าพเจ้ามีเวลา 6 ชั่วโมงในการตัดต้นไม้ ข้าพเจ้าจะใช้เวลา 4 ชั่วโมงแรกลับขวานให้คม&quot;
                          <br />
                          เป็นวาทะของ&quot;อับราฮัม ลินคอล์น&quot; อดีตผู้นำสหรัฐอเมริกา
                          <br />
                          <br />
                          วิกฤติโควิด-19 ครั้งนี้หนักหนาสาหัสมาก
                          <br />
                          แต่วันหนึ่งมันต้องผ่านไป
                          <br />
                          และเมื่อวันที่ฟ้าเปิด ท้องฟ้าสดใส
                          <br />
                          ใครที่ลับขวานได้คมกว่าก็จะได้เปรียบ
                        </span>
                      </strong>
                    </p>
                    <h5 style={{ marginBottom: 0 }}>
                      <strong className="mt-auto">
                        <span>
                          <a href="https://www.facebook.com/118209918234524/posts/4271535732901901/?d=n" style={{ color: "#1e4397", fontSize: 16 }}>
                            Facebook page : หนุ่มเมืองจันท์
                          </a>
                        </span>
                      </strong>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-feature-1">
        <div className="container">
          <div className="justify-content-center grid-container">
            {featureCariberFirst.map((value, index) => {
              return (
                <div key={index} className="block-type-feature text-left col-12">
                  <div className="block box-shadow-large background-light">
                    <div className="feature">
                      <Img className="feature-image"
                        src={value.image}
                        alt={value.name}
                        width={100}
                        height={100}
                      />
                      <div className="feature-text">
                        <h4>
                          <span style={{ color: "#ed9081" }}>
                            {value.name}
                          </span>
                        </h4>
                        <p>
                          <span style={{ color: "#e74e25" }}>
                            <em>
                              {value.career}
                            </em>
                          </span>
                        </p>
                        <p>
                          <br />
                          <span style={{ color: "#0e1b20" }}>
                            &quot;
                            {value.review}
                            &quot;
                          </span>
                        </p>
                        <p>
                          <strong>
                            <span style={{ color: "#e74e25" }}>
                              {value.from}
                            </span>
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {featureCariberSecond.map((value, index) => {
              return (
                <div key={index} className="block-type-feature text-left col-12">
                  <div className="block box-shadow-large background-light">
                    <div className="feature">
                      <Img className="feature-image"
                        src={value.image}
                        alt={value.name}
                        width={70}
                        height={70}
                      />
                      <div className="feature-text">
                        <h4>
                          <span style={{ color: "#ed9081" }}>
                            {value.name}
                          </span>
                        </h4>
                        <p>
                          <span style={{ color: "#e74e25" }}>
                            <em>
                              {value.career}
                            </em>
                          </span>
                        </p>
                        <p>
                          <br />
                          <span style={{ color: "#0e1b20" }}>
                            &quot;
                            {value.review}
                            &quot;
                          </span>
                        </p>
                        <p>
                          <strong>
                            <span style={{ color: "#e74e25" }}>
                              {value.from}
                            </span>
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {featureShopee.map((value, index) => {
              return (
                <div key={index} className="block-type-feature text-left col-12">
                  <div className="block box-shadow-large background-light">
                    <div className="feature">
                      <div className="feature-text">
                        <h4>
                          <span style={{ color: "#ed9081" }}>
                            {value.name}
                          </span>
                        </h4>
                        <p style={{ margin: 0 }}>
                          <strong>
                            <span style={{ color: "#0e1b20" }}>
                              Ratings : {value.ratings}
                            </span>
                          </strong>
                        </p>
                        <p>
                          <br />
                          <span style={{ color: "#0e1b20" }}>
                            &quot;
                            {value.review}
                            &quot;
                          </span>
                        </p>
                        <p>
                          <strong>
                            <span style={{ color: "#e74e25" }}>
                              {value.from}
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
      </div>
      <div className="sections-footer">
        <div className="sizer ">
          <div className="container ">
            <div className="row align-items-center justify-content-center">
              <div className="block-type-text text-center col-12">
                <div className="block box-shadow-none background-unrecognized">
                  <p style={{ fontSize: "40px", textAlign: "center" }}>
                    <strong>
                      <span style={{ color: "#e74e25" }}>
                        สูตรความสำเร็จกับ &quot;ที่สุด&quot; ของประเทศ
                      </span>
                    </strong>
                  </p>
                  <p style={{ fontSize: "20px", textAlign: "center" }}>
                    <em>
                      <strong>
                        <span style={{ color: "#e74e25" }}>
                          คอร์สออนไลน์กับผู้บริหาร ผู้นำทางความคิด แบบที่ไม่เคยมีมาก่อน
                        </span>
                      </strong>
                    </em>
                  </p>
                </div>
              </div>
              <div className="block-type-code text-left col-12">
                <SlideCourse slideCourse={slideCourse} slideView={4} imageWidth={258} imageHeight={470} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBrand />
      <Footer />
    </div >
  )
}