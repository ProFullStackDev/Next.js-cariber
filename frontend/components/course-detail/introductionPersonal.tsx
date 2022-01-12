import Img from "../image";
import { IntroductionPersonalCourse } from "../static/interface"

export default function IntroductionPersonal({ fullName, personalHistoryImage }: IntroductionPersonalCourse) {
  return (
    <div className="background-dark">
      <div className="row align-items-center justify-content-center">
        <div className="block-type-text text-left col-11">
          <div className="block box-shadow-none">
            <h3 style={{ textAlign: "center", margin: "0px" }}>
              <span style={{ color: "#ed9081" }}>
                <strong>
                  รู้จักคุณ{fullName}
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
                width={995.6}
                height={667.75}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}