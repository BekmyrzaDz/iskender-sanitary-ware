import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react"
import { EmblaOptionsType } from "embla-carousel"

export interface CarouselProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  options?: EmblaOptionsType
  children: ReactNode
}
