import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../components/footer";
import FooterBrand from "../components/footerBrand";
import Header from "../components/header";
import Img from "../components/image";
import Pagination from "../components/pagination";
import * as staticData from "../components/static/library"

export interface MyCourse {
  image: string,
  title: string,
  progress: number,
  description: string,
  path: string
}

export default function Library() {
  const router = useRouter()
  const myCourse = staticData.myCourse

  return (
    <div className="background-image library">
      <Header />
      <div className="sizer" style={{ paddingBottom: "80px" }}>
        <div className="container">
          <div className="row products-list">
            <div className="col-12 products-col">
              <div className="products-header">
                <h4 className="products-title">
                  <strong>
                    คอร์สของฉัน
                  </strong>
                </h4>
                <div className="resume-course box-shadow-none">
                  <div className="resume-course-positioner">
                    <a className="resume-course-content" href="#">
                      <div className="resume-course-text md-none">
                        <h6 className="resume-course-status" style={{ margin: "0px" }}>
                          <strong>
                            เรียนคอร์สต่อ
                          </strong>
                        </h6>
                        <p className="resume-course-title" style={{ margin: "0px" }}>
                          Strategy to Win - EP02: กลยุทธ์ทางธุรกิจ
                        </p>
                      </div>
                      <div className="resume-course-image">
                        <Img src="/library/watch-continue.jpg"
                          width={700}
                          height={400}
                        />
                      </div>
                      <div className="resume-course-text lg-none">
                        <h6 className="resume-course-status" style={{ margin: "0px" }}>
                          <strong>
                            เรียนคอร์สต่อ
                          </strong>
                        </h6>
                        <p className="resume-course-title" style={{ margin: "0px" }}>
                          Strategy to Win - EP02: กลยุทธ์ทางธุรกิจ
                        </p>
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
                    <div className="product product-4 box-shadow-medium  background-light" style={{ height: "100%" }}>
                      <div className="product-content" style={{ height: "100%" }}>
                        <Link href={value.path} passHref={true}>
                          <a>
                            <div className="product-image">
                              <Img src={value.image}
                                width={700}
                                height={400}
                              />
                            </div>
                          </a>
                        </Link>
                        <div style={{ padding: "30px" }}>
                          <div className="product-info" >
                            <Link href={value.path} passHref={true}>
                              <a>
                                <h4 className="product-title">
                                  <strong>
                                    {value.title}
                                  </strong>
                                </h4>
                              </a>
                            </Link>
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
                            <Link href={value.path} passHref={true}>
                              <a className="btn btn-box btn-solid btn-small btn-full">
                                รับชมเลย
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <Pagination page={Number(router.query.page)} pageCount={1} />
          </div>
        </div>
      </div>
      <FooterBrand />
      <Footer />
    </div>
  )
}