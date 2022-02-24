import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { courseLmsApi } from "../../apiNest/courseLmsApi";
import { episodeApi } from "../../apiNest/episodeApi";
import { CourseLms, EpisodeLms } from "../../apiNest/models/content/courseLms";
import Accordion, { Color, Icon } from "../../components/accordion";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Img from "../../components/image";
import Pagination from "../../components/pagination";
import ProductSale from "../../components/product/productSale";
import ProductBlogs from "../../components/productBlogs";
import VideoPlayer from "../../components/videoPlayer";
import cutCloudflareVideoId from "../../functions/cutCloudflareVideoId";

export default function Product() {
  const [courseLms, setCourseLms] = useState({
    id: 0,
    speaker_name: "",
    course_name: "",
    description: "",
    total_hours: "",
    total_lessons: "",
    order_link: "",
    header: "",
    thumbnail_image: "",
    lms_id: 0,
    createDate: "",
    updateDate: "",
    deletedAt: "",
    episode: [{
      id: 0,
      episode_number: 0,
      episode_name: "",
      description: "",
      link_video: "",
      thumbnail_image: "",
      lms_id: 0,
      is_free_trial: false,
      createDate: "",
      updateDate: "",
      deletedAt: "",
    }],
  });
  const [episodeLms, setEpisodeLms] = useState({
    id: 0,
    episode_number: 0,
    episode_name: "",
    description: "",
    link_video: "",
    thumbnail_image: "",
    lms_id: 0,
    is_free_trial: false,
    createDate: "",
    updateDate: "",
    deletedAt: "",
  });
  const router = useRouter();
  const announcement = "ตอนนี้คุณกำลังอยู่ในโหมดทดลองเรียนฟรี เนื้อหาบางส่วนมีการถูกล็อกไว้\nคุณสามารถซื้อคอร์สนี้เพื่อดูเนื้อหาทั้งหมดในคอร์สเรียน";
  const { productId } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    fetchData();
  }, [router.isReady]);

  async function setEpisode(id: number) {
    const data = await episodeApi(id.toString()) as EpisodeLms;
    setEpisodeLms(data);
  }

  async function fetchData() {
    const data = await courseLmsApi(productId!.toString()) as CourseLms;
    setCourseLms(data);
    setEpisode(data.episode[0].id);
  }

  return (
    <div className="product">
      <Header />
      <div className="col-12 m-0">
        <div className="container sm-p-x-0">
          <div className="nev-product">
            <div className="left-nev-product">
              <h6 className="color-primary">
                คอร์สเรียน : {courseLms.course_name}
              </h6>
              <p className="f-s-14 m-b-0 color-black">
                สอนโดย {courseLms.speaker_name}
              </p>
            </div>
            <div className="right-nev-product sm-none">
              <a className="btn btn-not-focus btn-small m-t-0" href="">
                ซื้อคอร์สนี้
              </a>
              <a className="btn btn-small m-t-0" href="">
                ซื้อแพ็คเกจรายปี
              </a>
            </div>
            <div className="right-nev-product lg-none">
              <ProductSale />
            </div>
          </div>
        </div>
      </div>
      <div className="background-image">
        <div className="sizer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <button className="btn-link f-s-16 row" onClick={router.back}>
                  <i className="fal fa-chevron-left m-r-7"></i>
                  <h5 className="color-black m-b-0">
                    ย้อนกลับ
                  </h5>
                </button>
              </div>
              <div className="col-12">
                <div className="episode-title">
                  <h5 className="color-black m-0">
                    {episodeLms.episode_name}
                  </h5>
                </div>
              </div>
              <div className="col-12">
                <div className="product-announcement">
                  <i className="fal fa-megaphone p-t-5"></i>
                  <div className="p-l-10">
                    <span>
                      {announcement}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 p-b-20">
                <div className="player">
                  <div className="player-video">
                    {episodeLms.link_video && <VideoPlayer videoId={cutCloudflareVideoId(episodeLms.link_video)} thumbnailImage={episodeLms.thumbnail_image}/>}
                  </div>
                  <div className="player-nav">
                    <div className="media">
                      <div className="media-left-under-player">
                        <a className="btn btn-box btn-small disabled" href="#">
                          <i className="fa fa-chevron-left" aria-hidden="true"></i>
                          บทเรียนก่อนหน้า
                        </a>
                      </div>
                      <div className="media-body media-middle">
                        <p className="m-b-0 hidden-xs-down">
                          บทเรียน 1 of 10
                        </p>
                      </div>
                      <div className="media-right">
                        <a className="btn btn-box btn-small" href="#">
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
                            <h2>{courseLms.course_name}</h2>
                          </div>
                          <div className="media-right">
                            <h3>{courseLms.episode.length} บทเรียน</h3>
                          </div>
                        </div>
                      </div>
                      <div className="playlist-body">
                        {courseLms.episode.map((value, index) => {
                          return (
                            <a key={index} className="media track" onClick={async () => {await setEpisode(value.id)}}>
                              <div className="media-left media-middle">
                                {value.episode_number === episodeLms.episode_number ? (
                                  <p className="track-count active">
                                    <i className="fa fa-play color-primary"></i>
                                  </p>
                                ) : (
                                  <p className="track-count">
                                    {value.episode_number}
                                  </p>
                                )}
                              </div>
                              <div className="media-left media-middle">
                                <Img className="track-thumb"
                                  src={"/product/product-2.jpg"}
                                  width={70}
                                  height={39.3833}
                                  alt={value.episode_name}
                                />
                              </div>
                              <div className="media-body media-middle">
                                <div className="track-title">
                                  {value.episode_name}
                                </div>
                              </div>
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 link-file">
                  <i className="fal fa-file-download color-primary"></i>
                  &nbsp;&nbsp;
                  <a href="">
                    ดาวน์โหลดเอกสารประกอบการเรียน
                  </a>
                </div>
              </div>
              <div className="col-8">
                {courseLms.episode.map((value, index) => {
                  return (<Accordion key={index}
                    title={value.episode_name}
                    description={value.description + "\n *หากผู้ใดละเมิดนำงานไปเผยแพร่ คัดลอก หรือดัดแปลงไม่ว่าบางส่วนหรือทั้งหมดจะถูกดำเนินคดีตามกฎหมาย"}
                    col={12}
                    icon={Icon.play}
                    color={Color.light}
                    button={{ callback: () => { setEpisode(value.id) }, text: `${0 ? (`${0 < 100 ? ("ดูต่อ") : ("ดูอีกครั้ง")}`) : ("รับชมเนื้อหา")}` }}
                    progress={0}
                  />)
                })
                }
                <Pagination page={Number(router.query.page)} pageCount={2} />
              </div>
              <ProductBlogs progressBlog={true}
                productImage={courseLms.thumbnail_image}
                productName={courseLms.course_name}
                instructorImage={courseLms.thumbnail_image}
                instructorName={courseLms.speaker_name}
                instructorRemark={courseLms.speaker_name} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}