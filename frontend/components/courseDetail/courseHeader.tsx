import Img from "../image";
import ImagePartialLogin from "../imagePartialLogin";
import VideoPlayer from "../videoPlayer";

export interface CourseDetailCourseHeaderProps {
  yearlySubscriptionImage: string;
  yearlySubscriptionCheckoutUrl: string;
  yearlySubscriptionImageMobile: string,
  singleCourseImage: string;
  videoId: string;
  videoPoster: string;
  singleCheckoutUrl: string;
}

export default function CourseHeader({ yearlySubscriptionImage,
  yearlySubscriptionImageMobile,
  yearlySubscriptionCheckoutUrl,
  singleCourseImage,
  videoId,
  singleCheckoutUrl,
  videoPoster }: CourseDetailCourseHeaderProps) {
  return (
    <div className="background-dark">
      <div className="sizer p-t-0">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="block-type-code text-left col-3 sm-none p-0">
              <div className="block box-shadow-none">
                <div className="image">
                  <ImagePartialLogin
                    url={yearlySubscriptionCheckoutUrl}
                    src={yearlySubscriptionImage}
                    width={384.6}
                    height={246.85}
                    alt={"Cariber Yearly Subscription"} />
                </div>
                <div className="image">
                  <ImagePartialLogin
                    url={singleCheckoutUrl}
                    src={singleCourseImage}
                    width={384.6}
                    height={246.85}
                    alt={"Cariber Single Subscription"} />
                </div>
              </div>
            </div>
            <div className="block-type-video col-8">
              <div className="block box-shadow-none">
                <div className="video">
                  <VideoPlayer videoId={videoId} thumbnailImage={videoPoster} />
                </div>
              </div>
            </div>
            <div className="block-type-video col-8 lg-none">
              <div className="block box-shadow-none">
                <div className="image text-center column-center">
                  <a href={yearlySubscriptionCheckoutUrl}>
                    <Img className="feature-image"
                      src={yearlySubscriptionImageMobile}
                      width={400}
                      height={400}
                      alt="Cariber Yearly Subscription"
                    />
                  </a>
                  <a className="btn btn-medium btn-solid btn-auto background-dark" href={yearlySubscriptionCheckoutUrl} >
                    ซื้อแพ็กเกจรายปี
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}