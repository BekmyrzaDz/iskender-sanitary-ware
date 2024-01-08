import { ProductCard } from "../../../components"
import styles from "./SalesHits.module.scss"
import { Minus, Plus, arrawRight, arrowLeft } from "../../../assets"
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
    <div className={styles.salesHits}>
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
              <ProductCard className={styles.product} key={i}>
                <div className={styles.productTop}>
                  <img
                    className={styles.productImg}
                    src={salesHit.img}
                    alt="WateringCanHolder"
                  />
                  <h3 className={styles.productTitle}>{salesHit.title}</h3>
                </div>
                <div className={styles.productBottom}>
                  <p className={styles.productPrice}>{salesHit.price}</p>
                  <p className={styles.productStatus}>{salesHit.status}</p>
                  <div className={styles.productTypeWrapper}>
                    <div className={styles.circle}></div>
                    <p className={styles.productType}>{salesHit.type}</p>
                  </div>
                  <div className={styles.quantityWrapper}>
                    <div className={styles.minus}>
                      <img
                        className={styles.minusImg}
                        src={Minus}
                        alt="Minus icon"
                      />
                    </div>
                    <p className={styles.quantity}>{salesHit.quantity}</p>
                    <div className={styles.plus}>
                      <img
                        className={styles.plusImg}
                        src={Plus}
                        alt="Plus icon"
                      />
                    </div>
                  </div>
                </div>
              </ProductCard>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
