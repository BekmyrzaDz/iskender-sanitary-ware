import { Highlight } from "../../../../components"
import { HighlightData } from "./HighlightData"
import styles from "./Highlights.module.scss"

export const Highlights = () => {
  return (
    <div className={styles.highlights}>
      <div className={styles.container}>
        <div className={styles.highlightsInner}>
          {HighlightData.map((highlight, i) => (
            <Highlight
              key={i}
              image={highlight.image}
              text={highlight.text}
              alt={highlight.alt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
