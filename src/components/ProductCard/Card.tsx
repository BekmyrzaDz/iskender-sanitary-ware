import { FC } from "react"
import { clsx } from "clsx"
import { ProductProps } from "./Card.props"
import styles from "./Card.module.scss"

export const ProductCard: FC<ProductProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={clsx(styles.wrapper, className)} {...props}>
      {children}
    </div>
  )
}
