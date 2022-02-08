import { ReviewShopeeContent } from "../../apiStrapi/models/contentType/reviewShopee";

export default function ReviewShopee({ reviewShopee }: { reviewShopee: ReviewShopeeContent }) {
  return (
    <div className="block-type-feature text-left col-12">
      <div className="block box-shadow-large background-light">
        <div className="feature">
          <div className="feature-text">
            <h4>
              <span className="color-secondary">
                {reviewShopee.attributes.name}
              </span>
            </h4>
            <p className="m-0">
              <strong>
                <span className="color-black">
                  Ratings : {"⭐️".repeat(reviewShopee.attributes.ratings)}
                </span>
              </strong>
            </p>
            <p>
              <br />
              <span className="color-black">
                &quot;
                {reviewShopee.attributes.description}
                &quot;
              </span>
            </p>
            <p>
              <strong>
                <span className="color-primary">
                  Shopee
                </span>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}