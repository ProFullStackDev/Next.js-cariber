import { useEffect, useRef, useState } from "react";

export default function YoutubeEP() {
  const refFrame = useRef<HTMLDivElement>(null);
  const [youtubeFrameWidth, setYoutubeFrameWidth] = useState(0);

  useEffect(() => {
    refFrame.current && setYoutubeFrameWidth(refFrame.current.offsetWidth)
    window.addEventListener('resize', function () {
      refFrame.current && setYoutubeFrameWidth(refFrame.current.offsetWidth)
    });
  }, [])

  return (
    <div>
      <div className="background-light">
        <div className="sizer">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="block-type-text text-center col-10">
                <div className="block box-shadow-none">
                  <h1 style={{ textAlign: "center" }}>
                    <span style={{ color: "#e74e25" }}>
                      <strong>
                        Special EP ดูฟรีก่อนใคร
                      </strong>
                    </span>
                  </h1>
                  <h1 style={{ textAlign: "center" }}>
                    <span style={{ color: "#0e1b20" }}>
                      <strong>
                        คัดบทเรียนเน้นๆมาให้ดูก่อนตัดสินใจ!
                      </strong>
                    </span>
                  </h1>
                </div>
              </div>
              <div className="block-type-video-embed text-left col-8">
                <div className="block box-shadow-none" ref={refFrame}>
                  <div className="responsive-video">
                    <iframe src="https://www.youtube.com/embed/NQrPMvKOKsk"
                      sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation" width="100%" height={youtubeFrameWidth * 0.56249036144} />
                  </div>
                </div>
              </div>
              <div className="block-type-text text-left col-4">
                <div className="block box-shadow-none">
                  <h2>วิชาสร้าง (สรรค์)</h2>
                  <p>
                    หลายคนอาจคิดว่าการสร้างเทศกาลดนตรี คือการสร้างเวทีสวยๆ หรือโชว์ที่ดี แต่แท้จริงแล้วมันเป็นเพียงยอดภูเขาน้ำแข็งเท่านั้น พบกับเบื้องหลังแนวคิดของการสร้าง ทั้งนิยามการสร้างสรรค์ และคุณสมบัติของนักสร้างที่ดีที่ทุกคนก็เป็นได้ เพราะนักสร้างสรรค์ไม่ใช่คนที่มีพลังพิเศษหรือซุปเปอร์ฮีโร่ แต่เป็นเพียงคนธรรมดาที่กล้าคิด กล้าทำ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background-dark">
        <div className="sizer" style={{paddingBottom: "0px"}}>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <h2 style={{ textAlign: "center" }}>
                <span style={{ color: "#e74e25" }}>
                  <strong>
                    ถ้ายังไม่จุใจ เต็มอิ่มกับบทเรียนกว่า 4 ชั่วโมง<br />เล่าผ่านประสบการณ์จริง แบบที่ไม่เคยมีมาก่อน
                  </strong>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}