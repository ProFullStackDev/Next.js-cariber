export default function UpperHeader({ header }: { header: string }) {
  const headerLocal = header.split(/\r\n|\n\r|\n|\r/)
  return (
    <div className="background-dark">
      <div className="row align-items-center justify-content-center">
        <div className="block-type-text text-left col-12">
          <div className="block box-shadow-none">
            {headerLocal.map((value, index) => {
              if (index <= 0) {
                return (
                  <h1 key={index} style={{ textAlign: "center" }}>
                    <span style={{ color: "#e74e25" }}>
                      <strong>
                        {value}
                      </strong>
                    </span>
                  </h1>
                )
              } else {
                return (
                  <h3 key={index} style={{ textAlign: "center" }}>
                    <span style={{ color: "#fbf5e4" }}>
                      {value}
                    </span>
                  </h3>
                )
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}