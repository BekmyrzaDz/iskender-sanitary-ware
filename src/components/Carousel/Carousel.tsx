import { FC, useCallback, useEffect, useState } from "react"
import { EmblaCarouselType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import styles from "./Carousel.module.scss"
import {
  NextButton,
  PrevButton,
} from "../CarouselArrowButtons/CarouselArrowButtons"
import clsx from "clsx"
import { CarouselProps } from "./Carousel.props"

export const Carousel: FC<CarouselProps> = ({
  children,
  options,
  className,
}) => {
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
    <>
      <div className={styles.embla} ref={emblaRef}>
        <div className={clsx(styles.emblaContainer, className)}>{children}</div>
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
    </>
  )
}
