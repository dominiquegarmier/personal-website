import { FC } from "react";
import styles from "../styles/hero.module.css";

export const Hero: FC = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__text}>
        <span className={styles.hero__text__part}>mathematics</span>
        <span className={styles.hero__text__part}>software development</span>
        <span className={styles.hero__text__part}>machine learning</span>
      </div>
    </div>
  );
};
