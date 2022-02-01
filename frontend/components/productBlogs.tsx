import Link from "next/link";
import Img from "./image";

interface ProductBlogsProps {
  progressBlog: boolean,
  productImage: string,
  productName: string,
  instructorImage: string,
  instructorName: string,
  instructorRemark: string,
}

export default function ProductBlogs({ productImage,
  progressBlog,
  instructorImage,
  instructorName,
  instructorRemark }: ProductBlogsProps) {
  return (
    <div className="products col-4">
      {progressBlog && (
        <div className={"panel"}>
          <Img src={productImage ? productImage : ""}
            width={950}
            height={550}
            alt={instructorName}
          />
          <div className="panel-card-body">
            <h6 className="panel-heading" >
              0 of 11 คอร์สรับชมเสร็จสิ้น
            </h6>
            <div className="progress">
              <div className="progress-outer">
                <div className="progress-inner w-0" />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="panel">
        <div className="panel-card-body">
          <div className="media row">
            <div className="media-left">
              <Img className="instructor-image"
                src={instructorImage}
                width={60}
                height={60}
                alt={instructorName}
              />
            </div>
            <div className="media-body media-middle">
              <h5 className="instructor-name">
                คุณ{instructorName}
              </h5>
              <h6 className="instructor-title">
                Instructor
              </h6>
            </div>
          </div>
          <p className="panel-copy">
            {instructorRemark}
          </p>
        </div>
      </div>
      <div className="panel">
        <Img src="/q-next-instructor.jpg"
          width={950}
          height={550}
          alt="ผู้สอนในอนาคต"
        />
        <div className="panel-card-body text-center">
          <h6 className="panel-heading">
            Cariber ใส่ใจกับทุกความคิดเห็นของคุณ
          </h6>
          <div className="panel-copy">
            <p>
              <span>
                กรอกแบบสอบถามต่อไปนี้หากมีใครที่คุณอยากให้มาเป็นผู้สอนในอนาคต ทีมงานจะนำข้อเสนอแนะไปพิจารณาต่อไป
              </span>
            </p>
          </div>
          <Link href="/next-instructor-form" passHref={true}>
            <a className="btn btn-box f-s-12" href="#">
              คลิกเพื่อแสดงความคิดเห็น
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}