import Img from "./image"
import * as staticDataReview from "./static/review"

export default function ReviewStudents() {
  const reviews = staticDataReview.reviewsCariberFirst

  return (
    <div className="sizer reviewStudents" style={{ paddingTop: "20px" }}>
      <div className="container">
        <div className="row align-items-start justify-content-between">
          <div className="block-type-text text-left col-12">
            <div className="block box-shadow-none">
              <h2 style={{ textAlign: "center" }}>
                <strong>
                  <span style={{ color: "#e74e25" }}>
                    รีวิวจากผู้เรียน
                  </span>
                </strong>
              </h2>
            </div>
          </div>
          {reviews.map((value, index) => {
            return (
              <div key={index} className="block-type-feature text-center col-2">
                <div className="block box-shadow-none">
                  <div className="feature">
                    <Img className="feature-image"
                      src={value.image}
                      width={175}
                      height={185.917}
                      alt={value.name}
                    />
                    <div className="feature-text">
                      <p style={{ textAlign: "center" }}>
                        <span style={{ color: "#fbf5e4" }}>
                          &quot;{value.review}&quot;
                        </span>
                      </p>
                      <h4>
                        <span style={{ color: "#ed9081" }}>
                          {value.name}
                        </span>
                      </h4>
                      <span style={{ color: "#e74e25" }}>
                        <em>
                          {value.career}
                        </em>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}