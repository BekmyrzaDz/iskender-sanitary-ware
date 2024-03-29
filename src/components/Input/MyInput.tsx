import { FC } from "react"
import { InputProps } from "./MyInput.props"
import { clsx } from "clsx"

import styles from "./MyInput.module.scss"

export const Input: FC<InputProps> = ({
  className,
  icon,
  quantity,
  ...props
}) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <img className={styles.img} src={icon} alt="Search icon" />
      <input
        className={styles.input}
        {...props}
        placeholder={props.placeholder}
      />
      <div className={styles.quantity}>{quantity}</div>
    </div>
  )
}
