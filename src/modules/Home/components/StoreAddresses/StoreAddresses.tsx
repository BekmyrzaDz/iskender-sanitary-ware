import { Card } from "../../../../components"
import styles from "./StoreAddresses.module.scss"
import { storeAdressData } from "./StoreAddressesData"

export const StoreAddresses = () => {
  return (
    <section className={styles.storeAddresses}>
      <div className={styles.container}>
        <div className={styles.storeAddressesInner}>
          <h2 className={styles.title}>Адреса магазинов</h2>
          <div className={styles.cardWrapper}>
            {storeAdressData.map((storeAdress) => (
              <Card className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.cardTopLeft}>
                    <img
                      className={styles.logoImg}
                      src={storeAdress.logoImg}
                      alt="Adress logo"
                    />
                    <div className={styles.nameAndLink}>
                      <h3 className={styles.name}>{storeAdress.name}</h3>
                      <a className={styles.link} href="#">
                        {storeAdress.text}
                      </a>
                    </div>
                  </div>
                  <img
                    className={styles.arrow}
                    src={storeAdress.arrowUpImg}
                    alt="Arrow Up image"
                  />
                </div>
                <div className={styles.line}></div>
                <div className={styles.cardMiddle}>
                  <img
                    className={styles.locationImg}
                    src={storeAdress.locationImg}
                    alt="Location image"
                  />
                  <p className={styles.locationText}>{storeAdress.location}</p>
                </div>
                <div className={styles.locationBottom}>
                  <div className={styles.locationLeft}>
                    <img
                      className={styles.clockImg}
                      src={storeAdress.clockImg}
                      alt="Clock image"
                    />
                    <p className={styles.clockText}>{storeAdress.clock}</p>
                  </div>
                  <div className={styles.locationRight}>
                    <img
                      className={styles.phoneImg}
                      src={storeAdress.phoneImg}
                      alt="Phone image"
                    />
                    <p className={styles.phoneText}>{storeAdress.phone}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
