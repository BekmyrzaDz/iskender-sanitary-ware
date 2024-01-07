import { DetailedHTMLProps, ImgHTMLAttributes } from "react"

export interface CategoryProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  image: string
  title: string
  text: string
}
