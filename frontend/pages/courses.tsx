import Img from "../components/image";
import Footer from "../components/footer";
import Header from "../components/header";
import FooterBrand from "../components/footerBrand";
import { strapiImage } from "../apiStrapi/models/contact";
import { CourseContent } from "../apiStrapi/models/contentType/courses";
import { ResponseData, ResponseDataList } from "../apiStrapi/models/data";
import Link from "next/link";
import { coursesAllApi, seasonalPromotionApi } from "../apiStrapi/StrapiApiService";
import { SeasonalPromotionContent } from "../apiStrapi/models/contentType/seasonalPromotion";
import ImagePartialLogin from "../components/imagePartialLogin";

interface CoursesProps {
  courses: ResponseDataList<CourseContent>;
  seasonalPromotion: ResponseData<SeasonalPromotionContent>;
}

export default function Courses({ courses, seasonalPromotion }: CoursesProps) {
  return (
    <div className="background-image courses">
      <Header />
      <div className="sizer">
        <div className="container">
          <div className="row align-items-center">
            {seasonalPromotion.data?.attributes?.display && (
              <div className="block-type-image text-col-12 m-b-0">
                <div className="block box-shadow-none background-unrecognized">
                  <ImagePartialLogin
                    sku={seasonalPromotion.data?.attributes?.url}
                    src={strapiImage(seasonalPromotion.data?.attributes?.image?.data?.attributes?.url)}
                    width={1260}
                    height={282.017}
                    alt={"Promotion"} />
                </div>
              </div>
            )}
            <div className="block-type-text text-left col-12">
              <div className="block box-shadow-none background-unrecognized">
                <h2 className="color-primary text-center">
                  คอร์สทั้งหมด
                </h2>
              </div>
            </div>
            <div className="grid-container col-12 p-0">
              {courses ? courses.data?.map((value) => {
                return (
                  <div key={value?.id} className="block-type-feature text-center p-10">
                    <div className="block box-shadow-large background-white p-12 b-r-4">
                      <div>
                        <div className="feature">
                          <Link href={`/course/${value?.id}`}>
                            <a className={`${!value?.publishedAt && "disabled"}`}>
                              <Img className="feature-image"
                                src={value?.speaker_image}
                                alt={value?.speaker_name}
                                width={500}
                                height={281.238095} />
                            </a>
                          </Link>
                          <div className="feature-text">
                            <Link href={`/course/${value?.id}`}>
                              <a className={`${!value?.publishedAt && "disabled"}`}>
                                <h5 className="color-darkblue f-w-500 m-0">
                                  {value.speaker_name}
                                </h5>
                              </a>
                            </Link>
                            <Link href={`/course/${value?.id}`}>
                              <a className={`${!value?.publishedAt && "disabled"}`}>
                                <p className="f-s-12 f-w-500 m-0">
                                  {value.course_name}
                                </p>
                              </a>
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
      </div>
      <FooterBrand />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  try {
    return {
      props: {
        courses: await coursesAllApi(),
        seasonalPromotion: await seasonalPromotionApi(),
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
