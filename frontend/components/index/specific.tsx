import Img from "../image";

export default function Specific() {
  return (
    <div className="row align-items-center justify-content-center text-center">
      <div className="block-type-image col-1">
        <div className="block box-shadow-none">
          <div className="image">
            <Img className="image-image"
              src="/index/book.webp"
              width={70.0333}
              height={70.0333}
              alt="กว่า 168 บทเรียน จากผู้เชี่ยวชาญ"
            />
          </div>
        </div>
      </div>
      <div className="block-type-text text-left col-2">
        <div className="block box-shadow-none">
          <h5>
            <span style={{ fontWeight: "400" }}>
              กว่า 168 บทเรียน
            </span>
          </h5>
          <h5>
            <span style={{ fontWeight: "400" }}>
              จากผู้เชี่ยวชาญ
            </span>
          </h5>
        </div>
      </div>
      <div className="block-type-image col-1">
        <div className="block box-shadow-none">
          <div className="image">
            <Img className="image-image"
              src="/index/hourglass.webp"
              width={70.0333}
              height={70.0333}
              alt="เต็มอิ่มกับคอร์สเรียน กว่า 31 ชั่วโมง"
            />
          </div>
        </div>
      </div>
      <div className="block-type-text text-left col-2">
        <div className="block box-shadow-none">
          <h5>
            <span style={{ fontWeight: "400" }}>
              เต็มอิ่มกับคอร์สเรียน
            </span>
          </h5>
          <h5>
            <span style={{ fontWeight: "400" }}>
              กว่า 31 ชั่วโมง
            </span>
          </h5>
        </div>
      </div>
      <div className="block-type-image col-1">
        <div className="block box-shadow-none">
          <div className="image">
            <Img className="image-image"
              src="/index/person.webp"
              width={70.0333}
              height={70.0333}
              alt="อัพเดทคอร์สใหม่ ตลอดทั้งปี"
            />
          </div>
        </div>
      </div>
      <div className="block-type-text text-left col-2">
        <div className="block box-shadow-none">
          <h5>
            <span style={{ fontWeight: "400" }}>
              อัพเดทคอร์สใหม่
            </span>
          </h5>
          <h5>
            <span style={{ fontWeight: "400" }}>
              ตลอดทั้งปี
            </span>
          </h5>
        </div>
      </div>
    </div>
  )
}