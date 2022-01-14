import Img from "../../components/image"
import Footer from "../../components/footer"
import Header from "../../components/header"
import FooterBrand from "../../components/footerBrand"
import { strapi, strapiApi } from "../../models/content"
import { Course } from "../../models/courses"
import { ResponseData } from "../../models/data"
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
            {courses ? courses.data.map((value, index) => {
              return (
                <div key={`mycourse ${index}`} className="col-3 products-col">
                          <div className="product product-4 box-shadow-medium  background-light" style={{ height: "100%" }}>
                            <div className="product-content" style={{ height: "100%" }}>
                              <a href="#">
                                <div className="product-image">
                                  <Img 
                                  src={strapi + value.thumbnail_image?.url}
                                  alt={value?.thumbnail_image?.name}
                                  width={700}
                                  height={400}
                                  />
                                </div>
                              </a>
                              <div style={{ padding: "30px" }}>
                                <div className="product-info" >
                                  <Link href={`/library/${value.id}`} passHref={true}>
                                    <h4 className="product-title">
                                      <strong>
                                        {value.course_name}
                                      </strong>
                                    </h4>
                                  </Link>
                                  <div className="progress">
                                    <div className="progress-outer">
                                      {/* <div className="progress-inner" style={{ width: `${value.progress}%` }} /> */}
                                    </div>
                                  </div>
                                  <p className="product-body">
                                    {value.course_detail}
                                  </p>
                                </div>
                                <div className="product-button">
                                  <a  href={`/library/${value.id}`} className="btn btn-box btn-solid btn-small btn-full" >
                                    รับชมเลย
                                  </a>
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
