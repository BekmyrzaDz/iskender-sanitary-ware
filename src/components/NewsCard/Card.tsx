import { Button } from "../Button"
import { illustration, Ellipse, EllipseBottom } from "../../assets"
import styles from "./Card.module.scss"

export const NewsCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardLeft}>
        <p className={styles.discount}>-50%</p>
        <p className={styles.description}>На кухонную мебель</p>
        <Button className={styles.button}>Подробнее</Button>
      </div>
      <div className={styles.cardRight}>
        <img
          className={styles.img}
          src={illustration}
          alt="News illustration"
        />
      </div>
      <img className={styles.ellipseOne} src={Ellipse} alt="Ellipse icon" />
      <img
        className={styles.ellipseTwo}
        src={EllipseBottom}
        alt="Ellipse icon"
      />
    </div>
  )
}
