import { DetailedHTMLProps, ImgHTMLAttributes } from "react"

export interface HighlightProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  image: string
  text: string
}
