import { FC } from "react";
import styles from "../styles/header.module.css";

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__name}>
        Dominique <br /> Garmier
      </div>
      <nav className={styles.header__nav}>
        <div className={styles.header__nav__item}>about</div>
        <div className={styles.header__nav__item}>projects</div>
        <div className={styles.header__nav__item}>experience</div>
        <div className={styles.header__nav__item}>contact</div>
      </nav>
    </div>
  );
};
