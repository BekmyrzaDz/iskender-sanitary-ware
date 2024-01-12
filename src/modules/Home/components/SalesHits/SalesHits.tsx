import { Product } from "../../../../components"
import styles from "./SalesHits.module.scss"
import { arrawRight, arrowLeft } from "../../../../assets"
import { salesHitsData } from "./SalesHitsData"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./SalesHits.css"

export const SalesHits = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  }

  return (
    <section className={styles.salesHits}>
      <div className={styles.container}>
        <div className={styles.salesHitsInner}>
          <h2 className={styles.title}>Хиты продаж</h2>
          <img className={styles.arrowLeft} src={arrowLeft} alt="Arrow left" />
          <img
            className={styles.arrowRight}
            src={arrawRight}
            alt="Arrow right"
          />
          <Slider className={styles.wrapper} {...settings}>
            {salesHitsData.map((salesHit, i) => (
              <Product
                key={i}
                img={salesHit.img}
                price={salesHit.price}
                quantity={salesHit.quantity}
                status={salesHit.status}
                title={salesHit.title}
                type={salesHit.type}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
