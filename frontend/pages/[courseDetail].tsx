import Footer from "../components/footer"
import FooterBrand from "../components/footerBrand"
import Header from "../components/header"
import ReviewStudents from "../components/reviewStudents"
import SlideCourse from "../components/slideCourse"
import * as staticDataReview from "../components/static/review"
import * as staticData from "../components/static/course"
import { InterestingTopicCourse, CardDescription } from "../components/static/interface"
import IntroductionPersonal from "../components/course-detail/introductionPersonal"
import Episode from "../components/course-detail/episode"
import InterestingTopic from "../components/course-detail/interestingTopic"
import Suitable from "../components/course-detail/suitable"
import CourseHeader from "../components/course-detail/courseHeader"

export interface CourseDetailData {
  yearlySubscriptionImage: string,
  yearlySubscriptionImageMobile: string,
  singleCourseImage: string,
  video: string,
  videoPoster: string,
  fullName: string,
  personalHistoryImage: string,
  interestingTopics: InterestingTopicCourse[],
  suitableFor: string[],
  totalHours: string,
  totalEpisodes: string,
  episodes: CardDescription[],
  singleCoursePersonalImage: string
}

export default function CourseDetail() {
  const slideCourses = staticDataReview.slideCourses
  const courseData: CourseDetailData = {
    yearlySubscriptionImage: "/course/yearly-subscription.jpg",
    yearlySubscriptionImageMobile: "/course/yearly-subscription-mobile.jpg",
    singleCourseImage: "/course/single-courese.jpg",
    video: "/index/cariber-video.mp4",
    videoPoster: "/course/poster.jpg",
    fullName: "เกียรติศักดิ์ เสนาเมือง",
    personalHistoryImage: "/course/information.jpg",
    interestingTopics: staticData.interestingTopics,
    suitableFor: staticData.suitable,
    totalHours: "1:51",
    totalEpisodes: "9",
    episodes: staticData.episodes,
    singleCoursePersonalImage: "/course/singlebanner.jpg"
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
        <IntroductionPersonal
          fullName={courseData.fullName}
          personalHistoryImage={courseData.personalHistoryImage} />
        <InterestingTopic interestingTopics={courseData.interestingTopics} />
        <Suitable suitables={courseData.suitableFor} />
        <Episode totalHours={courseData.totalHours}
          totalEpisodes={courseData.totalEpisodes}
          episodes={courseData.episodes} />
      </div>
      <div className="background-light">
        <div className="sizer">
          <div className="container">
            <div className="row align-items-center justify-content-center">
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