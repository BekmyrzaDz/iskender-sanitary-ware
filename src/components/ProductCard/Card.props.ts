import { DetailedHTMLProps, ImgHTMLAttributes, ReactNode } from "react"

export interface ProductProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  children: ReactNode
}
