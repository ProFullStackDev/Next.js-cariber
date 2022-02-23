import { MouseEventHandler, useState } from "react";

export enum Icon {
  play = "fal fa-play-circle",
  lock = "fal fa-lock"
}

export enum Color {
  light = "light",
  dark = "dark"
}

interface AccordionLink {
  callback: MouseEventHandler<HTMLButtonElement>;
  text: string;
}

interface AccordionProps {
  title: string,
  description: string,
  col: number,
  icon?: Icon,
  color: Color,
  button?: AccordionLink,
  progress?: number
}

export default function Accordion({ title, description, col, icon, color, button, progress }: AccordionProps) {
  const [displayDescription, setDisplayDescription] = useState("d-none");
  function switchDisplay() {
    if (icon === Icon.lock) {
      return
    }
    displayDescription === "d-none" ? setDisplayDescription("d-block") : setDisplayDescription("d-none")
  }

  return (
    <div className={`accordion-outside m-0 col-${col}`}>
      <div className={`accordion-frame box-shadow-medium block-type-accordion text-left ${color}`}
        onClick={switchDisplay}>
        <div className={`${icon === Icon.lock && ("accordion-non-focus")} ${displayDescription === "d-block" && ("accordion-active")}`}>
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
                (<i className="fas fa-chevron-up"></i>)}
            </div>
          </div>
        </div>
      </div>
      <div className={`accordion-collapse ${color} ${displayDescription}`}>
        <div className={`accordion accordion-body row`}>
          <div className={`${button ? ("col-9") : ("col-12")} `}>
                <h6 className="f-s-14 white-space-pre">
                  <span>
                    {description}
                  </span>
                  <br />
                </h6>
          </div>
          {button && (
            <div className="accordion-right col-3">
              <div>
                {(progress || progress === 0) && (<div>
                  <p className="f-s-12">
                    รับชมแล้ว {progress / 10} นาทีจาก 10นาที
                  </p>
                  <div className="player-progress full">
                    <div className="progress-outer">
                      <div className={`progress-inner p-w-${Math.round(progress)}`} />
                    </div>
                  </div>
                </div>)}
                <button onClick={button.callback} className="btn btn-small btn-full">{button.text}</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}