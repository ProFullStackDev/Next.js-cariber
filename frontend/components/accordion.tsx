import { useState } from "react";

export enum Color {
  light = "light",
  dark = "dark"
}

interface AccordionProps {
  title: string,
  description: string[] | string,
  col: number,
  color: Color
}

export default function Accordion({ title, description, col, color }: AccordionProps) {
  const [displayDescription, setDisplayDescription] = useState("d-none");
  function switchDisplay() {
    displayDescription === "d-none" ? setDisplayDescription("d-block") : setDisplayDescription("d-none")
  }

  return (
    <div className={`accordion block-type-accordion text-left col-${col}`} onClick={switchDisplay}>
      <div className={`accordion-frame box-shadow-medium ${color}`}>
        <div className="accordion">
          <div className="accordion-title media align-items-center collapsed">
            <h5 className="media-body f-s-16">
              {title}
            </h5>
            {displayDescription === "d-none" ?
              (<i className="fas fa-chevron-right"></i>) :
              (<i className="fas fa-chevron-down"></i>)}
          </div>
          <div className={`accordion-collapse ${displayDescription}`}>
            <div className="accordion-body">
              {
                typeof description === "object" && description?.map((value, index) => {
                  return (
                    <h5 key={index} className="f-s-14">
                      <span>
                        {value}
                      </span>
                      <br />
                    </h5>
                  )
                })
              }
              {
                typeof description === "string" && (
                  <h5 className="f-s-14">
                    <span>
                      {description}
                    </span>
                    <br />
                  </h5>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}