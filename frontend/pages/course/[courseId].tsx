import Footer from "../../components/footer"
import FooterBrand from "../../components/footerBrand"
import Header from "../../components/header"
import ReviewStudents from "../../components/reviewStudents"
import SlideCourse from "../../components/slideCourse"
import * as staticDataReview from "../../components/static/review"
import IntroductionPersonal from "../../components/courseDetail/introductionPersonal"
import EpisodeAccordion from "../../components/courseDetail/EpisodeAccordion"
import InterestingTopic from "../../components/courseDetail/interestingTopic"
import Suitable from "../../components/courseDetail/suitable"
import Sale from "../../components/courseDetail/sale"
import UpperHeader from "../../components/courseDetail/upperHeader"
import { ResponseData, ResponseDataList } from "../../models/data"
import { Course } from "../../models/courses"
import { strapiApi, strapiImage } from "../../models/content"
import YoutubeEP from "../../components/courseDetail/youtubeEP"
import CourseHeader from "../../components/courseDetail/courseHeader"

interface CourseDetailParams {
  courseId: string
}

export default function CourseDetail({ course }: { course: ResponseData<Course> }) {
  const slideCourses = staticDataReview.slideCourses
  const youtubeEPItems = course.data.course_detail.contents.filter((value) => { return value.__component === "components.special-ep-component" })
  return (
    <div className="course-detail">
      <Header />
      <div className="tb-sizer">
        {course.data.course_detail.header && (
          <UpperHeader header={course.data.course_detail.header} />
        )}
        <CourseHeader yearlySubscriptionImage={"/courseDetail/yearly-sucscription-lg.png"}
          yearlySubscriptionImageMobile={"/courseDetail/yearly-sucscription-sm.png"}
          singleCourseImage={"/courseDetail/single-course.jpg"}
          video={""}
          videoPoster={""} />
        {youtubeEPItems.length > 0 && (
          <YoutubeEP YoutubeEPItems={youtubeEPItems} />
        )}
        {course.data.course_detail.speaker_details?.url && (
          <IntroductionPersonal fullName={course.data.course_detail.name}
            personalHistoryImage={strapiImage(course.data.course_detail.speaker_details?.url)} 
            highRatio={course.data.course_detail.speaker_details.height/course.data.course_detail.speaker_details.width}/>
        )}
        {course.data.course_detail.contents.map((value, index) => {
          if (value.__component === "components.topic-component") {
            return (
              <InterestingTopic key={index} interestingTopics={value.topics} />
            )
          }
          if (value.__component === "components.suitable-component") {
            return (
              <Suitable key={index} suitable={value.items} />
            )
          }
        })}
        <EpisodeAccordion totalHours={course.data.course_detail.total_hours}
          totalEpisodes={course.data.course_detail.total_lessons}
          episodes={course.data.episodes} />
      </div>
      <Sale singleCoursePersonalImage={strapiImage(course.data.course_detail.order_image.url)}
        yearlySubscriptionImage={"/courseDetail/yearly-sucscription-lg.png"}
        yearlySubscriptionImageMobile={"/courseDetail/yearly-sucscription-sm.png"}
        singleCheckoutUrl={course.data.course_detail.order_link} />
      <div className="background-light">
        <div className="sizer">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="block-type-text text-center col-12" style={{ padding: "0px", marginTop: "20px" }}>
                <div className="block box-shadow-none">
                  <h2 className="font-md-20" style={{ textAlign: "center" }}>
                    <span style={{ color: "#e74e25" }}>
                      คอร์สอื่น ๆ จาก &quot;ที่สุด&quot; ของประเทศอีกมากมาย
                    </span>
                  </h2>
                </div>
              </div>
              <div className="block-type-code text-left col-12">
                <SlideCourse slideCourses={slideCourses} slideView={4} imageWidth={235} imageHeight={470.533} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background-dark">
        <ReviewStudents />
      </div>
      <FooterBrand />
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const response = await fetch(strapiApi + '/courses');
  const data = await response.json() as ResponseDataList<Course>;
  const dataFilter = (data.data.filter((value) => {
    return value.course_detail
  }))
  const paths = dataFilter.map((value) => {
    return { params: { courseId: value.id.toString() } }
  })
  return {
    paths: paths,
    fallback: false
  };
};

export async function getStaticProps({ params }: { params: CourseDetailParams }) {
  const response = await fetch(strapiApi + `/courses/${params.courseId}`);
  const data = await response.json() as ResponseData<Course>;
  return { props: { course: data } };
}
