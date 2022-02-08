import { strapiImage } from "../apiStrapi/models/content"
import { ReviewStudentContent } from "../apiStrapi/models/contentType/reviewStudent"
import { ResponseDataList } from "../apiStrapi/models/data"
import Img from "./image"

export default function ReviewStudents({ reviewStudents }: { reviewStudents: ResponseDataList<ReviewStudentContent> }) {
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
          {reviewStudents.data?.map((value, index) => {
            return (
              <div key={index} className="block-type-feature text-center col-2">
                <div className="block box-shadow-none">
                  <div className="feature">
                    <Img className="feature-image"
                      src={strapiImage(value.attributes.image.data.attributes.url)}
                      width={175}
                      height={185.917}
                      alt={value.attributes.name}
                    />
                    <div className="feature-text">
                      <p className="text-center">
                        <span className="color-smooth">
                          &quot;{value.attributes.description}&quot;
                        </span>
                      </p>
                      <h4>
                        <span className="color-secondary">
                          {value.attributes.name}
                        </span>
                      </h4>
                      <span className="color-primary">
                        <em>
                          {value.attributes.career}
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