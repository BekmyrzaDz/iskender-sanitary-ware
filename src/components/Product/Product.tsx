import { FC, useState } from "react"
import { Card } from "../Card/Card"
import { favorite, activeFavorite } from "../../assets"
import styles from "./Product.module.scss"
import clsx from "clsx"

interface ISalesHits {
  img: string
  title: string
  price: string
  discount?: string
  status: string
  type: string
  quantity: number
}

export const Product: FC<ISalesHits> = ({
  img,
  title,
  price,
  discount,
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
            className={styles.activeFavorite}
            src={favorite}
            alt="Favorite icon"
            onClick={handleActive}
          />
        )}
        <h3 className={styles.productTitle}>{title}</h3>
      </div>
      <div className={styles.productBottom}>
        <div className={styles.productPrices}>
          <p
            className={clsx(styles.productPrice, {
              [styles.productPriceWithDiscount]: discount,
            })}
          >
            {price}
          </p>
          <p className={styles.productPriceDiscount}>{discount}</p>
        </div>
        <p className={styles.productStatus}>{status}</p>
        <div className={styles.productTypeWrapper}>
          <div className={styles.circle}></div>
          <p className={styles.productType}>{type}</p>
        </div>
        <div className={styles.quantityWrapper}>
          <div className={styles.minus} onClick={handleSalesHitQuantityMinus}>
            <svg
              className={styles.minusImg}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="inherit">
                <path d="M19 11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z" />
              </g>
            </svg>
          </div>
          <p className={styles.quantity}>{salesHitQuantity}</p>
          <div className={styles.plus} onClick={handleSalesHitQuantityPlus}>
            <svg
              className={styles.plus}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="inherit">
                <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </Card>
  )
}
