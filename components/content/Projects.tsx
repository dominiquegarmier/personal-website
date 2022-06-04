import { FC } from "react";
import Link from "next/link";
import styles from "../../styles/index.module.css";
import { TypeWriter } from "../TypeWriter";
import { useSlideIn } from "../../hooks/useSlideIn";

export const Projects: FC = () => {
  const [refOne, showOne] = useSlideIn();
  const [refTwo, showTwo] = useSlideIn();
  const [refThree, showThree] = useSlideIn();
  const [refFour, showFour] = useSlideIn();

  return (
    <div className={styles.section} id="projects">
      <div className={styles.section__title}>
        <TypeWriter text="projects" timeout={0.25} />
      </div>
      <div
        ref={refOne}
        className={`${styles.section__sub} ${styles.section__slidein} ${
          showOne ? "" : styles["section__slidein--hidden"]
        }`}
      >
        <div
          className={`${styles.section__sub__title} ${styles["section__sub__title--unfinished"]}`}
        >
          <Link href="https://tostudy.io">
            <a>tostudy.io</a>
          </Link>
        </div>
        <div className={styles.section__sub__desc}>
          Social media platform for students to share their study sessions. Set
          realistic goals and track your progress when studying for exams.
        </div>
      </div>
      <div
        ref={refTwo}
        className={`${styles.section__sub} ${styles.section__slidein} ${
          showTwo ? "" : styles["section__slidein--hidden"]
        }`}
        id="anidea"
      >
        <div className={styles.section__sub__title}>
          <Link href="https://github.com/dominiquegarmier/anidea">
            <a>AnIdea</a>
          </Link>
        </div>
        <div className={styles.section__sub__desc}>
          <Link href="/#awards">
            <a className={styles.link}>Award-winning</a>
          </Link>{" "}
          machine learning algorithm for approximating solutions to the initial
          value problem of non linear ordinary differntial equations. This was
          part of my matura thesis.
        </div>
      </div>
      <div
        ref={refThree}
        className={`${styles.section__sub} ${styles.section__slidein} ${
          showThree ? "" : styles["section__slidein--hidden"]
        }`}
      >
        <div className={styles.section__sub__title}>
          <Link href="https://slurp.li">
            <a>slurp.li</a>
          </Link>
        </div>
        <div className={styles.section__sub__desc}>
          Simple and straighforward web based qr code generator.
        </div>
      </div>
      <div
        ref={refFour}
        className={`${styles.section__sub} ${styles.section__slidein} ${
          showFour ? "" : styles["section__slidein--hidden"]
        }`}
      >
        <div className={styles.section__sub__title}>
          <Link href="https://github.com/dominiquegarmier/ittrasim">
            <a>ItTraSim</a>
          </Link>
        </div>
        <div className={styles.section__sub__desc}>
          Iterative traffic simulation for omnicient agents. Based on the{" "}
          <Link href="https://www.matsim.org/">
            <a className={styles.link}>MATSim</a>
          </Link>{" "}
          project.
        </div>
      </div>
    </div>
  );
};
