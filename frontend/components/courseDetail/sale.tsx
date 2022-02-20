import { useRouter } from "next/router";
import UserManager from "../../auth/userManager";
import Img from "../image";
import Popup from "reactjs-popup"
import { MouseEventHandler, useState, useRef } from "react";
import SwitchSignInSignUp from "../switchSignInSignUp";
import CustomLogin from "../customSignin";


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
  
  const router = useRouter();
  const userManager = new UserManager();
  const [ ispopup, setIsPopup ] = useState(false)
  
  async function insterestCourse(link: string) {
    
    if( userManager.isLoggedIn() ){
      router.push(link)
    } else {
      // popup login
      setIsPopup(true)
      
    }
  }

  async function setCallbackButtonFN(link: string) {
    setIsPopup(false)
    router.push(link)
  }


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
                  <div
                    onClick={()=>insterestCourse(yearlySubscriptionCheckoutUrl)}>
                    <Img id="block-yearly-img"
                      className="feature-image"
                      src={yearlySubscriptionImage}
                      width={623.183}
                      height={400}
                      alt="Cariber Yearly Subscription"
                    />
                  </div>
                  <div className="btn btn-medium btn-solid btn-auto background-dark"
                    onClick={()=>insterestCourse(yearlySubscriptionCheckoutUrl)}
                    id="block-yearly-button">
                    ซื้อแพ็กเกจรายปี
                  </div>
                </div>
              </div>
              <div className="block box-shadow-none lg-none">
                <div id="yearlybanner" className="feature column-center">
                  <a onClick={()=>insterestCourse(yearlySubscriptionCheckoutUrl)}>
                    <Img id="block-yearly-img"
                      className="feature-image"
                      src={yearlySubscriptionImageMobile}
                      width={400}
                      height={400}
                      alt="Cariber Yearly Subscription"
                    />
                  </a>
                  <a className="btn btn-medium btn-solid btn-auto background-dark"
                    href={yearlySubscriptionCheckoutUrl}
                    onClick={()=>insterestCourse(yearlySubscriptionCheckoutUrl)}
                    id="block-yearly-button">
                      
                    ซื้อแพ็กเกจรายปี
                  </a>
                </div>
              </div>
            </div>
            <div className="block-type-code text-left col-4">
              <div className="block box-shadow-none">
                <div id="singlebanner" className="feature column-center">
                  <a onClick={()=>insterestCourse(singleCheckoutUrl)}>
                    <Img id="block-single-img"
                      src={singleCoursePersonalImage}
                      className="feature-image"
                      width={400}
                      height={400}
                      alt="Cariber Single Subscription"
                    />
                  </a>
                  <a id="block-single-button"
                    className="btn btn-medium btn-solid btn-auto background-dark"
                    onClick={()=>insterestCourse(singleCheckoutUrl)}>
                    ซื้อเฉพาะคอร์สนี้
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Popup className="popup-auth"
            open={ispopup}
            modal
            onClose={()=>setIsPopup(false)}
            closeOnDocumentClick={false}>
            {(close: MouseEventHandler<HTMLButtonElement>) => {
              return (
                <div className="pop-modal">
                  <button className="close" onClick={close}>
                    <p>
                      &times;
                    </p>
                  </button>
                  <CustomLogin path={yearlySubscriptionCheckoutUrl} callbackButton={setCallbackButtonFN} />
                </div>
              )
            }}
          </Popup>
        </div>
      </div>
    </div>
  )
}
