import { Carousel, Product } from "../../../../components"
import { AuctionItemsData } from "./AuctionItemsData"
import styles from "./AuctionItems.module.scss"

import { EmblaOptionsType } from "embla-carousel"
import { Link } from "react-router-dom"

const OPTIONS: EmblaOptionsType = {
  slidesToScroll: "auto",
  containScroll: "trimSnaps",
}

export const AuctionItems = () => {
  return (
    <div className={styles.auctionItems}>
      <div className={styles.container}>
        <div className={styles.auctionItemsInner}>
          <div className={styles.auctionItemsTop}>
            <h2 className={styles.title}>Аукционные товары</h2>
            <Link className={styles.catalog} to="catalog">
              перейти в каталог
            </Link>
          </div>
          <Carousel className={styles.carouselContainer} options={OPTIONS}>
            {AuctionItemsData.map((auctionItem) => (
              <div className={styles.emblaSlide} key={auctionItem.id}>
                <Product
                  img={auctionItem.img}
                  price={auctionItem.price}
                  discount={auctionItem.discount}
                  quantity={auctionItem.quantity}
                  status={auctionItem.status}
                  title={auctionItem.title}
                  type={auctionItem.type}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
