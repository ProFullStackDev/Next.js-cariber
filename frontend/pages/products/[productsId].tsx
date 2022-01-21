import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Img from "../../components/image";
import Pagination from "../../components/pagination";
import ProductBlogs from "../../components/productBlogs";
import { ProductEpisode } from "../../components/static/interface";
import * as staticData from "../../components/static/products"

interface ProductProp {
  productRemark: string,
  productImage: string,
  productName: string,
  fileUrl: string,
  instructorImage: string,
  instructorName: string,
  instructorRemark: string,
  episodes: ProductEpisode[]
}

export default function Products({ product }: { product: ProductProp }) {
  const router = useRouter()

  return (
    <div className="products">
      <Header />
      <div className="background-products">
        <div className="sizer background-products-overlap">
          <div className="container content-center">
            <div className="col-7">
              <div className="panel-block">
                <h1 className="text-white">
                  {product.productName}
                </h1>
                <h6 className="text-white">
                  {product.productRemark}
                </h6>
              </div>
              <a className="btn btn-box" href="#">
                เริ่มเรียนคอร์ส
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="background-image">
        <div className="sizer">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="panel-body" style={{ backgroundColor: "white" }}>
                  <h5 className="syllabus-heading">
                    {product.productName}
                  </h5>
                  {product.episodes.map((value, index) => {
                    return (
                      <div key={`product-item-${index}`} className="syllabus-item">
                        <Link href="/products/episode/1" passHref={true}>
                          <a>
                            <div className="media">
                              <div className="media-left">
                                <div className="syllabus-img">
                                  <Img src={value.image}
                                    width={125}
                                    height={80}
                                    alt={value.title}
                                  />
                                </div>
                              </div>
                              <div className="media-body">
                                <p className="syllabus-title">
                                  {value.title}
                                </p>
                                <p className="syllabus-text">
                                  {value.description}
                                </p>
                              </div>
                              <div className="media-right media-middle col-2">
                                {value.progress ? (
                                  <div className="md-pd-tb-10 md-3cm">
                                    {value.progress === 100 ? (<div className="check-item">
                                      <i className="fa fa-check" style={{ color: "#e74e25" }}></i>
                                    </div>) : (
                                      <div className="progress">
                                        <div className="progress-outer">
                                          <div className="progress-inner" style={{ width: `${value.progress}%` }} />
                                        </div>
                                      </div>
                                    )}
                                  </div>) : (<div></div>)}
                              </div>
                            </div>
                          </a>
                        </Link>
                      </div>
                    )
                  })
                  }
                  {Number(router.query.page) ? (
                    <Pagination page={Number(router.query.page)} pageCount={2} />
                  ) : (
                    <a href="?page=1"
                      style={{ color: "#e74e25", fontSize: "1rem", cursor: "pointer" }}>
                      บทเรียนถัดไป &gt;&gt;&gt;
                    </a>
                  )}
                </div>
              </div>
              <ProductBlogs progressBlog={true}
                productImage={product.productImage}
                productName={product.productName}
                fileUrl={product.fileUrl}
                instructorImage={product.instructorImage}
                instructorName={product.instructorName}
                instructorRemark={product.instructorRemark} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { productsId: "the-art-of-football-tactics" } }
    ],
    fallback: false
  };
}

export async function getStaticProps() {
  return {
    props: {
      product: {
        productRemark: "เกียรติศักดิ์ เสนาเมือง หรือ ‘ซิโก้’ อดีตนักฟุตบอลและหัวหน้าผู้ฝึกสอนทีมชาติไทย ศูนย์หน้าระดับตำนานผู้ทำประตูสูงสุดในนามทีมชาติอันดับ 16 ของโลก ด้วยจำนวน 71 ประตูใน 134 แมตช์ และโค้ชผู้นำพาทีมชาติไทยกู้ศรัทธาจากแฟนบอลจนสร้างประวัติศาสตร์คว้าแชมป์อาเซียนคัพ หรือ AFF ซูซูกิคัพ ได้ถึง 2 สมัย",
        productImage: "/library/my-course-3.jpg",
        productName: "The Art of Football Tactics",
        fileUrl: "https://www.cariber.co/resource_redirect/downloads/sites/163642/themes/2149288781/downloads/5kt5U0rKQeqyuJRSPSkL_Summary_Ep14.pdf",
        instructorImage: "/products/instructor-image.jpg",
        instructorName: "เกียรติศักดิ์ เสนาเมือง",
        instructorRemark: "เพราะความสำเร็จของฟุตบอลเกิดจากทีมเวิร์ค และกว่าที่จะมาเป็นทีมได้ต้องมีกระบวนการสร้าง",
        episodes: staticData.episodes
      }
    }
  };
}