import { useState, useRef, useEffect } from "react";
import Img from "./image";

export interface SlideCourse {
  link: string,
  image: string,
}

interface SlideCourseProps {
  slideCourses: SlideCourse[],
  slideView: number,
  imageWidth: number,
  imageHeight: number
}

export default function SlideCourse({ slideCourses, slideView, imageWidth, imageHeight }: SlideCourseProps) {
  const [slideViewLocal, setSlideViewLocal] = useState(slideView);
  const [imageWidthLocal, setImageWidthLocal] = useState(imageWidth);
  const [imageHeightLocal, setImageHeightLocal] = useState(imageHeight);
  const [slideShowIndex, setSlideShowIndex] = useState(0);
  const [frameWidth, setFrameWidth] = useState(0);
  const [itemFrameWidth, setItemFrameWidth] = useState(0);
  const timeoutRef = useRef(0);
  const delay = 4000;
  const refFrame = useRef<HTMLDivElement>(null);
  const refItemFrame = useRef<HTMLDivElement>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  function nextSlide() {
    setSlideShowIndex((index) =>
      index >= slideCourses.length - slideViewLocal ? 0 : index + 1
    )
  }

  function previousSlide() {
    setSlideShowIndex((index) =>
      index <= 0 ? slideCourses.length - slideViewLocal : index - 1
    )
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(
      () =>
        setSlideShowIndex((index) =>
          index >= slideCourses.length - slideViewLocal ? 0 : index + 1
        ),
      delay
    );
    window.addEventListener('resize', function () {
      refFrame.current && setFrameWidth(refFrame.current.offsetWidth)
      refItemFrame.current && setItemFrameWidth(refItemFrame.current.offsetWidth)
    });
    refFrame.current && setFrameWidth(refFrame.current.offsetWidth)
    refItemFrame.current && setItemFrameWidth(refItemFrame.current.offsetWidth)
    frameWidth >= 1150 / 1.5 && setSlideViewLocal(4)
    frameWidth < 1150 / 1.5 && setSlideViewLocal(3)
    frameWidth < 1150 / 2 && setSlideViewLocal(2)
    frameWidth < 1150 / 3 && setSlideViewLocal(1)
    setImageWidthLocal(0.97252173913 * (frameWidth / slideViewLocal) - 20)
    setImageHeightLocal(1.6347826087 * (frameWidth / slideViewLocal))
    return () => {
      resetTimeout();
    }
  }, [frameWidth, slideCourses.length, slideViewLocal, slideShowIndex])

  return (
    <div className="block box-shadow-none background-unrecognized">
      <div id="slideshow" className="container">
        <div className="row">
          <div className="col-lg-12" ref={refFrame}>
            <div id="news-slider" className="owl-carousel owl-theme">
              <div className="owl-wrapper-outer">
                <div className="owl-wrapper" style={{ transform: `translate3d(${-slideShowIndex * (itemFrameWidth) - 10}px, 0px, 0px)` }}>
                  {slideCourses.map((value, index) => {
                    return (
                      <div key={index} className="owl-item" ref={refItemFrame} style={{ width: "fit-content" }}>
                        <div className="news-grid">
                          <div className="news-grid-image">
                            <a href={value.link}>
                              <Img
                                src={value.image}
                                width={imageWidthLocal}
                                height={imageHeightLocal}
                                alt="Slide Course"
                              />
                            </a>
                          </div>
                          <div className="news-grid-txt">
                            {index < 1 ? (
                              <b>Coming Soon</b>
                            ) : (
                              <a href={value.link}>
                                ซื้อคอร์สนี้
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="owl-controls clickable">
                <div className="owl-buttons">
                  <button id="previous" className="owl-prev owl-button" onClick={previousSlide}>
                    <i className="fas fa-chevron-left" style={{ color: "white" }}></i>
                  </button>
                  <button id="next" className="owl-next owl-button" onClick={nextSlide}>
                    <i className="fas fa-chevron-right" style={{ color: "white" }}></i>
                  </button>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}