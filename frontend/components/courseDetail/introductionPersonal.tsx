import Img from "../image";
import { CourseDetailIntroductionPersonal } from "../static/interface"

export default function IntroductionPersonal({ fullName, personalHistoryImage }: CourseDetailIntroductionPersonal) {
  return (
    <div className="background-dark">
      <div className="row align-items-center justify-content-center">
        <div className="block-type-text text-left col-11">
          <div className="block box-shadow-none">
            <h3 style={{ textAlign: "center", margin: "0px" }}>
              <span style={{ color: "#ed9081" }}>
                <strong>
                  รู้จัก{fullName}
                </strong>
              </span>
            </h3>
          </div>
        </div>
        <div className="block-type-image text-center col-11">
          <div className="block box-shadow-none">
            <div className="image">
              <Img className="image-image"
                src={personalHistoryImage}
                width={900}
                height={761.9097}
                alt={fullName}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}