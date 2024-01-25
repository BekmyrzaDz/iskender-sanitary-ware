import { Link } from "react-router-dom"
import {
  Logo,
  appStore,
  googlePlay,
  logoFacebook,
  logoInstagram,
  whatsApp,
} from "../../../../assets"
import { Button } from "../../../../components"
import styles from "./Footer.module.scss"

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerInner}>
          <div className={styles.footerTop}>
            <div className={styles.about}>
              <img className={styles.logo} src={Logo} alt="Logo" />
              <p className={styles.aboutText}>
                Первый отечественный бренд Iskender на рынке сантехники от
                компании ОсОО «Стройдом.кг»
              </p>
              <div className={styles.stores}>
                <img
                  className={styles.appStoreImg}
                  src={appStore}
                  alt="App Store icon"
                />
                <div className={styles.googlePlayImgWrapper}>
                  <img
                    className={styles.googlePlayImg}
                    src={googlePlay}
                    alt="Google Play icon"
                  />
                </div>
              </div>
            </div>
            <div className={styles.address}>
              <h5 className={styles.title}>Адреса</h5>
              <div className={styles.addressList}>
                <div className={styles.item}>
                  <p className={styles.name}>ЭлитСтрой</p>
                  <p className={styles.street}>ул. Ден-Сяопина 18/1</p>
                </div>
                <div className={styles.item}>
                  <p className={styles.name}>Баткен</p>
                  <p className={styles.street}>ул. Льва-Толстого 19</p>
                </div>
                <div className={styles.item}>
                  <p className={styles.name}>ТааТан</p>
                  <p className={styles.street}>ул. Лермонтова 6</p>
                </div>
              </div>
            </div>
            <div className={styles.company}>
              <h5 className={styles.title}>Компания</h5>
              <ul className={styles.companyList}>
                <li className={styles.item}>
                  <Link to="/catalog">Каталог</Link>
                </li>
                <li className={styles.item}>
                  <Link to="/favorites">Избранное</Link>
                </li>
                <li className={styles.item}>
                  <Link to="/personal-cabinet">Личный кабинет</Link>
                </li>
              </ul>
            </div>
            <div className={styles.contacts}>
              <h5 className={styles.title}>Контакты</h5>
              <div className={styles.emailWrapper}>
                <p className={styles.emailTitle}>Email:</p>
                <p className={styles.email}>
                  <a
                    className={styles.link}
                    href="mailto:iskender.kg@gmail.com"
                  >
                    iskender.kg@gmail.com
                  </a>
                </p>
              </div>
              <div className={styles.phoneWrapper}>
                <p className={styles.phoneTitle}>Телефон:</p>
                <ul className={styles.phoneList}>
                  <li className={styles.item}>
                    <a className={styles.link} href="tel:+996 (500) 000-104">
                      +996 (500) 000-104
                    </a>
                  </li>
                  <li className={styles.item}>
                    <a className={styles.link} href="tel:+996 (997) 000-104">
                      +996 (997) 000-104
                    </a>
                  </li>
                  <li className={styles.item}>
                    <a className={styles.link} href="tel:+996 (222) 000-104">
                      +996 (222) 000-104
                    </a>
                  </li>
                </ul>
                <a
                  className={styles.waLink}
                  href="https://wa.me/+996500000104"
                  target="_blank"
                >
                  <Button className={styles.button}>
                    <img
                      className={styles.whatsAppImg}
                      src={whatsApp}
                      alt="WhatsApp icon"
                    />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.line}></div>

          <div className={styles.footerBottom}>
            <p className={styles.copyright}>
              <span>&copy; 2023 Iskender.kg</span> - Отечественный бренд
              сантехники
            </p>
            <div className={styles.logos}>
              <a
                className={styles.instagramLink}
                href="http://instagram.com/_u/iskender_home/"
                target="_blank"
              >
                <img
                  className={styles.instagram}
                  src={logoInstagram}
                  alt="Logo instagram icon"
                />
              </a>
              <a
                className={styles.facebookLink}
                href="http://www.facebook.com/iskender.sanitary/"
                target="_blank"
              >
                <img
                  className={styles.facebook}
                  src={logoFacebook}
                  alt="Logo facebook icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
