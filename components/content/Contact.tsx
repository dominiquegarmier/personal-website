import { FC } from "react";
import { FlashText } from "../FlashText";
import styles from "../../styles/index.module.css";

export const Contact: FC = () => {
  return (
    <div className={styles.section} id="contact">
      <FlashText text="sayhi!" timeout={0.5} />
      <div className={styles.section__text}>Say Hi!</div>
    </div>
  );
};
