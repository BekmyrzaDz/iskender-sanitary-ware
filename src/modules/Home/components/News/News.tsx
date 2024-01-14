import { useCallback, useEffect, useState } from "react"
import { NewsCard, NextButton, PrevButton } from "../../../../components"
import styles from "./News.module.scss"
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"

const OPTIONS: EmblaOptionsType = {
  slidesToScroll: "auto",
  containScroll: "trimSnaps",
}

export const News = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className={styles.news}>
      <div className={styles.container}>
        <div className={styles.newsInner}>
          <h3 className={styles.title}>Новости</h3>
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.emblaContainer}>
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
            </div>
          </div>
          <div className={styles.emblaButtons}>
            <PrevButton
              className={styles.prevButton}
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
            />
            <NextButton
              className={styles.nextButton}
              onClick={scrollNext}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
