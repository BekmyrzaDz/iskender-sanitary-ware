import { Link } from "react-router-dom"
import { Logo, Burger, Search, Profile, Cart } from "../../../../assets"
import { Button, Input } from "../../../../components"
import styles from "./Header.module.scss"

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerInner}>
          <img className={styles.logo} src={Logo} alt="Logo" />
          <div className={styles.buttonSearchAndProfileGroup}>
            <Button className={styles.button}>
              <img
                className={styles.buttonImg}
                src={Burger}
                alt="Search icon"
              />
              Каталог
            </Button>
            <div className={styles.searchbar}>
              <Input
                className={styles.searchbarWrapper}
                name="search"
                placeholder="Поиск"
                icon={Search}
                quantity="42903"
              />
            </div>
            <div className={styles.loginOrRegisterAndProfileGroup}>
              <div className={styles.loginOrRegisterGroup}>
                <p className={styles.textWelcome}>Добро пожаловать</p>
                <Link className={styles.loginOrRegister} to="/login">
                  Вход/Регистрация
                </Link>
              </div>
              <div className={styles.profileAndCart}>
                <div className={styles.profile}>
                  <img
                    className={styles.profileImg}
                    src={Profile}
                    alt="Profile icon"
                  />
                </div>
                <div className={styles.verticalLine}></div>
                <div className={styles.cart}>
                  <img className={styles.cartImg} src={Cart} alt="Cart icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
