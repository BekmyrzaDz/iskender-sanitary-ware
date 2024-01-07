import { Highlight } from "../../../components"
import { HighlightData } from "./HighlightData"
import styles from "./Highlights.module.scss"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const Highlights = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 14,
    slidesToScroll: 14,
  }

  return (
    <div className={styles.highlights}>
      <div className={styles.container}>
        <div className={styles.highlightsInner}>
          <Slider {...settings}>
            {HighlightData.map((highlight, i) => (
              <Highlight
                key={i}
                image={highlight.image}
                text={highlight.text}
                alt={highlight.alt}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
