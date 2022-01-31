import { useState } from "react";

export enum Icon {
  play = "fal fa-play-circle",
  lock = "fal fa-lock"
}

export enum Color {
  light = "light",
  dark = "dark"
}

interface AccordionLink{
  linkUrl: string,
  linkText: string
}

interface AccordionProps {
  title: string,
  description: string,
  col: number,
  icon?: Icon,
  color: Color,
  link?: AccordionLink,
}

export default function Accordion({ title, description, col, icon, color, link }: AccordionProps) {
  const [displayDescription, setDisplayDescription] = useState("d-none");
  const descriptionLocal = description.split(/\r\n|\n\r|\n|\r/)
  function switchDisplay() {
    displayDescription === "d-none" ? setDisplayDescription("d-block") : setDisplayDescription("d-none")
  }

  return (
    <div className={`accordion block-type-accordion text-left col-${col}`} onClick={switchDisplay}>
      <div className={`accordion-frame box-shadow-medium ${color}`}>
        <div className="accordion">
          <div className="accordion-title media align-items-center collapsed">
            {icon && (
              <div className="m-r-10">
                <i className={icon}></i>
              </div>
            )}
            <h5 className="media-body f-s-16">
              {title}
            </h5>
            {displayDescription === "d-none" ?
              (<i className="fas fa-chevron-right"></i>) :
              (<i className="fas fa-chevron-down"></i>)}
          </div>
          <div className={`accordion-collapse ${displayDescription}`}>
            <div className="accordion-body">
              {descriptionLocal.map((value, index) => {
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
            </div>
            {link && (
              <div className="accordion-button">
                <a href={link.linkUrl} className="btn btn-small">{link.linkText}</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}