import { FC } from "react"
import { clsx } from "clsx"
import { HighlightProps } from "./Highlight.props"
import styles from "./Highlight.module.scss"

export const Highlight: FC<HighlightProps> = ({
  image,
  className,
  text,
  ...props
}) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <img className={styles.img} src={image} {...props} />
      <p className={styles.text}>{text}</p>
    </div>
  )
}
