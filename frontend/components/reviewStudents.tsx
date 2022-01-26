import Img from "./image"
import * as staticDataReview from "./static/review"

export default function ReviewStudents() {
  const reviews = staticDataReview.reviewsCariberFirst

  return (
    <div className="sizer reviewStudents p-t-20">
      <div className="container">
        <div className="row align-items-start justify-content-between">
          <div className="block-type-text text-left col-12">
            <div className="block box-shadow-none">
              <h2 className="text-center">
                <strong>
                  <span className="color-primary">
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
                      <p className="text-center">
                        <span className="color-smooth">
                          &quot;{value.review}&quot;
                        </span>
                      </p>
                      <h4>
                        <span className="color-secondary">
                          {value.name}
                        </span>
                      </h4>
                      <span className="color-primary">
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