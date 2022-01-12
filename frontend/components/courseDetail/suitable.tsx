export default function Suitable({ suitables }: { suitables: string[] }) {
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
            <div className="block box-shadow-none">
              {suitables.map((value, index) => {
                return (
                  <h6 key={index} style={{ textAlign: "left", paddingLeft: "30px", fontWeight: "normal" }}>
                    <strong>
                      <span style={{ color: "#ed9081" }}>
                        ✓ &nbsp;
                      </span>
                      <span style={{ color: "#fbf5e4" }}>
                        {value}
                      </span>
                    </strong>
                  </h6>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}