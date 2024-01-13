import { NewsCard } from "../../../../components"
import styles from "./News.module.scss"

export const News = () => {
  return (
    <section className={styles.news}>
      <div className={styles.container}>
        <div className={styles.newsInner}>
          <h3 className={styles.title}>Новости</h3>
          <NewsCard />
        </div>
      </div>
    </section>
  )
}
