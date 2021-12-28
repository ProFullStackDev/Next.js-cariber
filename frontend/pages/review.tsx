import Footer from "../components/footer";
import Header from "../components/header";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface FeatureCariber {
  image: string,
  name: string,
  career: string,
  review: string,
  from: string,
}

interface FeatureShopee {
  name: string,
  ratings: string,
  review: string,
  from: string,
}

interface SlideCourse {
  url: string,
  image: string,
}

export default function Review() {
  const [slideShowIndex, setSlideShowIndex] = useState(0);
  const timeoutRef = useRef(0);
  const delay = 5000;
  const featureCariberFirst: FeatureCariber[] = [
    {
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148484577/settings_images/jDkGaLJSNKAvuAFj59Dw_03.webp",
      name: "นิกส์ อรรถพล",
      career: "Country Manager, Tinder",
      review: "การที่ได้เรียนรู้ความสำเร็จจากผู้บริหารที่ประสบความสำเร็จมาแล้วเป็นอะไรที่หาได้ยากมาก ๆ คุ้มค่า แนะนำเลย",
      from: "Cariber",
    },
    {
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148484577/settings_images/9gsjvqCvQyWUJlz3FLAp_01.webp",
      name: "พีช พิชญา",
      career: "Head of Monetization, Shopee",
      review: "แตกต่างจากคอร์สเรียนที่อื่น เหมาะสำหรับพนักงานประจำที่ต้องการพัฒนาตัวเอง มีคอร์สใหม่ตลอดสำหรับแพ็กเกจรายปี",
      from: "Cariber",
    },
    {
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148484577/settings_images/pmESAq00QvWsjMfm0Dg6_08.webp",
      name: "วิล ชนากานต์",
      career: "Business Analyst, McKinsey & Company",
      review: "ได้เรียนรู้จากประสบการณ์จริงของผู้บริหาร การเรียบเรียงและตัดต่อกระชับน่าติดตามเหมือนได้ดูซีรี่ย์ Netflix ดี ๆ เรื่องนึง",
      from: "Cariber",
    },
    {
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148484577/settings_images/CeYaZMAgTKVyjpnpy13Q_10.webp",
      name: "มุก ภัณฑิลา",
      career: "MBA Candidate, Stanford University, Graduate School of Business",
      review: "ได้พัฒนาตัวเองในหลายๆด้าน โดยที่ไม่ต้องเสียเวลาในการหาข้อมูลเยอะ เพราะได้เรียนจากผู้สอนเก่ง ๆ",
      from: "Cariber",
    },
  ]
  const featureCariberSecond: FeatureCariber[] = [
    {
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148484577/settings_images/7PTP7gsKQt6itd3pvBgE__.webp",
      name: "ณัฐชา คาลเกน",
      career: "Founder, Khankel Company",
      review: "ต้องบอกเลยว่าคุ้มค่ามากที่ได้สมัครคอร์สแบบรายปีกับทาง cariber เป็นแพลตฟอร์ม การเรียนรู้ผ่านช่องทางออนไลน์ที่มีผู้เชี่ยวชาญในหลายด้าน มาถ่ายทอดความรู้โดยตรง ในราคารายปีที่คุ้มเกินคุ้ม ซึ่งมีคอร์สให้เรียนออกมาเรื่อยๆ หลังจากที่เรียนจบแต่ละคอร์ส ได้นำไปต่อยอดกับงานประจำและธุรกิจส่วนตัวได้อย่างมีประสิทธิภาพที่สำคัญนำมาประยุกต์ใช้จากคอร์สที่เรียนได้ทุกคอร์สอย่างแน่นอน",
      from: "Cariber",
    },
    {
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148484577/settings_images/A9wlZfwlQDaiM0ukJsYD__.webp",
      name: "ธนิดา อ่อนน้อม",
      career: "Sales manager Key accounts, Premier Tech Systems and Automation",
      review: "ใช้เวลาเรียนต่อคอร์สไม่นาน เรียนรู้จากประสบการณ์ตรงของผู้สอนเหมือนเรามีข้อมูลinsideจากคนทำเรื่องนั้นจริงๆ ไม่ได้เป็นแนววิชาการทำให้ไม่เครียดมาก สิ่งสำคัญคือควรหาเวลาเรียนให้ได้มากที่สุดค่ะ",
      from: "Cariber",
    },
    {
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148484577/settings_images/WCG7UP29SCi4O822txWw_FB_IMG_1606118445013_-_Chaiwat_Asuwapongpatana.jpg",
      name: "Chaiwat Asuwapongpatana",
      career: "Founder, 12Aroi Bakery",
      review: "ได้เห็นถึงมุมมองที่แตกกต่างออกไปของผู้บริหารระดับประเทศ กว่าจะมาถึงในระดับนี้ มีประสมการณ์ การถ่ายถอดเรื่องราาว และ มีมุมมองอย่างไร แต่ละคอร์สถือว่าคุ้มค่ามากๆ เป็นคอร์สที่ถ้าไม่ได้เรียนจะเสียใจภายหลังมาก คุ้มค่ามาก",
      from: "Cariber",
    },
    {
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148484577/settings_images/oFcAjM6YTm2KRWpbEx0R__.webp",
      name: "อัจฉรีย์ วงษ์ประเสริฐ",
      career: "ผู้ช่วยผู้อำนวยการงานบริหารการวางแผนกำลังคนเชิงกลยุทธ์ บริษัท อาคเนย์ประกันชีวิต จำกัด(มหาชน)",
      review: "ในโลกที่ทุกอย่างเปลี่ยนแปลงไปอย่างรวดเร็ว ในฐานะคนทำงานเราก็ต้องกระตือรือล้น ขวนขวายหาความรู้ เพื่อให้ก้าวทันโลก ทันการเปลี่ยนแปลง การเรียนรู้ประสบการณ์จากผู้ที่รู้จริง ลงมือจริง ช่วยให้แนวทางการทำงาน ที่เป็นระบบ เป็นขั้นตอน เหมือนมี coach มาชี้แนวทาง",
      from: "Cariber",
    },
    {
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148484577/settings_images/KSVj0oaQO6lDFebp0bIg__.webp",
      name: "กฤษฎา มิมมา",
      career: "Business Develop Manager, Tipco Asphalt",
      review: "บางช่วงมีปัญหากับงานที่ทำอยู่ พอได้เข้าเรียนพบว่า สามารถนำไปประยุกต์แก้ปัญหาได้",
      from: "Cariber",
    },
    {
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148484577/settings_images/OXAqivunTyZZjbKLHRaA__.webp",
      name: "ณัฐดนัย ฐิตวัฒนพงศ์",
      career: "Chief Community Officer, Youth Northen",
      review: "ได้แง่คิด แนวทางที่เป็นประโยชน์ จากตัวจริงในวงการ นำไปปรับใช้ในชีวิตประจำวัน",
      from: "Cariber",
    },
    {
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148484577/settings_images/Cko1fNGUT4auVa0kAenL__.webp",
      name: "ปฐมภัทร คำตา",
      career: "Data Scientist Manager, Accenture",
      review: "ได้เรียนรู้จากประสบการณ์จริง ที่ไม่ใช่แค่หลักการ แต่ยังเป็นภูมิปัญญาที่คนเรียนสามารถเอาไปปรับใช้กับตัวเองได้เป็นอย่างดี",
      from: "Cariber",
    },
    {
      image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148484577/settings_images/JIP94NUhRayrylQklXpp__.webp",
      name: "จักรพงษ์ คงมาลัย",
      career: "Managing Director, Moonshot Digital | Digital PR & Content Agency",
      review: "ช่วยให้ confirm ได้ว่าสิ่งที่เราคิดอันไหนบ้างที่ตรงกับสิ่งที่ thought leader ต่างๆ คิด",
      from: "Cariber",
    },
  ]
  const featureShopee: FeatureShopee[] = [
    {
      name: "phanrapeevarakul",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
      review: "เจ้าหน้าที่ตอบไวมาก คอสดีมากค่ะ แค่ฟังคุณบรรยงค์ ท่านเดียวก็ถือว่าคุ้มค่ามากๆแล้วค่ะ ขอให้มีspeakerท่านอื่นๆตามมาอีกเยอะๆนะคะ 👏🏻👏🏻👏🏻👏🏻🎀🎀🎀🎀🎀🎀🧡🧡🧡🧡🧡❤️❤️❤️❤️❤️❤️❤️💕💕💕💕💕💕💕💕",
      from: "Shopee",
    },
    {
      name: "bellnapasorn",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
      review: "ดีนะคะ ลองเรียนแล้วได้ไอเดียในการทำงาน/ทำธุรกิจเยอะเลยค่ะ ราคาถือว่าคุ้มมากสำหรับการได้ฟังผู้บริหารระดับนี้ ตัวโปรแกรมเรียนใช้ง่ายดีค่ะ ขอบคุณที่พัฒนาอะไรดีๆแบบนี้นะคะ🙏🏻😊",
      from: "Shopee",
    },
    {
      name: "thantada",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
      review: "การสั่งซื้อรวดเร็วมาก แปปเดียว ได้ดูแล้ว, ดูจากรายชื่อวิทยากรแล้วน่าดู แถวยังมีการอัพเดทเรื่อยๆอีก น่าจะเป็นประโยชน์ไม่มากก็น้อย",
      from: "Shopee",
    },
    {
      name: "kittinjinawong",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
      review: "คอร์สเรียนดีมาก การตัดต่อดีแบ่งเป็นตอนชัดเจนง่ายต่อการกลับมาฟังใหม่ คุ้มค่ามาก ๆ ครับ แนะนำให้ทุกคนได้เรียน",
      from: "Shopee",
    },
    {
      name: "zizzizeeintph",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
      review: "คุ้มค่ามากๆ คอร์สกระชับ ได้ใจความ ตรงประเด็น เต็มไปด้วยวิทยากรที่ลงสนามจริง มีประสบการณ์มาสอน รอติดตามต่อไปค่ะ",
      from: "Shopee",
    },
    {
      name: "kingkongba08",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
      review: "คอร์สดีมากครับ ระดับผู้บริหารมาสอนเองเลย สุดยอดมาก",
      from: "Shopee",
    },
    {
      name: "kmeenn",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
      review: "คุณแอดมินตอบไวมากเลยค่ะ ภาพวิดีโอคมชัดมาก คุ้มค่าแล้วก็คุณภาพเกินราคามาก",
      from: "Shopee",
    },
    {
      name: "thaikhamth",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
      review: "เป็นคลังความรู้ที่คุ้มค่ามากๆ การดำเนินเรื่องน่าติดตามน่าสนใจ คุ้มค่ามากๆเมื่อเทียบกับราคา",
      from: "Shopee",
    },
    {
      name: "raweeoyl",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
      review: "คอร์สดี ตัดต่อเนื้อหามาดี ทำเป็นตอนสั้นๆ เข้าใจง่าย ได้ประโยชน์มาก ราคานี้ถือว่าคุ้มมากๆ และยังจะมีคนมาเพิ่มอีกเรื่อยๆ",
      from: "Shopee",
    },
    {
      name: "mkrissada",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
      review: "ได้รับเมล์รหัสการเข้าเรียนรวดเร็วมาก",
      from: "Shopee",
    },
    {
      name: "suphischa.toey",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
      review: "เนื้อหาดีมาก ภาพคมชัด ได้ความรู้ประสบการณ์มาปรับใช้คะ แอดมินตอบเร็วดีคะ",
      from: "Shopee",
    },
    {
      name: "hommetfc",
      ratings: "⭐️⭐️⭐️⭐️⭐️",
      review: "ราคานี้ ดูได้ทั้งปี คุ้มมากค่ะ",
      from: "Shopee",
    },
  ]
  const slideCourse: SlideCourse[] = [
    {
      url: "#",
      image: "https://drive.google.com/uc?id=1VrOC4Jd4fVAygfVPcBY03S_jUx70lSRc"
    },
    {
      url: "",
      image: "https://drive.google.com/uc?id=1l5yFqNeRdUQ5IvEHCeofxP7hCuV5TTn3"
    },
    {
      url: "",
      image: "https://drive.google.com/uc?id=11v8oQC_ZXCk2lHut04dxywM-FOEoXAw-"
    },
    {
      url: "",
      image: "https://drive.google.com/uc?id=1pPSwpr-FJ1QquXKw3jeNVKcH6XJj0nFT"
    },
    {
      url: "",
      image: "https://drive.google.com/uc?id=1RRMPltvQsEiZJVeU8V8vY0NT-86O2RDl"
    },
    {
      url: "",
      image: "https://drive.google.com/uc?id=1lRE0zl0SqoDmjvzIV_m--oJBabibomJX"
    },
    {
      url: "",
      image: "https://drive.google.com/uc?id=1wB2LDburuPxmjjrbQaCKgunLyOc7UgoX"
    },
  ]

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  function nextSlide() {
    setSlideShowIndex((index) =>
      index === slideCourse.length - 4 ? 0 : index + 1
    )
  }

  function previousSlide() {
    setSlideShowIndex((index) =>
      index === 0 ? slideCourse.length - 4 : index - 1
    )
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(
      () =>
        setSlideShowIndex((index) =>
          index === slideCourse.length - 4 ? 0 : index + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    }
  }, [slideCourse.length, slideShowIndex])

  return (
    <div className="bg-review review">
      <Header />
      <div className="section-titel">
        <div className="sizer">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="block-type-image text-col-12" style={{ marginBottom: 40 }}>
                <div className="block box-shadow-none background-unrecognized aos-init aos-animate">
                  <div className="image">
                    <a href="https://checkout.cariber.co/?add-to-cart=685&amp;cfp=bGFyZ2ViYW5uZXJfY291cnNlcw==">
                      <Image className="image-image"
                        src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/3617585/settings_images/WwCSkYs4TKWw0zpTBGtQ_file.jpg"
                        alt=""
                        width={1260}
                        height={282.017} />
                    </a>
                  </div>
                </div>
              </div>
              <div id="block-titel" className="block-type-text text-center col-7" style={{ marginBottom: 50 }}>
                <div className="block box-shadow-large background-unrecognized aos-init aos-animate">
                  <h1>
                    <span style={{ color: '#e74e25' }}>
                      Wall of Love
                    </span>
                  </h1>
                  <h4>
                    <span style={{ color: '#e74e25' }}>
                      ผู้เรียนมีความเห็นอย่างไรกับ Cariber
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-person-1">
        <div id="block-person-1">
          <div className="container">
            <div className="frame align-items-center justify-content-center">
              <div className="block-type-image text-col-11">
                <div className="row block box-shadow-large background-light aos-init aos-animate" >
                  <Image className="image-image"
                    src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2148484577/settings_images/bPYsO3kwQHOr4QyXSv7K_123288476_3453648371357312_9054237649683120135_n.webp"
                    alt=""
                    width={200}
                    height={200} />
                  <div className="block-text">
                    <p style={{ marginBottom: 14 }}>
                      <strong>
                        <span style={{ color: '#2c3e50' }}>
                          &quot;ถ้าข้าพเจ้ามีเวลา 6 ชั่วโมงในการตัดต้นไม้ ข้าพเจ้าจะใช้เวลา 4 ชั่วโมงแรกลับขวานให้คม&quot;
                          <br />
                          เป็นวาทะของ&quot;อับราฮัม ลินคอล์น&quot; อดีตผู้นำสหรัฐอเมริกา
                          <br />
                          <br />
                          วิกฤติโควิด-19 ครั้งนี้หนักหนาสาหัสมาก
                          <br />
                          แต่วันหนึ่งมันต้องผ่านไป
                          <br />
                          และเมื่อวันที่ฟ้าเปิด ท้องฟ้าสดใส
                          <br />
                          ใครที่ลับขวานได้คมกว่าก็จะได้เปรียบ
                        </span>
                      </strong>
                    </p>
                    <h5 style={{ marginBottom: 0 }}>
                      <strong className="mt-auto">
                        <span>
                          <a href="https://www.facebook.com/118209918234524/posts/4271535732901901/?d=n" style={{ color: "#1e4397", fontSize: 16 }}>
                            Facebook page : หนุ่มเมืองจันท์
                          </a>
                        </span>
                      </strong>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-feature-1">
        <div className="container">
          <div className="justify-content-center grid-container">
            {featureCariberFirst.map((value, index) => {
              return (
                <div key={index} className="block-type-feature text-left col-3">
                  <div className="block box-shadow-large background-light aos-init aos-animate">
                    <div className="feature">
                      <Image className="feature-image"
                        src={value.image}
                        alt=""
                        width={100}
                        height={100}
                      />
                      <div className="feature-text">
                        <h4>
                          <span style={{ color: "#ed9081" }}>
                            {value.name}
                          </span>
                        </h4>
                        <p>
                          <span style={{ color: "#e74e25" }}>
                            <em>
                              {value.career}
                            </em>
                          </span>
                        </p>
                        <p>
                          <br />
                          <span style={{ color: "#0e1b20" }}>
                            &quot;
                            {value.review}
                            &quot;
                          </span>
                        </p>
                        <p>
                          <strong>
                            <span style={{ color: "#e74e25" }}>
                              {value.from}
                            </span>
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {featureCariberSecond.map((value, index) => {
              return (
                <div key={index} className="block-type-feature text-left col-3">
                  <div className="block box-shadow-large background-light aos-init aos-animate">
                    <div className="feature">
                      <Image className="feature-image"
                        src={value.image}
                        alt=""
                        width={70}
                        height={70}
                      />
                      <div className="feature-text">
                        <h4>
                          <span style={{ color: "#ed9081" }}>
                            {value.name}
                          </span>
                        </h4>
                        <p>
                          <span style={{ color: "#e74e25" }}>
                            <em>
                              {value.career}
                            </em>
                          </span>
                        </p>
                        <p>
                          <br />
                          <span style={{ color: "#0e1b20" }}>
                            &quot;
                            {value.review}
                            &quot;
                          </span>
                        </p>
                        <p>
                          <strong>
                            <span style={{ color: "#e74e25" }}>
                              {value.from}
                            </span>
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {featureShopee.map((value, index) => {
              return (
                <div key={index} className="block-type-feature text-left col-3">
                  <div className="block box-shadow-large background-light aos-init aos-animate">
                    <div className="feature">
                      <div className="feature-text">
                        <h4>
                          <span style={{ color: "#ed9081" }}>
                            {value.name}
                          </span>
                        </h4>
                        <p style={{ margin: 0 }}>
                          <strong>
                            <span style={{ color: "#0e1b20" }}>
                              Ratings : {value.ratings}
                            </span>
                          </strong>
                        </p>
                        <p>
                          <br />
                          <span style={{ color: "#0e1b20" }}>
                            &quot;
                            {value.review}
                            &quot;
                          </span>
                        </p>
                        <p>
                          <strong>
                            <span style={{ color: "#e74e25" }}>
                              {value.from}
                            </span>
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="sections-footer">
        <div className="sizer ">
          <div className="container ">
            <div className="row align-items-center justify-content-center">
              <div className="block-type-text text-center col-12">
                <div className="block box-shadow-none background-unrecognized aos-init aos-animate">
                  <p style={{ fontSize: "40px", textAlign: "center" }}>
                    <strong>
                      <span style={{ color: "#e74e25" }}>
                        สูตรความสำเร็จกับ &quot;ที่สุด&quot; ของประเทศ
                      </span>
                    </strong>
                  </p>
                  <p style={{ fontSize: "20px", textAlign: "center" }}>
                    <em>
                      <strong>
                        <span style={{ color: "#e74e25" }}>
                          คอร์สออนไลน์กับผู้บริหาร ผู้นำทางความคิด แบบที่ไม่เคยมีมาก่อน
                        </span>
                      </strong>
                    </em>
                  </p>
                </div>
              </div>
              <div className="block-type-code text-left col-12">
                <div className="block box-shadow-none background-unrecognized aos-init aos-animate">
                  <div id="slideshow" className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div id="news-slider" className="owl-carousel owl-theme">
                          <div className="owl-wrapper-outer">
                            <div className="owl-wrapper" style={{ transform: `translate3d(${-slideShowIndex * 295}px, 0px, 0px)` }}>
                              {slideCourse.map((value, index) => {
                                return (
                                  <div key={index} className="owl-item" style={{ width: "fit-content" }}>
                                    <div className="news-grid">
                                      <div className="news-grid-image">
                                        <a href={value.url}>
                                          <Image
                                            src={value.image}
                                            alt=""
                                            width={273.4}
                                            height={482.4}
                                          />
                                        </a>
                                      </div>
                                      <div className="news-grid-txt">
                                        {index < 1 ? (
                                          <b>Coming Soon</b>
                                        ) : (
                                          <a href={value.url}>
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
              </div>
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </div >
  )
}