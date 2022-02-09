import Img from "../components/image"
import Footer from "../components/footer"
import Header from "../components/header"
import FooterBrand from "../components/footerBrand"
import { strapiApi, strapiImage } from "../apiStrapi/models/content"
import { CourseContent } from "../apiStrapi/models/contentType/courses"
import { ResponseData, ResponseDataList } from "../apiStrapi/models/data"
import Link from "next/link"
import annualPromotionApi from "../apiStrapi/annualPromotionApi"
import { AnnualPromotionContent } from "../apiStrapi/models/contentType/annualPromotion"

interface CoursesProps {
  courses: ResponseDataList<CourseContent>;
  annualPromotion: ResponseData<AnnualPromotionContent>;
}

export default function Courses({ courses, annualPromotion }: CoursesProps) {
  return (
    <div className="background-image courses">
      <Header />
      <div className="sizer">
        <div className="container">
          <div className="row align-items-center">
            <div className="block-type-image text-col-12 m-b-0">
              <div className="block box-shadow-none background-unrecognized">
                <div className="image">
                  <a href={annualPromotion.data.attributes.url}>
                    <Img className="image-image"
                      src={strapiImage(annualPromotion.data.attributes.image_header?.data.attributes.url)}
                      alt="Promotion"
                      width={1260}
                      height={282.017} />
                  </a>
                </div>
              </div>
            </div>
            <div className="block-type-text text-left col-12">
              <div className="block box-shadow-none background-unrecognized">
                <h2 className="color-primary text-center">
                  คอร์สทั้งหมด
                </h2>
              </div>
            </div>
            <div className="block-break"></div>
            {courses ? courses.data.map((value) => {
              return (
                <div key={value.id} className="block-type-feature text-center col-3">
                  <div className="block box-shadow-large background-white p-12 b-r-4">
                    <div>
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
                                <span className="color-darkblue">
                                  <strong>
                                    {value.speaker_name}
                                  </strong>
                                </span>
                              </a>
                            </Link>
                          </h5>
                          <p className="f-s-12">
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
    const data = await response.json() as ResponseDataList<CourseContent>;
    return {
      props: {
        courses: data,
        annualPromotion: await annualPromotionApi(),
      }
    }
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: JSON.stringify(error)
      }
    };
  }
};
