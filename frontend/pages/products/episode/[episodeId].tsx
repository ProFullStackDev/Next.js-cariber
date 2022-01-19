import Footer from "../../../components/footer";
import Header from "../../../components/header";
import Img from "../../../components/image";
import { ProductEpisode } from "../../../components/static/interface";
import { VideoPlayer } from "../../../components/video-player";
import * as staticDataProduct from "../../../components/static/products";
import Link from "next/link";
import ProductBlogs from "../../../components/productBlogs";

interface EpisodeProps {
  episodeName: string
  episodeDescription: string[]
  productName: string
  fileUrl: string
  instructorImage: string
  instructorName: string
  instructorRemark: string
  videoId: string
  episodes: ProductEpisode[]
}

export default function Episode() {
  const episode: EpisodeProps =
  {
    episodeName: "Teaser",
    episodeDescription: [
      "‘ซิโก้’ เกียรติศักดิ์ เสนาเมือง อดีตนักฟุตบอลและหัวหน้าผู้ฝึกสอนทีมชาติไทยที่เคยพาทีมชาติไทยสร้างประวัติศาสตร์คว้าแชมป์อาเซียนคัพได้ถึง 2 สมัย",
      "เข้าใจหน้าที่ของนักเตะและโค้ช เรียนรู้แผนการเล่นและแท็กติกในเกมฟุตบอล และเห็นความสำคัญของการเล่นอย่างเป็นระบบ",
      "เล่าทุกรายละเอียด วิเคราะห์แท็กติกชัดๆ กับทุกเบื้องหลัง 90 นาทีในสนาม",
      "“เพราะฟุตบอลเป็นมากกว่ากีฬา”"
    ],
    productName: "The Art of Football Tactics",
    videoId: "3b7eeb9a034909fa3a5efc39d434a6fe",
    episodes: staticDataProduct.episodes,
    fileUrl: "https://www.cariber.co/resource_redirect/downloads/sites/163642/themes/2149288781/downloads/5kt5U0rKQeqyuJRSPSkL_Summary_Ep14.pdf",
    instructorImage: "/products/instructor-image.jpg",
    instructorName: "เกียรติศักดิ์ เสนาเมือง",
    instructorRemark: "เพราะความสำเร็จของฟุตบอลเกิดจากทีมเวิร์ค และกว่าที่จะมาเป็นทีมได้ต้องมีกระบวนการสร้าง"
  }

  return (
    <div className="episode">
      <Header />
      <div className="background-image">
        <div className="sizer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="player">
                  <div className="player-video">
                    <VideoPlayer key={episode.videoId} videoId={episode.videoId} />
                  </div>
                  <div className="player-nav">
                    <div className="media">
                      <div className="media-left">
                        <a className="btn btn-box disabled" href="#">
                          <i className="fa fa-chevron-left" aria-hidden="true"></i>
                          บทเรียนก่อนหน้า
                        </a>
                      </div>
                      <div className="media-body media-middle">
                        <p style={{marginBottom: "0px"}}>
                          บทเรียน 1 of 10
                        </p>
                      </div>
                      <div className="media-right">
                        <a className="btn btn-box" href="#">
                          บทเรียนถัดไป
                          <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="player-playlist">
                    <div className="playlist">
                      <div className="playlist-title">
                        <div className="media">
                          <div className="media-body media-middle">
                            <h2>{episode.productName}</h2>
                          </div>
                          <div className="media-right">
                            <h3>{episode.episodes.length} บทเรียน</h3>
                          </div>
                        </div>
                      </div>
                      <div className="playlist-body">
                        {episode.episodes.map((value, index) => {
                          return (
                            <a key={index} className="media track" href="#">
                              <div className="media-left media-middle">
                                {index === 0 ? (
                                  <p className="track-count active">
                                    <i className="fa fa-play" style={{ color: "#e74e25" }}></i>
                                  </p>
                                ) : (
                                  <p className="track-count">{index + 1}</p>
                                )}
                              </div>
                              <div className="media-left media-middle">
                                <Img className="track-thumb"
                                  src={value.image}
                                  width={70}
                                  height={39.3833}
                                />
                              </div>
                              <div className="media-body media-middle">
                                <div className="track-title">
                                  {value.title}
                                  {(value.progress > 0 && value.progress < 100) && (
                                    <div className="progress">
                                      <div className="progress-outer">
                                        <div className="progress-inner" style={{ width: `${value.progress}%` }} />
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="media-right media-middle">
                                {value.progress === 100 && (
                                  <div>
                                    <i className="fa fa-check" style={{ color: "#e74e25" }}></i>
                                  </div>
                                )}
                              </div>
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="panel">
                  <div className="panel-body">
                    <div className="panel-block">
                      <h1 className="panel-title">
                        {episode.episodeName}
                      </h1>
                      <Link href="/products/the-art-of-football-tactics" passHref={true}>
                        <a>
                          <h5 className="panel-sub-title">
                            {episode.productName}
                          </h5>
                        </a>
                      </Link>
                      <br />
                      <span className="panel-text">
                        {episode.episodeDescription.map((value, index) => {
                          return (
                            <h6 key={index} style={{ color: "black" }}>
                              {value}
                            </h6>
                          )
                        })}
                        <br />
                        <h6 style={{ color: "black" }}>
                          *หากผู้ใดละเมิดนำงานไปเผยแพร่ คัดลอก หรือดัดแปลงไม่ว่าบางส่วนหรือทั้งหมดจะถูกดำเนินคดีตามกฎหมาย
                        </h6>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <ProductBlogs progressBlog={false}
                productName={episode.productName}
                fileUrl={episode.fileUrl}
                instructorImage={episode.instructorImage}
                instructorName={episode.instructorName}
                instructorRemark={episode.instructorRemark} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}