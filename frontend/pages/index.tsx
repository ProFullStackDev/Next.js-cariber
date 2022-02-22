import Header from '../components/header';
import Footer from '../components/footer';
import Accordion, { Color } from '../components/accordion';
import Img from '../components/image';
import SlideCourse from '../components/slideCourse';
import FooterBrand from '../components/footerBrand';
import ShopeeReviews from '../components/index/shopeeReviews';
import Specific from '../components/index/specific';
import MyStudent from '../components/index/myStudent';
import CoursesUpdate from '../components/index/coursesUpdate';
import StudentReviews from '../components/studentReviews';
import { ResponseData, ResponseDataList } from '../apiStrapi/models/data';
import { ReviewContent } from '../apiStrapi/models/contentType/review';
import reviewApi from '../apiStrapi/reviewApi';
import homeApi from '../apiStrapi/homeApi';
import { HomeContent } from '../apiStrapi/models/contentType/home';
import { strapiImage } from '../apiStrapi/models/contact';
import VideoPlayer from '../components/videoPlayer';
import { CarouselContent } from '../apiStrapi/models/contentType/carousel';
import carouselApi from '../apiStrapi/carouselApi';

interface IndexProps {
  carousel: ResponseDataList<CarouselContent>;
  home: ResponseData<HomeContent>;
  review: ResponseData<ReviewContent>;
}
  
export default function Index({ carousel, home, review }: IndexProps) {
  return (
    <div className="index">
      <Header />
      <div className="background-dark">
        <div className="sizer">
          <div className="row align-items-center justify-content-center">
            <div className="block-type-image text-center col-8">
              <div className="box-shadow-none">
                <h1>
                  <strong>
                    <span className="color-primary">
                      สูตรความสำเร็จกับ &quot;ที่สุด&quot; ของประเทศ
                    </span>
                  </strong>
                </h1>
                <h4>
                  <em>
                    <strong>
                      <span className="color-primary">
                        คอร์สออนไลน์กับผู้บริหาร ผู้นำทางความคิด แบบที่ไม่เคยมีมาก่อน
                      </span>
                    </strong>
                  </em>
                </h4>
                <br />
                <VideoPlayer videoId={home.data?.video_id} />
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
                        ปีใหม่นี้ยกระดับให้คุณเป็นคนใหม่ เรียนรู้กับ &lsquo;ผู้นำตัวจริง&rsquo; จากทุกวงการ
                        <br />
                        จ่ายครั้งเดียวเข้าชมผู้สอนได้กว่า 50 ท่านตลอดปี 2022
                        <br />
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
                <SlideCourse slideCourses={carousel.data} slideView={2} imageWidth={232.85} imageHeight={425.05} />
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
      carousel: await carouselApi(),
      home: await homeApi(),
      review: await reviewApi(),
    }
  };
}
