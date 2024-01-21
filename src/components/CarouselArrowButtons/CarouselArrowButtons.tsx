import React, { PropsWithChildren } from "react"
import clsx from "clsx"
import styles from "./CarouselArrowButtons.module.scss"

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, className, ...restProps } = props

  return (
    <button
      className={clsx(styles.emblaButton, styles.emblaButtonPrev, className)}
      type="button"
      {...restProps}
    >
      <svg
        className={styles.emblaButtonSvg}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.8125 29.9L15.6625 21.75C14.7 20.7875 14.7 19.2125 15.6625 18.25L23.8125 10.1"
          stroke="#171717"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </button>
  )
}

export const NextButton: React.FC<PropType> = (props) => {
  const { children, className, ...restProps } = props

  return (
    <button
      className={clsx(styles.emblaButton, styles.emblaButtonNext, className)}
      type="button"
      {...restProps}
    >
      <svg
        className={styles.emblaButtonSvg}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.1875 10.1L24.3375 18.25C25.3 19.2125 25.3 20.7875 24.3375 21.75L16.1875 29.9"
          stroke="#171717"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </button>
  )
}
