import Footer from "../components/footer";
import Header from "../components/header";
import Img from "../components/image";
import FooterBrand from "../components/footerBrand";
import * as staticData from "../components/static/review"
import SlideCourse from "../components/slideCourse";
import { AnnualPromotionContent } from "../apiStrapi/models/contentType/annualPromotion";
import { ResponseData, ResponseDataList } from "../apiStrapi/models/data";
import annualPromotionApi from "../apiStrapi/annualPromotionApi";
import { strapiImage } from "../apiStrapi/models/content";
import reviewStudentsApi from "../apiStrapi/reviewStudentsApi";
import reviewHeaderApi from "../apiStrapi/reviewHeaderApi";
import { ReviewHeaderContent } from "../apiStrapi/models/contentType/reviewHeader";
import { ReviewStudentContent } from "../apiStrapi/models/contentType/reviewStudent";
import ReviewHeader from "../components/reviews/reviewHeader";
import ReviewStudents from "../components/reviews/reviewStudents";
import ReviewCaribers from "../components/reviews/reviewCaribers";
import { ReviewCariberContent } from "../apiStrapi/models/contentType/reviewCaribers";
import reviewCaribersApi from "../apiStrapi/reviewCaribersApi";
import reviewShopeesApi from "../apiStrapi/reviewShopeesApi";
import { ReviewShopeeContent } from "../apiStrapi/models/contentType/reviewShopee";
import ReviewShopee from "../components/reviews/reviewShopee";

interface ReviewProps {
  annualPromotion: ResponseData<AnnualPromotionContent>;
  reviewHeader: ResponseData<ReviewHeaderContent>;
  reviewStudents: ResponseDataList<ReviewStudentContent>;
  reviewCaribers: ResponseDataList<ReviewCariberContent>;
  reviewShopees: ResponseDataList<ReviewShopeeContent>;
}


export default function Review({ annualPromotion,
  reviewHeader,
  reviewStudents,
  reviewCaribers,
  reviewShopees, }: ReviewProps) {
  const slideCourses = staticData.slideCourses

  return (
    <div className="background-primary-color review">
      <Header />
      <div className="section-titel">
        <div className="sizer">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="block-type-image text-col-12 m-b-40">
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
              <div id="block-titel" className="block-type-text text-center col-7 m-b-50">
                <div className="block box-shadow-large background-unrecognized">
                  <h1>
                    <span className="color-primary">
                      Wall of Love
                    </span>
                  </h1>
                  <h4>
                    <span className="color-primary">
                      ผู้เรียนมีความเห็นอย่างไรกับ Cariber
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReviewHeader reviewHeader={reviewHeader.data} />
      <div className="section-feature-1">
        <div className="container">
          <div className="justify-content-center grid-container">
            {reviewStudents.data.map((value, index) => {
              return (
                <ReviewStudents key={index} reviewStudent={value} />
              )
            })}
            {reviewCaribers.data.map((value, index) => {
              return (
                <ReviewCaribers key={index} reviewCariber={value} />
              )
            })}
            {reviewShopees.data.map((value, index) => {
              return (
                <ReviewShopee key={index} reviewShopee={value}/>
              )
            })}
          </div>
        </div>
      </div>
      <div className="sections-footer">
        <div className="sizer ">
          <div className="container ">
            <div className="row align-items-center justify-content-center">
              <div className="block-type-text text-center col-12">
                <div className="block box-shadow-none background-unrecognized">
                  <p className="f-s-40 text-center">
                    <strong>
                      <span className="color-primary">
                        สูตรความสำเร็จกับ &quot;ที่สุด&quot; ของประเทศ
                      </span>
                    </strong>
                  </p>
                  <p className="f-s-20 text-center">
                    <em>
                      <strong>
                        <span className="color-primary">
                          คอร์สออนไลน์กับผู้บริหาร ผู้นำทางความคิด แบบที่ไม่เคยมีมาก่อน
                        </span>
                      </strong>
                    </em>
                  </p>
                </div>
              </div>
              <div className="block-type-code text-left col-12">
                <SlideCourse slideCourses={slideCourses} slideView={4} imageWidth={258} imageHeight={470} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBrand />
      <Footer />
    </div >
  )
}

export async function getStaticProps() {
  return {
    props: {
      annualPromotion: await annualPromotionApi(),
      reviewHeader: await reviewHeaderApi(),
      reviewStudents: await reviewStudentsApi(),
      reviewCaribers: await reviewCaribersApi(),
      reviewShopees: await reviewShopeesApi(),
    }
  }
};
