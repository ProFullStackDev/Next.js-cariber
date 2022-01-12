import Footer from "../components/footer";
import FooterBrand from "../components/footerBrand";
import Header from "../components/header";
import Img from "../components/image";
import * as staticData from "../components/static/library"

export interface MyCourse {
  image: string,
  title: string,
  progress: number,
  description: string,
}

export default function Library() {
  const myCourse = staticData.myCourse

  return (
    <div className="bg-image library">
      <Header />
      <div className="sizer">
        <div className="container">
          <div className="row products-list">
            <div className="col-12 products-col">
              <div className="products-header">
                <h4 className="products-title">
                  <strong>
                    คอร์สของฉัน
                  </strong>
                </h4>
                <div className="resume-course box-shadow-none ">
                  <div className="resume-course-positioner">
                    <a className="resume-course-content" href="#">
                      <div className="resume-course-text">
                        <h5 className="resume-course-status" style={{ margin: "0px" }}>
                          <strong>
                            เรียนคอร์สต่อ
                          </strong>
                        </h5>
                        <p className="resume-course-title" style={{ margin: "0px" }}>
                          Strategy to Win - EP02: กลยุทธ์ทางธุรกิจ
                        </p>
                      </div>
                      <div className="resume-course__image">
                        <Img src="/library/watch-continue.jpg"
                          width={175}
                          height={98.4333}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-container">
              {myCourse.map((value, index) => {
                return (
                  <div key={`mycourse ${index}`} className="col-12 products-col">
                    <div className="product product-4 box-shadow-medium  background-light" style={{height: "100%"}}>
                      <a href="#">
                        <div className="product-image">
                          <Img src={value.image}
                            width={700}
                            height={400}
                          />
                        </div>
                      </a>
                      <div className="product-content">
                        <div className="product-info">
                          <a href="#">
                            <h4 className="product-title">
                              <strong>
                                {value.title}
                              </strong>
                            </h4>
                          </a>
                          <div className="progress">
                            <div className="progress-outer">
                              <div className="progress-inner" style={{ width: `${value.progress}%` }} />
                            </div>
                          </div>
                          <p className="product-body">
                            {value.description}
                          </p>
                        </div>
                        <div className="product-button">
                          <a className="btn btn-solid btn-small btn-full" href="#">
                            รับชมเลย
                          </a>
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
      <FooterBrand />
      <Footer />
    </div>
  )
}