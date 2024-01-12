import { FC, useState } from "react"
import { Card } from "../Card/Card"
import { Minus, Plus, favorite, activeFavorite } from "../../assets"
import styles from "./Product.module.scss"

interface ISalesHits {
  img: string
  title: string
  price: string
  status: string
  type: string
  quantity: number
}

export const Product: FC<ISalesHits> = ({
  img,
  title,
  price,
  status,
  type,
  quantity,
}) => {
  const [salesHitQuantity, setSalesHitQuantity] = useState<number>(quantity)
  const [active, setActive] = useState<boolean>(false)

  const handleSalesHitQuantityPlus = () =>
    setSalesHitQuantity(salesHitQuantity + 1)

  const handleSalesHitQuantityMinus = () => {
    if (salesHitQuantity > 0) {
      setSalesHitQuantity(salesHitQuantity - 1)
    }
  }

  const handleActive = () => setActive(!active)

  return (
    <Card className={styles.product}>
      <div className={styles.productTop}>
        <img className={styles.productImg} src={img} alt="WateringCanHolder" />
        {active ? (
          <img
            className={styles.favorite}
            src={activeFavorite}
            alt="Active favorite icon"
            onClick={handleActive}
          />
        ) : (
          <img
            className={styles.favorite}
            src={favorite}
            alt="Favorite icon"
            onClick={handleActive}
          />
        )}
        <h3 className={styles.productTitle}>{title}</h3>
      </div>
      <div className={styles.productBottom}>
        <p className={styles.productPrice}>{price}</p>
        <p className={styles.productStatus}>{status}</p>
        <div className={styles.productTypeWrapper}>
          <div className={styles.circle}></div>
          <p className={styles.productType}>{type}</p>
        </div>
        <div className={styles.quantityWrapper}>
          <div className={styles.minus} onClick={handleSalesHitQuantityMinus}>
            <img className={styles.minusImg} src={Minus} alt="Minus icon" />
          </div>
          <p className={styles.quantity}>{salesHitQuantity}</p>
          <div className={styles.plus} onClick={handleSalesHitQuantityPlus}>
            <img className={styles.plusImg} src={Plus} alt="Plus icon" />
          </div>
        </div>
      </div>
    </Card>
  )
}
