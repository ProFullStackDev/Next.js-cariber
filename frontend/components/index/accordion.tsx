import { MouseEventHandler, useState } from "react";

export default function Accordion({ title, description }: { title?: string, description?: string[] }) {
  const [displayDescription, setDisplayDescription] = useState("none");

  function switchDisplay() {
    displayDescription == "none" ? setDisplayDescription("block") : setDisplayDescription("none")
    console.log(displayDescription)
  }

  return (
    <div className="block-type-accordion text-left col-8" onClick={switchDisplay}>
      <div className="qa-block box-shadow-medium background-white">
        <div className="accordion">
          <div className="accordion-title media align-items-center collapsed">
            <h5 className="media-body" style={{ fontSize: "18px" }}>
              {title}
            </h5>
            {displayDescription == "none" ?
              (<i className="fas fa-chevron-right" style={{ color: "#e74e25 " }}></i>) :
              (<i className="fas fa-chevron-down" style={{ color: "#e74e25 " }}></i>)}
          </div>
          <div className="accordion-collapse" style={{ display: displayDescription }}>
            <div className="accordion-body">
              {
                description?.map((value, index) => {
                  return (
                    <h6 key={index}>
                      <span style={{ fontWeight: "400", fontSize: "16px" }}>
                        {value}
                      </span>
                      <br />
                    </h6>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}