import Footer from "../components/footer"
import FooterBrand from "../components/footerBrand"
import Header from "../components/header"
import ReviewStudents from "../components/reviewStudents"
import SlideCourse from "../components/slideCourse"
import * as staticDataReview from "../components/static/review"
import * as staticData from "../components/static/courseDetail"
import { CourseDetailInterestingTopic, CardDescription } from "../components/static/interface"
import IntroductionPersonal from "../components/courseDetail/introductionPersonal"
import EpisodeAccordion from "../components/courseDetail/EpisodeAccordion"
import InterestingTopic from "../components/courseDetail/interestingTopic"
import Suitable from "../components/courseDetail/suitable"
import CourseHeader from "../components/courseDetail/courseHeader"
import Sale from "../components/courseDetail/sale"

export interface CourseDetailData {
  yearlySubscriptionImage: string,
  yearlySubscriptionImageMobile: string,
  singleCourseImage: string,
  video: string,
  videoPoster: string,
  fullName: string,
  personalHistoryImage: string,
  interestingTopics: CourseDetailInterestingTopic[],
  suitableFor: string[],
  totalHours: string,
  totalEpisodes: string,
  episodes: CardDescription[],
  singleCoursePersonalImage: string
}

export default function CourseDetail() {
  const slideCourses = staticDataReview.slideCourses
  const courseData: CourseDetailData = {
    yearlySubscriptionImage: "/courseDetail/yearly-subscription.jpg",
    yearlySubscriptionImageMobile: "/courseDetail/yearly-subscription-mobile.jpg",
    singleCourseImage: "/courseDetail/single-courese.jpg",
    video: "/courseDetail/kiatisuk-senamuang-videos.mp4",
    videoPoster: "/courseDetail/poster.jpg",
    fullName: "เกียรติศักดิ์ เสนาเมือง",
    personalHistoryImage: "/courseDetail/information.jpg",
    interestingTopics: staticData.interestingTopics,
    suitableFor: staticData.suitable,
    totalHours: "1:51",
    totalEpisodes: "9",
    episodes: staticData.episodes,
    singleCoursePersonalImage: "/courseDetail/singlebanner.jpg"
  }

  return (
    <div className="course-detail">
      <Header />
      <div className="tb-sizer">
        <CourseHeader yearlySubscriptionImage={courseData.yearlySubscriptionImage}
                      yearlySubscriptionImageMobile={courseData.yearlySubscriptionImageMobile}
                      singleCourseImage={courseData.singleCourseImage}
                      video={courseData.video}
                      videoPoster={courseData.videoPoster} />
        <IntroductionPersonal fullName={courseData.fullName}
                              personalHistoryImage={courseData.personalHistoryImage} />
        <InterestingTopic interestingTopics={courseData.interestingTopics} />
        <Suitable suitables={courseData.suitableFor} />
        <EpisodeAccordion totalHours={courseData.totalHours}
                 totalEpisodes={courseData.totalEpisodes}
                 episodes={courseData.episodes} />
      </div>
      <Sale singleCoursePersonalImage={courseData.singleCoursePersonalImage}
            yearlySubscriptionImage={courseData.yearlySubscriptionImage}
            yearlySubscriptionImageMobile={courseData.yearlySubscriptionImageMobile} />
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