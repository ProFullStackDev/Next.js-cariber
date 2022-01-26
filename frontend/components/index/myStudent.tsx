import Img from "../image"
import { MyStudent } from "../static/interface"

export default function Mystudent({ myStudents }: { myStudents: MyStudent[] }) {
  return (
    <div className="row align-items-center justify-content-center">
      <div className="block-type-text text-left col-6">
        <div className="block box-shadow-none" >
          <p className="f-s-36 text-center">
            <strong>
              <span className="color-primary">
                ผู้เรียนของเรา
              </span>
            </strong>
          </p>
        </div>
      </div>
      <div className="block-break"></div>
      {myStudents.map((value, index) => {
        return (
          <div key={index} className="block-type-image col-2 m-r-5">
            <div className="block box-shadow-none">
              <div className="image">
                <Img className="image-image"
                  src={value.image}
                  width={value.width}
                  height={value.height}
                  alt={value.alt}
                />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}