import { NewsCard, Carousel } from "../../../../components"
import styles from "./News.module.scss"
import { EmblaOptionsType } from "embla-carousel"

const OPTIONS: EmblaOptionsType = {
  slidesToScroll: "auto",
  containScroll: "trimSnaps",
}

export const News = () => {
  return (
    <section className={styles.news}>
      <div className={styles.container}>
        <div className={styles.newsInner}>
          <h3 className={styles.title}>Новости</h3>
          <Carousel className={styles.emblaContainer} options={OPTIONS}>
            <div className={styles.emblaSlide}>
              <NewsCard />
            </div>
            <div className={styles.emblaSlide}>
              <NewsCard />
            </div>
            <div className={styles.emblaSlide}>
              <NewsCard />
            </div>
            <div className={styles.emblaSlide}>
              <NewsCard />
            </div>
            <div className={styles.emblaSlide}>
              <NewsCard />
            </div>
            <div className={styles.emblaSlide}>
              <NewsCard />
            </div>
            <div className={styles.emblaSlide}>
              <NewsCard />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
