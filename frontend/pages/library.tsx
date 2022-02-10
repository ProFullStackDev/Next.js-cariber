import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { myCourseApi } from "../apiNest/myCourseApi";
import UserManager from "../auth/userManager";
import Footer from "../components/footer";
import FooterBrand from "../components/footerBrand";
import Header from "../components/header";
import Img from "../components/image";
import Loading from "../components/loading";
import Pagination from "../components/pagination";

export default function Library() {
  const router = useRouter();
  const userManager = new UserManager();
  const [loading, setLoading] = useState(true)
  const [myCourse, setMyCourse] = useState({
    id: "",
    email: "",
    status: "",
    course_list: [{
      id: 0,
      speaker_name: "",
      description: "",
      expires_date: "",
      course_name: "",
    }]
  });

  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    const data = await myCourseApi();
    data && setMyCourse(data);
    setLoading(false)
  }

  if (!userManager.isLoggedIn()) {
    router.replace('/');
    return <div></div>;
  }

  if(loading) return <Loading/>;

  return (
    <div className="background-image library">
      <Header />
      <div className="sizer p-b-80">
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
                      <div className="resume-course-text sm-none">
                        <h6 className="resume-course-status m-0">
                          <strong>
                            เรียนคอร์สต่อ
                          </strong>
                        </h6>
                        <p className="resume-course-title m-0">
                          Strategy to Win - EP02: กลยุทธ์ทางธุรกิจ
                        </p>
                      </div>
                      <div className="resume-course-image">
                        <Img src="/library/watch-continue.jpg"
                          width={700}
                          height={400}
                          alt="กลยุทธ์ทางธุรกิจ"
                        />
                      </div>
                      <div className="resume-course-text lg-none">
                        <h6 className="resume-course-status m-0">
                          <strong>
                            เรียนคอร์สต่อ
                          </strong>
                        </h6>
                        <p className="resume-course-title m-0">
                          Strategy to Win - EP02: กลยุทธ์ทางธุรกิจ
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-container">
              {myCourse?.course_list?.map((value, index) => {
                return (
                  <div key={`mycourse ${index}`} className="col-12 products-col">
                    <div className="product product-4 box-shadow-medium  background-light h-max">
                      <div className="product-content h-max">
                        <Link href={""}>
                          <a>
                            <div className="product-image">
                              <Img src={""}
                                width={700}
                                height={400}
                                alt={value.speaker_name}
                              />
                            </div>
                          </a>
                        </Link>
                        <div className="p-30">
                          <div className="product-info" >
                            <Link href={""}>
                              <a>
                                <h4 className="product-title">
                                  <strong>
                                    {value.course_name}
                                  </strong>
                                </h4>
                              </a>
                            </Link>
                            <div className="progress">
                              <div className="progress-outer">
                                <div className={`progress-inner p-w-${Math.round(0)}`} />
                              </div>
                            </div>
                            <p className="product-body">
                              {value.description}
                            </p>
                          </div>
                          <div className="product-button">
                            <Link href={""}>
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