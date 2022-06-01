import { FC } from "react";
import styles from "../styles/index.module.css";
import Link from "next/link";

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__name}>
        Dominique <br /> Garmier
      </div>
      <nav className={styles.header__nav}>
        <div className={styles.header__nav__item}>
          <Link href="/#about">
            <a>about</a>
          </Link>
        </div>
        <div className={styles.header__nav__item}>
          <Link href="/#projects">
            <a>projects</a>
          </Link>
        </div>
        <div className={styles.header__nav__item}>
          <Link href="/#awards">
            <a>awards</a>
          </Link>
        </div>
        <div className={styles.header__nav__item}>
          <Link href="/#experience">
            <a>experience</a>
          </Link>
        </div>
        <div className={styles.header__nav__item}>
          <Link href="/#contact">
            <a>contact</a>
          </Link>
        </div>
      </nav>
    </div>
  );
};
