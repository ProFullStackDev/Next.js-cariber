import { CourseDetailEpisode } from "../static/interface"
import Accordion, { Color } from "../accordion"

export default function EpisodeAccordion({ totalHours, totalEpisodes, episodes }: CourseDetailEpisode) {
  return (
    <div className="background-dark">
      <div className="container">
        <div className="row align-items-center">
          <div className="block-type-text text-left col-12">
            <div className="row block box-shadow-none justify-content-center">
              <h1 className="lg-mr-space row justify-content-center">
                <strong>
                  <span className="color-smooth">
                    ⌛ {totalHours} ชั่วโมง
                  </span>
                </strong>
              </h1>
              <h1 className="row justify-content-center">
                <strong>
                  <span className="color-smooth">
                    📚 {totalEpisodes} บทเรียน
                  </span>
                </strong>
              </h1>
            </div>
          </div>
          {episodes && episodes.map((value, index) => {
            return (
              <Accordion key={index} title={`EP${index + 1}: ${value.episode_name}`} description={value.description} col={4} color={Color.dark} />
            )
          })}
        </div>
      </div>
    </div>
  )
}