import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { myCourseApi } from "../apiNest/myCourseApi";
import Footer from "../components/footer";
import FooterBrand from "../components/footerBrand";
import Header from "../components/header";
import Img from "../components/image";
import Pagination from "../components/pagination";

export default function TrialLibrary() {
  const [loadingItem, setLoadingItem] = useState(true);
  const router = useRouter();
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
      thumbnail_image: "",
    }]
  });

  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    const data = await myCourseApi();
    data && setMyCourse(data);
    setLoadingItem(false);
  }

  return (
    <div className="background-image library">
      <Header />
      <div className="sizer-full align-items-start p-b-80">
        <div className="container m-t-30">
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
            {!loadingItem && myCourse?.course_list?.map((value, index) => {
              return (
                <div key={index} className="block-type-feature text-center col-4">
                  <div className="block box-shadow-large background-white p-12 b-r-4">
                    <div className="feature">
                      <Link href={`/product/${value.id}`}>
                        <a>
                          <Img className="feature-image"
                            src={value.thumbnail_image}
                            alt={value.speaker_name}
                            width={262.5}
                            height={147.65} />
                        </a>
                      </Link>
                    </div>
                    <div className="feature-text">
                      <div className="text-left">
                        <h6 className="color-black">คอร์สเรียน: {value.course_name}</h6>
                        <p>สอนโดย: {value.speaker_name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            <Pagination page={Number(router.query.page)} pageCount={1} />
          </div>
        </div>
      </div>
      <FooterBrand />
      <Footer />
    </div>
  )
}