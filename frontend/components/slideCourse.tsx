import { useState, useRef, useEffect } from "react";
import Img from "./image";

export interface SlideCourse {
  link: string,
  image: string,
}

interface SlideCourseProps {
  slideCourse: SlideCourse[],
  slideView: number,
  imageWidth: number,
  imageHeight: number,
}

export default function SlideCourse({ slideCourse, slideView, imageWidth, imageHeight }: SlideCourseProps) {
  const [slideShowIndex, setSlideShowIndex] = useState(0);
  const timeoutRef = useRef(0);
  const delay = 5000;

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  function nextSlide() {
    setSlideShowIndex((index) =>
      index === slideCourse.length - slideView ? 0 : index + 1
    )
  }

  function previousSlide() {
    setSlideShowIndex((index) =>
      index === 0 ? slideCourse.length - slideView : index - 1
    )
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(
      () =>
        setSlideShowIndex((index) =>
          index === slideCourse.length - slideView ? 0 : index + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    }
  }, [slideCourse.length, slideShowIndex, slideView])

  return (
    <div className="block box-shadow-none background-unrecognized">
      <div id="slideshow" className="container">
        <div className="row">
          <div className="col-lg-12">
            <div id="news-slider" className="owl-carousel owl-theme">
              <div className="owl-wrapper-outer">
                <div className="owl-wrapper" style={{ transform: `translate3d(${-slideShowIndex * (imageWidth + 21.6)}px, 0px, 0px)` }}>
                  {slideCourse.map((value, index) => {
                    return (
                      <div key={index} className="owl-item" style={{ width: "fit-content" }}>
                        <div className="news-grid">
                          <div className="news-grid-image">
                            <a href={value.link}>
                              <Img
                                src={value.image}
                                alt="Slide Course"
                                width={imageWidth}
                                height={imageHeight}
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