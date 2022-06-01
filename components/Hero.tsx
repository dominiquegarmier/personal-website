import { FC } from "react";
import styles from "../styles/index.module.css";
import Link from "next/link";

export const Hero: FC = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__text}>
        <span className={styles.hero__text__part}>
          <Link href="/#about">
            <a>mathematics</a>
          </Link>
        </span>
        <span className={styles.hero__text__part}>
          <Link href="/#projects">
            <a>software development</a>
          </Link>
        </span>
        <span className={styles.hero__text__part}>
          <Link href="/#anidea">
            <a>machine learning</a>
          </Link>
        </span>
      </div>
    </div>
  );
};
