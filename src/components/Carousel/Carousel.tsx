import { ReactNode, FC, useCallback, useEffect, useState } from "react"
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import styles from "./Carousel.module.scss"
import {
  NextButton,
  PrevButton,
} from "../CarouselArrowButtons/CarouselArrowButtons"

interface ICarousel {
  options?: EmblaOptionsType
  children?: ReactNode
}

export const Carousel: FC<ICarousel> = ({ children, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

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
    <div>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>{children}</div>
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
  )
}
