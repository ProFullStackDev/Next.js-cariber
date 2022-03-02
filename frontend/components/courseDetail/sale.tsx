import ImagePartialLogin from "../imagePartialLogin";
import ButtonPartialLogin from "../buttonPartialLogin";

export interface CourseDetailSaleProps {
  yearlySubscriptionImage: string,
  yearlySubscriptionCheckoutUrl: string;
  yearlySubscriptionImageMobile: string,
  singleCoursePersonalImage: string,
  singleCheckoutUrl: string,
}

export default function Sale({ yearlySubscriptionImage,
  yearlySubscriptionCheckoutUrl,
  yearlySubscriptionImageMobile,
  singleCoursePersonalImage,
  singleCheckoutUrl }: CourseDetailSaleProps) {

  return (
    <div className="background-light">
      <div className="sizer p-b-0">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="block-type-text text-left col-12">
              <div className="block box-shadow-none">
                <h2 className="text-center">
                  <span className="color-primary">ปีใหม่นี้ยกระดับให้คุณเป็นคนใหม่ เรียนรู้กับ &lsquo;ผู้นำตัวจริง&rsquo; จากทุกวงการ
                    <br />
                    แพ็กเกจรายปี ที่คุณจ่ายครั้งเดียว เข้าชมผู้สอนได้ทุกท่าน
                  </span>
                </h2>
              </div>
            </div>
            <div className="block-type-code text-left col-7">
              <div className="block box-shadow-none sm-none">
                <div id="yearlybanner" className="feature column-center text-center">
                  <ImagePartialLogin
                    url={yearlySubscriptionCheckoutUrl}
                    src={yearlySubscriptionImage}
                    width={623.183}
                    height={400}
                    alt={"Cariber Yearly Subscription"} />
                  <ButtonPartialLogin
                  text={'ซื้อแพ็คเกจรายปี'}
                    class="btn btn-medium btn-solid btn-auto background-dark"
                    url={yearlySubscriptionCheckoutUrl} />
                </div>
              </div>
              <div className="block box-shadow-none lg-none">
                <div id="yearlybanner" className="feature column-center">
                  <ImagePartialLogin
                    url={yearlySubscriptionCheckoutUrl}
                    src={yearlySubscriptionImageMobile}
                    width={400}
                    height={400}
                    alt={"Cariber Yearly Subscription"} />
                  <ButtonPartialLogin
                  text={'ซื้อแพ็คเกจรายปี'}
                    class="btn btn-medium btn-solid btn-auto background-dark"
                    url={yearlySubscriptionCheckoutUrl} />
                </div>
              </div>
            </div>
            <div className="block-type-code text-left col-4">
              <div className="block box-shadow-none">
                <div id="singlebanner" className="feature column-center">
                  <ImagePartialLogin
                    url={singleCheckoutUrl}
                    src={singleCoursePersonalImage}
                    width={400}
                    height={400}
                    alt={"Cariber Yearly Subscription"} />
                  <ButtonPartialLogin
                    class="btn btn-medium btn-solid btn-auto background-dark"
                    text={'ซื้อเฉพาะคอร์สนี้'}
                    url={singleCheckoutUrl} /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
