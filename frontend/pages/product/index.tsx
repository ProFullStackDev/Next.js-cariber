import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getEpisodesAndQuiz } from "../../apiNest/courseLmsApi";
import { CourseLMS, Episodes, Evaluation, Quiz, ShowingType, } from "../../apiNest/models/content/courseLms";
import Accordion, { Color, Icon } from "../../components/accordion";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Img from "../../components/image";
import ProductSale from "../../components/product/productSale";
import ProductBlogs from "../../components/product/productBlogs";
import VideoPlayer from "../../components/videoPlayer";
import cutCloudflareVideoId from "../../functions/cutCloudflareVideoId";
import CourseEvaluation from "../../components/courseEvaluation";
import QuizSession from "../../components/quizSession";
import { episodeApi } from "../../apiNest/episodeApi";
import ButtonPartialLogin from "../../components/buttonPartialLogin";
import checkCoursePurchasedApi from "../../apiNest/checkCoursePurchasedApi";
import { annualPromotionApi, courseApi } from "../../apiStrapi/StrapiApiService";

export default function Product() {
  const [indexEpisodesOrQuiz, setIndexEpisodesOrQuiz] = useState<number>(0);
  const [courseLms, setCourseLms] = useState<CourseLMS>({} as CourseLMS);
  const [episodeLms, setEpisodeLms] = useState<Episodes>({} as Episodes);
  const [showingType, setShowingType] = useState<ShowingType>(ShowingType.episode);
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const router = useRouter();
  const announcement = "ตอนนี้คุณกำลังอยู่ในโหมดทดลองเรียนฟรี เนื้อหาบางส่วนมีการถูกล็อกไว้\nคุณสามารถซื้อคอร์สนี้เพื่อดูเนื้อหาทั้งหมดในคอร์สเรียน";
  const [saleHeader, setSaleHeader] = useState(
    {
      is_purchased: false,
      has_annual: false,
    }
  );
  const [saleSku, setSaleSku] = useState(
    {
      courseSku: "",
      annualSku: ""
    }
  )
  const { proId } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    fetchData().then(() => { });
  }, [router.isReady]);

  async function setEpisodeOrQuiz(passedData: Episodes | Quiz | Evaluation, index: number) {
    setIndexEpisodesOrQuiz(index);
    setShowingType(passedData.type);
    switch (passedData.type) {
      case ShowingType.quiz:
        setQuiz(passedData as Quiz);
        break;
      case ShowingType.episode:
        const data = await episodeApi(passedData.id.toString()) as Episodes;
        setEpisodeLms(data);
        setQuiz(null);
        break;
      case ShowingType.courseEvaluation:
        break;
    }
  }

  function getTrackName(value: Episodes | Quiz | Evaluation) {
    let name = '';
    switch (value.type) {
      case ShowingType.episode:
        const ep = value as Episodes;
        name = ep.episode_name;
        break;
      case ShowingType.quiz:
        const quiz = value as Quiz;
        name = `Quiz For Episode ${quiz.episode_number}`;
        break;
      case ShowingType.courseEvaluation:
        name = 'Post Course Evaluation';
        break;
    }
    return name;
  }

  async function fetchData() {
    const data = await getEpisodesAndQuiz(proId!.toString()) as CourseLMS;
    if (data.statusCode && data.statusCode === 500) {
      router.replace("/404")
      return
    }
    data.episodes_list.map(item => {
      item.type = ("question" in item && item.question) ? ShowingType.quiz : ShowingType.episode;
      return item;
    });
    data.episodes_list.push(new Evaluation());
    data.episodes_list[0] && await setEpisodeOrQuiz(data.episodes_list[0], 0);
    await setCourseLms(data);
    await checkCoursePurchased(data.id);
    await setSku(data.lms_id);
  }

  const setSku = async (lms_id: number) => {
    const annual = await annualPromotionApi();
    const course = await courseApi(lms_id.toString());
    setSaleSku({ courseSku: course?.data?.order_sku || "", annualSku: annual?.data?.attributes?.sku || "" });
  }

  const checkCoursePurchased = async (id: number) => {
    checkCoursePurchasedApi(id).then((value) => {
      setSaleHeader(value!);
    });
  }

  function restart() {
    setEpisodeOrQuiz(courseLms.episodes_list[0], 0).then(() => { });
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
              {!saleHeader.is_purchased && <ButtonPartialLogin
                sku={saleSku.courseSku}
                class={"btn btn-not-focus btn-small m-t-0"}
                text={"ซื้อคอร์สนี้"} />}
              {!saleHeader.has_annual && <ButtonPartialLogin
                sku={saleSku.annualSku}
                class={"btn btn-small m-t-0"}
                text={"ซื้อแพ็คเกจรายปี"} />}
              {saleHeader.has_annual && <ButtonPartialLogin
                sku={saleSku.annualSku}
                class={"btn btn-small m-t-0"}
                text={"ต่อสมาชิกแพ็คเกจรายปี"} />}
            </div>
            <div className="right-nev-product ipad-none lg-none">
              <ProductSale saleHeader={saleHeader} saleSku={saleSku} />
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
                  <i className="fal fa-chevron-left m-r-7" />
                  <h5 className="color-black m-b-0">
                    ย้อนกลับ
                  </h5>
                </button>
              </div>
              <div className="col-12">
                <div className="episode-title">
                  <h5 className="color-black m-0">
                    {episodeLms?.episode_name}
                  </h5>
                </div>
              </div>
              <div className="col-12">
                <div className="product-announcement">
                  <i className="fal fa-megaphone p-t-5" />
                  <div className="p-l-10">
                    <span>
                      {announcement}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 p-b-20">
                <div className="player">
                  {
                    showingType === ShowingType.episode &&
                    <>
                      <div className="player-video">
                        {episodeLms?.link_video &&
                          <VideoPlayer props={{
                            video_id: cutCloudflareVideoId(episodeLms.link_video),
                            video_thumbnail: { url: episodeLms.thumbnail_image }
                          }} />
                        }
                      </div>
                    </>
                  }
                  {showingType === ShowingType.quiz &&
                    <>
                      <div className="quiz-session">
                        <QuizSession course={courseLms}
                          restart={restart}
                          quiz={quiz} />
                      </div>
                    </>
                  }
                  {showingType === ShowingType.courseEvaluation &&
                    <>
                      <div className="quiz-session">
                        <CourseEvaluation course={courseLms}
                          restart={restart} />
                      </div>
                    </>
                  }
                  <div className="player-nav">
                    <div className="media">
                      <div className="media-left-under-player">
                        <button className="btn btn-box btn-small"
                          disabled={indexEpisodesOrQuiz === 0}
                          onClick={async () => { await setEpisodeOrQuiz(courseLms?.episodes_list[indexEpisodesOrQuiz - 1], indexEpisodesOrQuiz - 1) }}>
                          <i className="fa fa-chevron-left" aria-hidden="true" />
                          บทเรียนก่อนหน้า
                        </button>
                      </div>
                      <div className="media-body media-middle">
                        <p className="m-b-0 hidden-xs-down">
                          บทเรียน {indexEpisodesOrQuiz + 1} of {courseLms?.episodes_list?.length}
                        </p>
                      </div>
                      <div className="media-right">
                        <button className="btn btn-box btn-small"
                          disabled={indexEpisodesOrQuiz === courseLms?.episodes_list?.length - 1}
                          onClick={async () => { await setEpisodeOrQuiz(courseLms?.episodes_list[indexEpisodesOrQuiz + 1], indexEpisodesOrQuiz + 1) }}>
                          บทเรียนถัดไป
                          <i className="fa fa-chevron-right" aria-hidden="true" />
                        </button>
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
                            <h3>{courseLms.episodes_list?.length} บทเรียน</h3>
                          </div>
                        </div>
                      </div>
                      <div className="playlist-body">
                        {courseLms.episodes_list?.map((value, index) => {
                          return (
                            <a key={index}
                              className="media track"
                              onClick={async () => { await setEpisodeOrQuiz(value, index) }}>
                              <div className="media-left media-middle">
                                {index === indexEpisodesOrQuiz ? (
                                  <p className="track-count active">
                                    <i className="fa fa-play color-primary" />
                                  </p>
                                ) : (
                                  <p className="track-count">
                                    {index + 1}
                                  </p>
                                )}
                              </div>
                              <div className="media-left media-middle d-flex align-items-center">
                                <Img className="track-thumb"
                                  src={"thumbnail_image" in value ? value.thumbnail_image : ''}
                                  width={70}
                                  height={39.3833}
                                  alt={"episode_name" in value ? value.episode_name : "thumbnail image"}
                                />
                              </div>
                              <div className="media-body media-middle">
                                <div className="track-title">
                                  {getTrackName(value)}
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
                  <i className="fal fa-file-download color-primary" />
                  &nbsp;&nbsp;
                  <a target="_blank" href={courseLms.asset_download} rel="noopener noreferrer">
                    ดาวน์โหลดเอกสารประกอบการเรียน
                  </a>
                </div>
              </div>
              <div className="col-8">
                {courseLms.episodes_list?.map((value, index) => {
                  return (
                    <div key={index}>
                      {value.type === ShowingType.episode && (
                        <Accordion
                          title={getTrackName(value)}
                          description={"description" in value
                            ? value.description + "\n *หากผู้ใดละเมิดนำงานไปเผยแพร่ คัดลอก หรือดัดแปลงไม่ว่าบางส่วนหรือทั้งหมดจะถูกดำเนินคดีตามกฎหมาย"
                            : ''}
                          col={12}
                          icon={Icon.play}
                          color={Color.light}
                          button={{
                            callback: () => {
                              setEpisodeOrQuiz(value, index).then(() => { })
                            }, text: `${0 ? (`${0 < 100 ? ("ดูต่อ") : ("ดูอีกครั้ง")}`) : ("รับชมเนื้อหา")}`
                          }}
                          progress={0}
                        />
                      )}
                    </div>
                  )
                })
                }
              </div>
              <ProductBlogs progressBlog={true}
                productImage={courseLms.thumbnail_image}
                productName={courseLms.course_name}
                instructorImage={courseLms.instructor?.profile_image}
                instructorName={courseLms.speaker_name}
                instructorRemark={courseLms.instructor?.idiom} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}