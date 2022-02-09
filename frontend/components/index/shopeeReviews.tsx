import Link from "next/link"
import { ReviewShopeeContent } from "../../apiStrapi/models/contentType/review"
import Img from "../image"

export default function ShopeeReviews({ reviewShopee }: { reviewShopee: ReviewShopeeContent[] }) {
  return (
    <div className="row align-items-start justify-content-between">
      <div className="block-type-feature text-center col-3">
        <div className="block box-shadow-none">
          <div className="feature">
            <Img className="feature-image"
              src="/index/shopee.png"
              width={200}
              height={65.9}
              alt="Shopee Review"
            />
            <div className="feature-text">
              <h5 className="text-center">
                <span className="color-smooth">
                  4.9 stars rating
                </span>
              </h5>
              <h5 className="text-center m-b-30">
                <strong>
                  <span>
                    ⭐️⭐️⭐️⭐️⭐️
                  </span>
                </strong>
              </h5>
              <h5>
                <span className="color-smooth">
                  จากทั้งหมด 207 รีวิวใน Shopee
                </span>
              </h5>
            </div>
            <Link href="/reviews">
              <a className="btn btn-solid btn-small btn-auto m-0">
                คลิกเพื่อดูรีวิวทั้งหมด
              </a>
            </Link>
          </div>
        </div>
      </div>
      {reviewShopee.map((value, index) => {
        return (
          <div key={index} className="block-type-feature text-center col-2">
            <div className="block box-shadow-none">
              <div className="feature">
                <div className="feature-text">
                  <h5 className="text-center">
                    <strong>
                      <span>
                      {"⭐️".repeat(value.ratings)}
                      </span>
                    </strong>
                  </h5>
                  <p className="text-center">
                    <span className="color-smooth">
                      &quot;{value.description}&quot;
                    </span>
                  </p>
                  <h6 className="f-s-16 text-center">
                    <em>
                      <span className="color-smooth">
                        <strong>
                          {value.name}
                        </strong>
                      </span>
                    </em>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}