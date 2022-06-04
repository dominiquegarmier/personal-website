import { FC } from "react";
import { TypeWriter } from "../TypeWriter";
import styles from "../../styles/index.module.css";

export const Experience: FC = () => {
  return (
    <div className={styles.section} id="experience">
      <div className={styles.section__title}>
        <TypeWriter text="experience" timeout={0.25} />
      </div>
      <div className={styles.section__text}>
        Along the journey I have worked with many technolgies and frameworks.
        Here is a overview of some of them.
      </div>
    </div>
  );
};
