import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Img from "../../components/image";
import Pagination from "../../components/pagination";
import * as staticData from "../../components/static/products"

export default function Products() {
  const router = useRouter()
  const products = staticData.products

  return (
    <div className="products">
      <Header />
      <div className="background-products">
        <div className="sizer background-products-overlap">
          <div className="container content-center">
            <div className="col-7">
              <div className="panel-block">
                <h1 className="text-white">
                  The Art of Football Tactics
                </h1>
                <h6 className="text-white">
                  เกียรติศักดิ์ เสนาเมือง หรือ ‘ซิโก้’ อดีตนักฟุตบอลและหัวหน้าผู้ฝึกสอนทีมชาติไทย ศูนย์หน้าระดับตำนานผู้ทำประตูสูงสุดในนามทีมชาติอันดับ 16 ของโลก ด้วยจำนวน 71 ประตูใน 134 แมตช์ และโค้ชผู้นำพาทีมชาติไทยกู้ศรัทธาจากแฟนบอลจนสร้างประวัติศาสตร์คว้าแชมป์อาเซียนคัพ หรือ AFF ซูซูกิคัพ ได้ถึง 2 สมัย
                </h6>
              </div>
              <a className="btn btn-box" href="#">
                เริ่มเรียนคอร์ส
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="background-image">
        <div className="sizer">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="panel-body" style={{ backgroundColor: "white" }}>
                  <h5 className="syllabus-heading">
                    The Art of Football Tactics
                  </h5>
                  {products.map((value, index) => {
                    return (
                      <div key={`product-item-${index}`} className="syllabus-item">
                        <a href="#">
                          <div className="media">
                            <div className="media-left">
                              <div className="syllabus-img">
                                <Img src={value.image}
                                  width={125}
                                  height={80}
                                />
                              </div>
                            </div>
                            <div className="media-body">
                              <p className="syllabus-title">
                                {value.title}
                              </p>
                              <p className="syllabus-text">
                                {value.description}
                              </p>
                            </div>
                            <div className="media-right media-middle col-2">
                              {value.progress ? (
                                <div className="md-pd-tb-10">
                                  {value.progress === 100 ? (<div className="check-item">
                                    <i className="fa fa-check" style={{ color: "#e74e25;" }}></i>
                                  </div>) : (
                                    <div className="progress">
                                      <div className="progress-outer">
                                        <div className="progress-inner" style={{ width: `${value.progress}%` }} />
                                      </div>
                                    </div>
                                  )}
                                </div>) : (<div></div>)}
                            </div>
                          </div>
                        </a>
                      </div>
                    )
                  })
                  }
                  {Number(router.query.page) ? (
                    <Pagination page={Number(router.query.page)} pageCount={2} />
                  ) : (
                    <a href="?page=1"
                      style={{ color: "#e74e25", fontSize: "1rem", cursor: "pointer" }}>
                      บทเรียนถัดไป &gt;&gt;&gt;
                    </a>
                  )}
                </div>
              </div>
              <div className="col-4">
                <div className="panel">
                  <Img src="/library/my-course-3.jpg"
                    width={800}
                    height={400}
                  />
                  <div className="panel-card-body">
                    <h6 className="panel-heading" >
                      0 of 11 คอร์สรับชมเสร็จสิ้น
                    </h6>
                    <div className="progress">
                      <div className="progress-outer">
                        <div className="progress-inner" style={{ width: `${0}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-card-body" style={{ textAlign: "center" }}>
                    <h6 className="panel-heading">
                      The Art of Football Tactics
                    </h6>
                    <a className="btn btn-box" href="#" style={{ fontSize: "12px" }}>
                      คลิกเพื่อดาวน์โหลดไฟล์ประกอบ
                    </a>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-card-body">
                    <div className="media" style={{display: "flex"}}>
                      <div className="media-left">
                        <Img className="instructor-image"
                          src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2149288781/settings_images/akMdVuX4TrWwSnAAQ9Ai_EP14-SQ.jpg"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="media-body media-middle">
                        <h5 className="instructor-name">
                          คุณเกียรติศักดิ์ เสนาเมือง
                        </h5>
                        <h6 className="instructor-title">
                          Instructor
                        </h6>
                      </div>
                    </div>
                    <p className="panel-copy">
                      เพราะความสำเร็จของฟุตบอลเกิดจากทีมเวิร์ค และกว่าที่จะมาเป็นทีมได้ต้องมีกระบวนการสร้าง
                    </p>
                  </div>
                </div>
                <div className="panel">
                  <Img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148551430/settings_images/0OQQwnj3Qu6NUFJjiA1S_Webstie-01.jpg"
                    width={800}
                    height={400}
                  />
                  <div className="panel-card-body" style={{ textAlign: "center" }}>
                    <h6 className="panel-heading">
                      Cariber ใส่ใจกับทุกความคิดเห็นของคุณ
                    </h6>
                    <div className="panel-copy">
                      <p>
                        <span>
                          กรอกแบบสอบถามต่อไปนี้หากมีใครที่คุณอยากให้มาเป็นผู้สอนในอนาคต ทีมงานจะนำข้อเสนอแนะไปพิจารณาต่อไป
                        </span>
                      </p>
                    </div>
                    <a className="btn btn-box" href="#" style={{ fontSize: "12px" }}>
                      คลิกเพื่อแสดงความคิดเห็น
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}