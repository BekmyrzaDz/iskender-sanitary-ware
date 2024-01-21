import { Carousel, Product } from "../../../../components"
import { AuctionItemsData } from "./AuctionItemsData"
import styles from "./AuctionItems.module.scss"

import { EmblaOptionsType } from "embla-carousel"

const OPTIONS: EmblaOptionsType = {
  slidesToScroll: "auto",
  containScroll: "trimSnaps",
}

export const AuctionItems = () => {
  return (
    <div className={styles.auctionItems}>
      <div className={styles.container}>
        <div className={styles.auctionItemsInner}>
          <h2 className={styles.title}>Аукционные товары</h2>
          <Carousel className={styles.carouselContainer} options={OPTIONS}>
            {AuctionItemsData.map((auctionItem, i) => (
              <div className={styles.emblaSlide}>
                <Product
                  key={i}
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
