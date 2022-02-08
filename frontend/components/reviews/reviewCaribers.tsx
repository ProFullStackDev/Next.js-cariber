import { strapiImage } from "../../apiStrapi/models/content";
import { ReviewCariberContent } from "../../apiStrapi/models/contentType/reviewCariber";
import Img from "../image";

export default function ReviewCaribers({ reviewCariber }: { reviewCariber: ReviewCariberContent }) {
  return (
    <div className="block-type-feature text-left col-12">
      <div className="block box-shadow-large background-light">
        <div className="feature">
          <Img className="feature-image"
            src={strapiImage(reviewCariber.attributes.image.data.attributes.url)}
            alt={reviewCariber.attributes.name}
            width={70}
            height={70}
          />
          <div className="feature-text">
            <h4>
              <span className="color-secondary">
                {reviewCariber.attributes.name}
              </span>
            </h4>
            <p>
              <span className="color-primary">
                <em>
                  {reviewCariber.attributes.career}
                </em>
              </span>
            </p>
            <p>
              <br />
              <span className="color-black">
                &quot;
                {reviewCariber.attributes.description}
                &quot;
              </span>
            </p>
            <p>
              <strong>
                <span className="color-primary">
                  Cariber
                </span>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}