import Img from "../components/image"
import Footer from "../components/footer"
import Header from "../components/header"
import FooterBrand from "../components/footerBrand"
import { strapi, strapiApi } from "../models/content"
import { Course } from "../models/courses"
import { ResponseData } from "../models/data"
import Link from "next/link"

export default function Courses({ courses }: { courses: ResponseData<Course> }) {
  return (
    <div className="bg-image courses">
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
                        <Link href="/thakorn-piyapan" passHref={true}>
                          <Img className="feature-image"
                            src={strapi + value.attributes.thumbnail.data.attributes.url}
                            alt={value.attributes.thumbnail.data.attributes.name}
                            width={262.5}
                            height={147.65} />
                        </Link>
                        <div className="feature-text">
                          <h5 style={{ textAlign: "center" }}>
                            <Link href="/thakorn-piyapan" passHref={true}>
                              <span style={{ color: "#223f99" }}>
                                <strong>
                                  {value.attributes.speaker_name}
                                </strong>
                              </span>
                            </Link>
                          </h5>
                          <h6 style={{ textAlign: "center" }}>
                            <Link href="/thakorn-piyapan" passHref={true}>
                              <strong>
                                {value.attributes.course_name}
                              </strong>
                            </Link>
                          </h6>
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
    const response = await fetch(strapiApi + "/courses?populate=*");
    const data = await response.json() as ResponseData<Course>;
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
