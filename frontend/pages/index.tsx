import Header from '../components/header'
import Footer from '../components/footer'
import Accordion, { Color } from '../components/accordion'
import Img from '../components/image'
import SlideCourse from '../components/slideCourse'
import * as staticDataReview from "../components/static/review"
import FooterBrand from '../components/footerBrand'
import ShopeeReviews from '../components/index/shopeeReviews'
import Specific from '../components/index/specific'
import MyStudent from '../components/index/myStudent'
import CoursesUpdate from '../components/index/coursesUpdate'
import StudentReviews from '../components/studentReviews'
import { ResponseData } from '../apiStrapi/models/data'
import { ReviewContent } from '../apiStrapi/models/contentType/review'
import reviewApi from '../apiStrapi/reviewApi'
import homeApi from '../apiStrapi/homeApi'
import { HomeContent } from '../apiStrapi/models/contentType/home'
import { strapiImage } from '../apiStrapi/models/contact'
import VideoPlayer from '../components/videoPlayer'

interface IndexProps {
  home: ResponseData<HomeContent>;
  review: ResponseData<ReviewContent>;
}

export default function Index({ home, review }: IndexProps) {
  const slideCourses = staticDataReview.slideCourses

  return (
    <div className="index">
      <Header />
      <VideoPlayer videoId={'ba36e29c18b8c21b53589a403cd5b09b'}></VideoPlayer>
      <div className="background-dark">
        <div className="sizer">
          <div className="row align-items-center justify-content-center">
            <div className="block-type-image text-center col-12">
              <div className="block box-shadow-none">
                <div className="image">
                  <Img className="image-image"
                    src={strapiImage(home.data?.header_image?.url)}
                    alt="ผู้นำตัวจริง"
                    width={855.733}
                    height={434.817}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background-light">
        <div className="sizer">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="block-type-text text-left col-12">
                <div className="block box-shadow-none">
                  <h2 className="text-center">
                    <strong>
                      <span className="color-primary">
                        ปีใหม่นี้ยกระดับให้คุณเป็นคนใหม่ เรียนรู้กับ &lsquo;ผู้นำตัวจริง&rsquo; จากทุกวงการ<br />
                        แพ็กเกจรายปี ที่คุณจ่ายครั้งเดียว เข้าชมผู้สอนได้ทุกท่าน<br />
                      </span>
                    </strong>
                  </h2>
                </div>
              </div>
              <div className="block-type-feature text-center col-5">
                <div className="block box-shadow-none">
                  <div className="feature column-center">
                    <a href={home.data?.promotions?.url}>
                      <Img className="feature-image"
                        src={strapiImage(home.data?.promotions?.high_yearly_sub?.url)}
                        width={400}
                        height={400}
                        alt="Yearly Subscription"
                      />
                    </a>
                    <a className="btn btn-solid btn-medium btn-auto" href={home.data?.promotions?.url}>
                      สมัครเลย
                    </a>
                  </div>
                </div>
              </div>
              <div className="block-type-code text-left col-6">
                <SlideCourse slideCourses={slideCourses} slideView={2} imageWidth={232.85} imageHeight={425.05} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background-dark">
        <div className="sizer">
          <div className="container">
            <Specific specifics={home.data?.information} />
          </div>
        </div>
      </div>
      <div className="background-light">
        <div className="sizer">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="block-type-text text-center col-3">
                <div className="block box-shadow-none column-center">
                  <p className="f-s-30">
                    <strong>
                      <span className="color-primary">
                        สูตรความสำเร็จกับ
                        <br />
                        &quot;ที่สุด&quot; ของประเทศ
                      </span>
                    </strong>
                  </p>
                  <p className="f-s-20">
                    <em>
                      <strong>
                        <span className="color-primary">
                          คอร์สออนไลน์กับผู้บริหาร ผู้นำทางความคิด แบบที่ไม่เคยมีมาก่อน
                        </span>
                      </strong>
                    </em>
                  </p>
                  <a href={home.data?.promotions?.url}>
                    <Img className="feature-image"
                      src={strapiImage(home.data?.promotions?.large_yearly_sub?.url)}
                      width={329.6}
                      height={211.55}
                      alt="Yearly Subscription"
                    />
                  </a>
                  <a className="btn btn-solid btn-medium btn-auto" href={home.data?.promotions?.url}>
                    ซื้อแพ็กเกจรายปี
                  </a>
                </div>
              </div>
              <div className="block-type-video col-7">
                <div className="block box-shadow-none">
                  <VideoPlayer videoId={home.data?.video_id} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sizer">
          <div className="container">
            <CoursesUpdate coursesSoon={home.data?.courses_soon} coursesLatest={home.data?.courses_latest} />
          </div>
        </div>
      </div>
      <div className="background-dark">
        <StudentReviews reviewStudents={review?.data?.student} />
        <div className="sizer p-t-20">
          <div className="container">
            <ShopeeReviews shopeeInfo={home.data?.shopee_info} shopee={home.data?.shopee} />
          </div>
        </div>
      </div>
      <div className="sizer background-light">
        <div className="container">
          <MyStudent myStudents={home.data?.my_student} />
        </div>
      </div>
      <div className="sizer background-light">
        <div className="container">
          <div className="row align-items-start justify-content-center">
            <div className="block-type-text text-left col-8">
              <div className="block box-shadow-none">
                <h2 className="text-center">
                  <span className="color-primary">
                    คำถามที่พบบ่อย
                  </span>
                </h2>
              </div>
            </div>
            {home.data?.q_and_a?.map((value, index) => {
              return (
                <Accordion key={index} title={value.title} description={value.description} col={8} color={Color.light} />
              )
            })}
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
      home: await homeApi(),
      review: await reviewApi(),
    }
  };
}
