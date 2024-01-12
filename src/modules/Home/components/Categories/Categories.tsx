import { CategoryCard } from "../../../../components"
import styles from "./Categories.module.scss"
import { categoriesData } from "./CategoriesData"

export const Categories = () => {
  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        <div className={styles.categoriesInner}>
          <h2 className={styles.title}>Категории</h2>
          <div className={styles.wrapper}>
            {categoriesData.map((category, i) => (
              <CategoryCard
                key={i}
                image={category.image}
                title={category.title}
                text={category.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
