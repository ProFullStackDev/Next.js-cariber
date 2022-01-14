import Img from "../components/image"
import Footer from "../components/footer"
import Header from "../components/header"
import FooterBrand from "../components/footerBrand"
import { strapi, strapiApi } from "../models/content"
import { Course } from "../models/courses"
import { ResponseData } from "../models/data"
import Link from "next/link"

export default function Library({ courses }: { courses: ResponseData<Course> }) {
  
  return (
    <div className="bg-courses courses">
      <Header />
      <div className="sizer">
        <div className="container">
          <div className="row align-items-center">
            <div className="block-type-text text-left col-12">
              <div className="block box-shadow-none background-unrecognized">
                <h2 style={{ textAlign: "left", color: "#e74e25" }}>
                  คอร์สของฉัน
                </h2>
              </div>
            </div>
            <div className="block-break"></div>
            {courses ? courses.data.map((value) => {
              return (
                <div key={value.id} className="block-type-feature text-center col-3">
                  <div className="block box-shadow-large background-light"
                    style={{ backgroundColor: "#ffffff", borderRadius: "4px" }}>
                    
                      <div style={{ padding: "15px", cursor: "pointer" }}>
                        <div className="feature">
                            <Link href={`/library/${value.id}`} passHref={true}>
                            <Img className="feature-image"
                                src={strapi + value.attributes.thumbnail.data.attributes.url}
                                alt={value.attributes.thumbnail.data.attributes.name}
                                width={262.5}
                                height={147.65} />
                            </Link>
                            <div className="feature-text">
                                <h5 style={{ textAlign: "center" }}>
                                <span style={{ color: "#223f99" }}>
                                    <strong>
                                    {value.attributes.speaker_name}
                                    </strong>
                                </span>
                                </h5>
                                <h6 style={{ fontSize: "12px", textAlign: "center" }}>
                                    {value.attributes.description}
                                </h6>
                                <h6 style={{ fontSize: "12px", textAlign: "center" }}>
                                    {value.attributes.course_name}
                                </h6>
                                <Link href={`/library/${value.id}`} passHref={true}>
                                <button> Click To Course Details</button>
                                </Link>
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
