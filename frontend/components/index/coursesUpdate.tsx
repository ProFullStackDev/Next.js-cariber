import Link from "next/link"
import Img from "../image"
import { CourseSoon, CourseLatest } from "../static/interface"

export default function CoursesUpdate({ coursesSoon, coursesLatest }: { coursesSoon: CourseSoon[], coursesLatest: CourseLatest[] }) {
  return (
    <div className="row align-items-center justify-content-center">
      <div className="block-type-text text-center col-12">
        <div className="block box-shadow-none">
          <h1>
            <span style={{ color: "#e74e25" }}>
              คอร์สเปิดตัวล่าสุด
            </span>
          </h1>
        </div>
      </div>
      {coursesLatest.map((value, index) => {
        return (
          <div key={index} className="block-type-feature text-center col-6">
            <div className="block box-shadow-none">
              <div className="feature" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Img className="feature-image"
                  src={value.image}
                  width={600}
                  height={337.5}
                  alt={value.alt}
                />
                <Link href={value.link}>
                  <a className="btn btn-solid btn-small btn-auto" >ดูรายละเอียดคอร์ส</a>
                </Link>
              </div>
            </div>
          </div>
        )
      })
      }
      <div className="block-type-text text-center col-12">
        <div className="block box-shadow-none">
          <h1>
            <span style={{ color: "#e74e25" }}>
              คอร์สที่กำลังจะเปิดตัว
            </span>
          </h1>
        </div>
      </div>
      {coursesSoon.map((value, index) => {
        return (
          <div key={index} className="block-type-image col-3">
            <div className="block box-shadow-none">
              <div className="image">
                <Img className="image-image"
                  src={value.image}
                  alt={value.alt}
                  width={349.6}
                  height={196.733}
                />
              </div>
            </div>
          </div>
        )
      })
      }
    </div>
  )
}