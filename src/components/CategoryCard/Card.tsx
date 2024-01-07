import { FC } from "react"
import { clsx } from "clsx"
import { CategoryProps } from "./Card.props"
import styles from "./Card.module.scss"

export const CategoryCard: FC<CategoryProps> = ({
  className,
  image,
  title,
  text,
  ...props
}) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.top}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
      <img className={styles.img} src={image} {...props} />
    </div>
  )
}
