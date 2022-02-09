import { strapiImage } from "../../apiStrapi/models/content";
import { Information } from "../../apiStrapi/models/contentType/home";
import Img from "../image";

export default function Specific({ specifics }: { specifics: Information[] }) {
  console.log(specifics)
  return (
    <div className="row align-items-center justify-content-center text-center">
      {specifics.map((value, index) => {
        return (
          <div className="col-4 row" key={index}>
            <div className="block-type-image col-4 p-0">
              <div className="block box-shadow-none">
                <div className="image">
                  <Img className="image-image"
                    src={strapiImage(value.image.url)}
                    width={70.0333}
                    height={70.0333}
                    alt={value.description}
                  />
                </div>
              </div>
            </div>
            <div className="block-type-text text-left col-8 p-0">
              <div className="block box-shadow-none">
                <h5>
                  <span>
                    กว่า 168 บทเรียน
                  </span>
                </h5>
                <h5>
                  <span>
                    จากผู้เชี่ยวชาญ
                  </span>
                </h5>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}