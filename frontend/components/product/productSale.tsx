import { MouseEventHandler } from "react"
import Popup from "reactjs-popup"
import ButtonPartialLogin from "../buttonPartialLogin"
import Img from "../image"
import ImagePartialLogin from "../imagePartialLogin"

export default function ProductSale({
  owned,
  yearlySubscripted,
}: {
  owned: boolean,
  yearlySubscripted: boolean,
}) {
  return (
    <Popup className="popup-product-sale"
      trigger={
        <button className="btn btn-not-focus btn-small m-t-0">
          ซื้อคอร์สนี้
        </button>
      }
      modal
      closeOnDocumentClick={false}>
      {(close: MouseEventHandler<HTMLButtonElement>) => {
        return (
          <div className="pop-modal">
            <button className="close" onClick={close}>
              <p>
                &times;
              </p>
            </button>
            <div className="block-type-form text-center">
              <div className="block box-shadow-none">
                <h3>
                  สนใจคอร์สเรียนของเราแล้วใช่ไหม?
                </h3>
                <h6>
                  กรุณาเลือกแพ็คเกจที่คุณต้องการ
                </h6>
                {!owned &&
                  <div id="singlebanner" className="feature column-center text-center m-b-40">
                    <ImagePartialLogin
                      sku={""}
                      src={"/courseDetail/single-course.jpg"}
                      width={623.183}
                      height={400}
                      alt={"Cariber single Subscription"} />
                    <ButtonPartialLogin
                      sku={""}
                      class={"btn btn-not-focus btn-small m-t-10"}
                      text={"ซื้อเฉพาะคอร์สนี้"} />
                  </div>
                }
                {!yearlySubscripted &&
                  <div id="yearlybanner" className="feature column-center text-center m-b-20">
                    <ImagePartialLogin
                      sku={""}
                      src={"/courseDetail/yearly-sucscription-lg.png"}
                      width={623.183}
                      height={400}
                      alt={"Cariber Yearly Subscription"} />
                    <ButtonPartialLogin
                      sku={""}
                      class={"btn btn-small m-t-10"}
                      text={"ซื้อแพ็คเกจรายปี"} />
                  </div>
                }
                {yearlySubscripted &&
                  <div id="yearlybanner" className="feature column-center text-center m-b-20">
                    <ImagePartialLogin
                      sku={""}
                      src={"/courseDetail/yearly-sucscription-lg.png"}
                      width={623.183}
                      height={400}
                      alt={"Cariber Yearly Subscription"} />
                    <ButtonPartialLogin
                      sku={""}
                      class={"btn btn-small m-t-10"}
                      text={"ต่อสมาชิกแพ็คเกจรายปี"} />
                  </div>
                }
              </div>
            </div>
          </div>
        )
      }}
    </Popup>
  )
}