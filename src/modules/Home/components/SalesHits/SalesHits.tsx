import { Product, Carousel } from "../../../../components"
import styles from "./SalesHits.module.scss"
import { salesHitsData } from "./SalesHitsData"

import { EmblaOptionsType } from "embla-carousel"

const OPTIONS: EmblaOptionsType = {
  slidesToScroll: "auto",
  containScroll: "trimSnaps",
}

export const SalesHits = () => {
  return (
    <section className={styles.salesHits}>
      <div className={styles.container}>
        <div className={styles.salesHitsInner}>
          <h2 className={styles.title}>Хиты продаж</h2>
          <Carousel className={styles.emblaContainer} options={OPTIONS}>
            {salesHitsData.map((salesHit, i) => (
              <div className={styles.emblaSlide}>
                <Product
                  key={i}
                  img={salesHit.img}
                  price={salesHit.price}
                  quantity={salesHit.quantity}
                  status={salesHit.status}
                  title={salesHit.title}
                  type={salesHit.type}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}
