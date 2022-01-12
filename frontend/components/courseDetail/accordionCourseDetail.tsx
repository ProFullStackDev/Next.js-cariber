import { useState } from "react";

export default function AccordionCourseDetail({ title, description }: { title: string, description: string[] }) {
  const [displayDescription, setDisplayDescription] = useState("none");

  function switchDisplay() {
    displayDescription === "none" ? setDisplayDescription("block") : setDisplayDescription("none")
  }

  return (
    <div className="block-type-accordion text-left col-4" onClick={switchDisplay}>
      <div className="accordion-frame box-shadow-medium" style={{ backgroundColor: "#243941", borderRadius: "4px" }}>
        <div className="accordion">
          <div className="accordion-title media align-items-center collapsed">
            <h5 className="media-body" style={{fontSize: "16px"}}>
              {title}
            </h5>
            {displayDescription === "none" ?
              (<i className="fas fa-chevron-right"></i>) :
              (<i className="fas fa-chevron-down"></i>)}
          </div>
          <div className="accordion-collapse" style={{ display: displayDescription }}>
            <div className="accordion-body">
              {
                description?.map((value, index) => {
                  return (
                    <h5 key={index} style={{fontSize: "14px"}}>
                      <span style={{ fontWeight: "400" }}>
                        {value}
                      </span>
                      <br />
                    </h5>
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