import Link from "next/link"
import Img from "../image"
import { ShopeeReview } from "../static/interface"

export default function ShopeeReviews({ shopeeReviews }: { shopeeReviews: ShopeeReview[] }) {
  return (
    <div className="row align-items-start justify-content-between">
      <div className="block-type-feature text-center col-3">
        <div className="block box-shadow-none">
          <div className="feature">
            <Img className="feature-image"
              src="/index/shopee.png"
              alt="Shopee Review"
              width={200}
              height={65.9}
            />
            <div className="feature-text">
              <h5 style={{ textAlign: "center" }}>
                <span style={{ color: "#fbf5e4" }}>
                  4.9 stars rating
                </span>
              </h5>
              <h5 style={{ textAlign: "center", marginBottom: "30px" }}>
                <strong>
                  <span style={{ color: "#0e1b20" }}>
                    ⭐️⭐️⭐️⭐️⭐️
                  </span>
                </strong>
              </h5>
              <h5>
                <span style={{ color: "#e74e25" }}>
                  จากทั้งหมด 207 รีวิวใน Shopee
                </span>
              </h5>
            </div>
            <Link href="/review">
              <a className="btn btn-solid btn-small btn-auto" style={{ margin: "0px" }}>
                คลิกเพื่อดูรีวิวทั้งหมด
              </a>
            </Link>
          </div>
        </div>
      </div>
      {shopeeReviews.map((value, index) => {
        return (
          <div key={index} className="block-type-feature text-center col-2">
            <div className="block box-shadow-none">
              <div className="feature">
                <div className="feature-text">
                  <h5 style={{ textAlign: "center" }}>
                    <strong>
                      <span style={{ color: "#0e1b20" }}>
                        {value.rating}
                      </span>
                    </strong>
                  </h5>
                  <p style={{ textAlign: "center" }}>
                    <span style={{ color: "#fbf5e4" }}>
                      &quot;{value.review}&quot;
                    </span>
                  </p>
                  <h6 style={{ textAlign: "center", fontSize: "16px" }}>
                    <em>
                      <span style={{ color: "#e74e25" }}>
                        <strong>
                          {value.name}
                        </strong>
                      </span>
                    </em>
                    <br />
                    <em>
                      <span style={{ color: "#e74e25" }}>
                        <strong>
                          {value.date}
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