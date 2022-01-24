import { strapiImage } from "../../models/content"
import { Topics } from "../../models/courses"
import Img from "../image"

export default function InterestingTopic({ interestingTopics }: { interestingTopics: Topics[] }) {
  return (
    <div className="background-dark">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="block-type-text text-center col-6">
            <div className="block box-shadow-none">
              <p style={{ fontSize: "24px", textAlign: "center" }}>
                <strong>
                  <span style={{ color: "#ed9081" }}>
                    หัวข้อที่น่าสนใจ
                  </span>
                </strong>
              </p>
            </div>
          </div>
          <div className="block-break"></div>
          {interestingTopics.map((value, index) => {
            return (
              <div key={index} className="block-type-feature text-center col-2">
                <div className="block box-shadow-none">
                  <div className="feature">
                    <Img className="feature-image"
                      src={strapiImage(value.image.url)}
                      width={50}
                      height={50}
                      alt={value.label}
                    />
                    <div className="feature-text">
                      <p style={{ fontSize: "14px", textAlign: "center" }}>
                        <strong>
                          <span style={{ color: "#fbf5e4" }}>
                            {value.label}
                          </span>
                        </strong>
                      </p>
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