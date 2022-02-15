import Footer from "../../components/footer"
import FooterBrand from "../../components/footerBrand"
import Header from "../../components/header"
import StudentReviews from "../../components/studentReviews"
import SlideCourse from "../../components/slideCourse"
import IntroductionPersonal from "../../components/courseDetail/introductionPersonal"
import InterestingTopic from "../../components/courseDetail/interestingTopic"
import Suitable from "../../components/courseDetail/suitable"
import Sale from "../../components/courseDetail/sale"
import UpperHeader from "../../components/courseDetail/upperHeader"
import { ResponseData, ResponseDataList } from "../../apiStrapi/models/data"
import { CourseContent, Contents } from "../../apiStrapi/models/contentType/courses"
import { strapiImage } from "../../apiStrapi/models/contact"
import YoutubeEP from "../../components/courseDetail/youtubeEP"
import CourseHeader from "../../components/courseDetail/courseHeader"
import singleCourseApi from "../../apiStrapi/singleCouresApi"
import { SingleCourse } from "../../apiStrapi/models/contentType/singleCourse"
import annualPromotionApi from "../../apiStrapi/annualPromotionApi"
import { AnnualPromotionContent } from "../../apiStrapi/models/contentType/annualPromotion"
import EpisodeAccordion from "../../components/courseDetail/episodeAccordion"
import { ReviewContent } from "../../apiStrapi/models/contentType/review"
import reviewApi from "../../apiStrapi/reviewApi"
import { coursesAllApi, coursesApi } from "../../apiStrapi/coursesApi"

interface CourseDetailParams {
  courseId: string;
}

interface CourseDetailProps {
  course: ResponseData<CourseContent>;
  courses: ResponseDataList<CourseContent>;
  singleCourse: ResponseData<SingleCourse>;
  annualPromotion: ResponseData<AnnualPromotionContent>;
  review: ResponseData<ReviewContent>;
}

export default function CourseDetail({ course,
  courses,
  singleCourse,
  annualPromotion,
  review }: CourseDetailProps) {
  const youtubeEPItems = course.data?.contents?.find((value) => { return value.__component === "components.special-ep-component" }) as Contents;
  return (
    <div className="course-detail">
      <Header />
      <div className="tb-sizer">
        {course.data?.header && (
          <UpperHeader header={course.data?.header} />
        )}
        <CourseHeader yearlySubscriptionImage={strapiImage(annualPromotion.data?.attributes?.image?.data?.attributes?.url)}
          singleCourseImage={strapiImage(singleCourse.data?.attributes?.image?.data?.attributes?.url)}
          videoId={course.data?.teaser_url}
          videoPoster={""}
          singleCheckoutUrl={course.data?.order_link}
          yearlySubscriptionCheckoutUrl={annualPromotion.data?.attributes?.url}
          yearlySubscriptionImageMobile={strapiImage(annualPromotion.data?.attributes?.image_mobile?.data?.attributes?.url)} />
        {youtubeEPItems?.special_ep?.length > 0 && (
          <YoutubeEP YoutubeEPItems={youtubeEPItems.special_ep} />
        )}
        {course.data?.speaker_details?.url && (
          <IntroductionPersonal fullName={course.data?.name}
            personalHistoryImage={strapiImage(course.data.speaker_details?.url)}
            highRatio={course.data?.speaker_details?.height / course.data?.speaker_details?.width} />
        )}
        {course.data?.contents?.map((value, index) => {
          if (value.__component === "components.topic-component") {
            return (
              <InterestingTopic key={index} interestingTopics={value?.topics} />
            )
          }
          if (value.__component === "components.suitable-component") {
            return (
              <Suitable key={index} suitable={value?.items} />
            )
          }
        })}
        <EpisodeAccordion totalHours={course.data?.total_hours}
          totalEpisodes={course.data?.total_lessons}
          episodes={course.data?.episodes} />
      </div>
      <Sale singleCoursePersonalImage={strapiImage(course.data?.order_image?.url)}
        yearlySubscriptionImage={strapiImage(annualPromotion.data?.attributes?.image?.data?.attributes?.url)}
        yearlySubscriptionImageMobile={strapiImage(annualPromotion.data?.attributes?.image_mobile?.data?.attributes?.url)}
        singleCheckoutUrl={course.data?.order_link}
        yearlySubscriptionCheckoutUrl={annualPromotion.data?.attributes?.url} />
      <div className="background-light">
        <div className="sizer">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="block-type-text text-center col-12 p-0 m-t-0">
                <div className="block box-shadow-none">
                  <h2 className="font-md-20 text-center">
                    <span className="color-primary">
                      คอร์สอื่น ๆ จาก &quot;ที่สุด&quot; ของประเทศอีกมากมาย
                    </span>
                  </h2>
                </div>
              </div>
              <div className="block-type-code text-left col-12">
                <SlideCourse slideCourses={courses.data} slideView={4} imageWidth={235} imageHeight={470.533} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background-dark">
        <StudentReviews reviewStudents={review.data?.student} />
      </div>
      <FooterBrand />
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const data = await coursesAllApi(); 
  const dataFilter = (data.data.filter((value) => {
    return value
  }));
  const paths = dataFilter.map((value) => {
    return {
      params: {
        courseId: value.id.toString(),
      }
    }
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: CourseDetailParams }) {
  return {
    props: {
      course: await coursesApi(params.courseId),
      courses: await coursesAllApi(),
      singleCourse: await singleCourseApi(),
      annualPromotion: await annualPromotionApi(),
      review: await reviewApi(),
    }
  };
}
