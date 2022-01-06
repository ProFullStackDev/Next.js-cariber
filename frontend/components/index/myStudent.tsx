import Img from "../image"
import { MyStudent } from "../static/interface"

export default function Mystudent({ myStudents }: { myStudents: MyStudent[] }) {
  return (
    <div className="row align-items-center justify-content-center">
      <div className="block-type-text text-left col-6">
        <div className="block box-shadow-none" >
          <p style={{ fontSize: "36px", textAlign: "center" }}>
            <strong>
              <span style={{ color: "#e74e25" }}>
                ผู้เรียนของเรา
              </span>
            </strong>
          </p>
        </div>
      </div>
      <div className="block-break"></div>
      {myStudents.map((value, index) => {
        return (
          <div key={index} className="block-type-image col-2" style={{ marginRight: "5px" }}>
            <div className="block box-shadow-none">
              <div className="image">
                <Img className="image-image"
                  src={value.image}
                  alt={value.alt}
                  width={value.width}
                  height={value.height}
                />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}