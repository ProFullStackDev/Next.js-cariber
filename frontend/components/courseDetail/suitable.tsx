import { Item } from "../../models/courses"

export default function Suitable({ suitable }: { suitable: Item[] }) {
  const halfLine = 60
  return (
    <div className="background-dark">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="block-type-text text-left col-6">
            <div className="block box-shadow-none">
              <p style={{ fontSize: "26px", textAlign: "center" }}>
                <span style={{ color: "#ed9081" }}>
                  <strong>
                    คอร์สนี้เหมาะสำหรับ
                  </strong>
                </span>
              </p>
            </div>
          </div>
          <div className="block-type-text text-left col-10">
            <div className="block box-shadow-none row">
              {suitable.map((value) => {
                if(value.label){
                  return (
                    <h6 key={`suitable-id-${value.id}`}
                      className={`${value.label.length <= halfLine && "col-6"} ${value.label.length > halfLine && "col-12"}`}
                      style={{ padding: "7px 0px 7px 30px" }}>
                      <strong>
                        <span style={{ color: "#ed9081" }}>
                          ✓ &nbsp;
                        </span>
                        <span style={{ color: "#fbf5e4" }}>
                          {value.label}
                        </span>
                      </strong>
                    </h6>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}