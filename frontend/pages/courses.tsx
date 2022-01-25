import Img from "../components/image"
import Footer from "../components/footer"
import Header from "../components/header"
import FooterBrand from "../components/footerBrand"
import { strapiApi, strapiImage } from "../models/content"
import { Course } from "../models/courses"
import { ResponseDataList } from "../models/data"
import Link from "next/link"

export default function Courses({ courses }: { courses: ResponseDataList<Course> }) {
  return (
    <div className="background-image courses">
      <Header />
      <div className="sizer">
        <div className="container">
          <div className="row align-items-center">
            <div className="block-type-image text-col-12" style={{ marginBottom: 0 }}>
              <div className="block box-shadow-none background-unrecognized">
                <div className="image">
                  <a href="https://checkout.cariber.co/?add-to-cart=685&amp;cfp=bGFyZ2ViYW5uZXJfY291cnNlcw==">
                    <Img className="image-image"
                      src="/courses/promotion.webp"
                      alt="Promotion"
                      width={1260}
                      height={282.017} />
                  </a>
                </div>
              </div>
            </div>
            <div className="block-type-text text-left col-12">
              <div className="block box-shadow-none background-unrecognized">
                <h2 style={{ textAlign: "center", color: "#e74e25" }}>
                  คอร์สทั้งหมด
                </h2>
              </div>
            </div>
            <div className="block-break"></div>
            {courses ? courses.data.map((value) => {
              return (
                <div key={value.id} className="block-type-feature text-center col-3">
                  <div className="block box-shadow-large background-light"
                    style={{ backgroundColor: "#ffffff", borderRadius: "4px" }}>
                    <div style={{ padding: "15px" }}>
                      <div className="feature">
                        <Link href={`/course/${value.id}`}>
                          <a className={`${!value.course_detail && "disabled"}`}>
                            <Img className="feature-image"
                              src={strapiImage(value.thumbnail_image?.url)}
                              alt={value?.thumbnail_image?.name}
                              width={262.5}
                              height={147.65} />
                          </a>
                        </Link>
                        <div className="feature-text">
                          <h5>
                            <Link href={`/course/${value.id}`}>
                              <a className={`${!value.course_detail && "disabled"}`}>
                                <span style={{ color: "#223f99" }}>
                                  <strong>
                                    {value.speaker_name}
                                  </strong>
                                </span>
                              </a>
                            </Link>
                          </h5>
                          <p style={{ fontSize: "12px" }}>
                            <Link href={`/course/${value.id}`}>
                              <a className={`${!value.course_detail && "disabled"}`}>
                                {value.course_name}
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }) : (
              <div className="text-center w-100">ไม่พบคอร์ส</div>
            )}
          </div>
        </div>
      </div>
      <FooterBrand />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  try {
    const response = await fetch(strapiApi + "/courses");
    const data = await response.json() as ResponseDataList<Course>;
    return { props: { courses: data } }
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: JSON.stringify(error)
      }
    };
  }
};
