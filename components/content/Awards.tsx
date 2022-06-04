import { FC } from "react";
import Link from "next/link";
import { TypeWriter } from "../TypeWriter";
import { useSlideIn } from "../../hooks/useSlideIn";

import styles from "../../styles/index.module.css";

export const Awards: FC = () => {
  const [refOne, showOne] = useSlideIn();
  const [refTwo, showTwo] = useSlideIn();
  const [refThree, showThree] = useSlideIn();
  const [refFour, showFour] = useSlideIn();

  return (
    <div className={styles.section} id="awards">
      <div className={styles.section__title}>
        <TypeWriter text="awards" timeout={0.25} />
      </div>
      <div
        ref={refOne}
        className={`${styles.section__text} ${styles.section__slidein} ${
          showOne ? "" : styles["section__slidein--hidden"]
        }`}
      >
        All awards listed below were awarded for the work related to my{" "}
        <Link href="/#anidea">
          <a className={styles.link}>AnIdea</a>
        </Link>{" "}
        matura thesis.
      </div>
      <div
        ref={refTwo}
        className={`${styles.section__sub} ${styles.section__slidein} ${
          showTwo ? "" : styles["section__slidein--hidden"]
        }`}
      >
        <div className={styles.section__sub__title}>
          <Link href="https://rotary-freiamt.ch/it/content/news/show/7759">
            <a>Rotary award</a>
          </Link>
        </div>
        <div className={styles.section__sub__desc}>
          Award for (joint) best matura thesis at Kantonschule Wohlen for the
          class of 2020.
          <br />
        </div>
      </div>
      <div
        ref={refThree}
        className={`${styles.section__sub} ${styles.section__slidein} ${
          showThree ? "" : styles["section__slidein--hidden"]
        }`}
      >
        <div className={styles.section__sub__title}>
          <Link href="https://www.proargovia.ch/projekte/maturitaetsarbeiten/maturitaetsarbeiten-2020/">
            <a>PRO ARGOVIA award</a>
          </Link>
        </div>
        <div className={styles.section__sub__desc}>
          Award for kanton-wide best matura thesis 2020.
          <br />
        </div>
      </div>
      <div
        ref={refFour}
        className={`${styles.section__sub} ${styles.section__slidein} ${
          showFour ? "" : styles["section__slidein--hidden"]
        }`}
      >
        <div className={styles.section__sub__title}>
          <Link href="https://sjf.ch/anidea-approximation-der-loesung-einer-differenzialgleichung-mit-neuronalen-netzwerken/">
            <a>Swiss Youth & Science</a>
          </Link>
        </div>
        <div className={styles.section__sub__desc}>
          Rating: {'"'}very good{'"'} at national contest for outstanding
          science projects.
        </div>
      </div>
    </div>
  );
};
