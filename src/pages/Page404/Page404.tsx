import { useNavigate } from "react-router-dom"
import { Button } from "../../components"
import { notFoundImg } from "../../assets"
import styles from "./Page404.module.scss"

export const Page404 = () => {
  const navigate = useNavigate()

  return (
    <section className={styles.page404}>
      <div className={styles.wrapper}>
        <div className={styles.img}>
          <img
            className={styles.imgItem}
            src={notFoundImg}
            alt="notFound-img"
          />
        </div>
        <Button onClick={() => navigate(-1)} className={styles.button}>
          Вернуться назад
        </Button>
      </div>
    </section>
  )
}
