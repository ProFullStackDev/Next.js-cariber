import Img from "../components/image"
import Footer from "../components/footer"
import Header from "../components/header"
import FooterBrand from "../components/footerBrand"

interface Feature {
  image: string,
  link: string,
  name: string,
  career: string,
}

export default function Courses() {
  const features: Feature[] = [
    {
      image: "/courses/feature-1.jpg",
      link: "#",
      name: "คุณฐากร ปิยะพันธ์",
      career: "Employee Survival Guide"
    },
    {
      image: "/courses/feature-2.jpg",
      link: "#",
      name: "คุณมณีรัตน์ อนุโลมสมบัติ",
      career: "Scale People, Scale Company"
    },
    {
      image: "/courses/feature-3.jpg",
      link: "#",
      name: "คุณบรรยง พงษ์พานิช",
      career: "The Art of Decision Making"
    },
    {
      image: "/courses/feature-4.jpg",
      link: "#",
      name: "คุณสาธิต กาลวันตวานิช",
      career: "The Power of Creative and Critical Thinking"
    },
    {
      image: "/courses/feature-5.jpg",
      link: "#",
      name: "คุณภาณุ อิงคะวัต",
      career: "Branding Formula"
    },
    {
      image: "/courses/feature-6.jpg",
      link: "#",
      name: "คุณกวีวุฒิ เต็มภูวภัทร",
      career: "The Secrets of Habit Transformation"
    },
    {
      image: "/courses/feature-7.jpg",
      link: "#",
      name: "คุณวรวุฒิ อุ่นใจ",
      career: "Decoding SME Success"
    },
    {
      image: "/courses/feature-8.jpg",
      link: "#",
      name: "คุณรวิศ หาญอุตสาหะ",
      career: "The Art of Sales and Persuasion"
    },
    {
      image: "/courses/feature-9.webp",
      link: "#",
      name: "คุณอรรถสิทธิ์ พัฒนเสถียรกุล",
      career: "The Taste of Home Cooking"
    },
    {
      image: "/courses/feature-10.jpg",
      link: "#",
      name: "คุณพงศ์สุข หิรัญพฤกษ์",
      career: "The Mastery of Communication"
    },
    {
      image: "/courses/feature-11.jpg",
      link: "#",
      name: "คุณบรรจง ปิสัญธนะกูล",
      career: "The Craft of Filmmaking"
    },
    {
      image: "/courses/feature-12.jpg",
      link: "#",
      name: "คุณศิริวัฒน์ วงศ์จารุกร",
      career: "Win by Rules, Succeed by Design"
    },
    {
      image: "/courses/feature-13.jpg",
      link: "#",
      name: "คุณยุทธนา บุญอ้อม",
      career: "The Beauty of Creation"
    },
    {
      image: "/courses/feature-14.jpg",
      link: "#",
      name: "คุณเกียรติศักดิ์ เสนาเมือง",
      career: "The Art of Football Tactics"
    },
    {
      image: "/courses/feature-15.jpg",
      link: "#",
      name: "คุณพชร อารยะการกุล",
      career: "Strategy To Win"
    },
    {
      image: "/courses/feature-16.jpg",
      link: "#",
      name: "คุณณัฏฐ์ เพิ่มทรัพย์",
      career: "The Essentials of Coaching"
    },
    {
      image: "/courses/feature-17.jpg",
      link: "#",
      name: "รศ.พญ. นฤชา จิรกาลวสาน",
      career: "The Science of Sleep"
    },
  ]

  return (
    <div className="bg-courses courses">
      <Header />
      <div className="sizer">
        <div className="container">
          <div className="row align-items-center">
            <div className="block-type-image text-col-12" style={{ marginBottom: 0 }}>
              <div className="block box-shadow-none background-unrecognized">
                <div className="image">
                  <a href="https://checkout.cariber.co/?add-to-cart=685&amp;cfp=bGFyZ2ViYW5uZXJfY291cnNlcw==">
                    <Img className="image-image"
                      src="/courses/promotion.webp"
                      alt="Promotion"
                      width={1260}
                      height={282.017} />
                  </a>
                </div>
              </div>
            </div>
            <div className="block-type-text text-left col-12">
              <div className="block box-shadow-none background-unrecognized">
                <h2 style={{ textAlign: 'center', color: '#e74e25' }}>
                    คอร์สทั้งหมด
                </h2>
              </div>
            </div>
            <div className="block-break"></div>
            {features.map((value, index) => {
              return (
                <div key={index} className="block-type-feature text-center col-3">
                  <div className="block box-shadow-large background-light"
                    style={{ backgroundColor: "#ffffff", borderRadius: "4px" }}>
                    <div style={{ padding: "15px" }}>
                      <div className="feature">
                        <a href={value.link}>
                          <Img className="feature-image"
                            src={value.image}
                            alt={value.name}
                            width={262.5}
                            height={147.65} />
                        </a>
                        <div className="feature-text">
                          <h5 style={{ textAlign: 'center' }}>
                            <a href="/thakorn-piyapan">
                              <span style={{ color: '#223f99' }}>
                                <strong>
                                  {value.name}
                                </strong>
                              </span>
                            </a>
                          </h5>
                          <h6 style={{ textAlign: 'center' }}>
                            <a href="/thakorn-piyapan">
                              <strong>
                                {value.career}
                              </strong>
                            </a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <FooterBrand />
      <Footer />
    </div>
  )
}