import { FC } from "react";
import Link from "next/link";
import { TypeWriter } from "../TypeWriter";
import styles from "../../styles/index.module.css";
import { useSlideIn } from "../../hooks/useSlideIn";

export const About: FC = () => {
  const [refOne, showOne] = useSlideIn();
  const [refTwo, showTwo] = useSlideIn();
  const [refThree, showThree] = useSlideIn();

  return (
    <div className={styles.section} id="about">
      <div className={styles.section__title}>
        <TypeWriter text="about" timeout={0.25} />
      </div>
      <div className={styles.section__text}>
        <div
          ref={refOne}
          className={`${styles.section__slidein} ${
            showOne ? "" : styles["section__slidein--hidden"]
          }`}
        >
          Hello,
          <br />I{"'"}m Dominique, a 21 year old mathematics student and
          progammer from Switzerland. I{"'"}m currently attending the second
          semester of a bachelor
          {"'"}s degree in mathematics at{" "}
          <Link href="https://ethz.ch">
            <a className={styles.link}>ETH Zurich</a>
          </Link>
        </div>
        <div
          ref={refTwo}
          className={`${styles.section__slidein} ${
            showTwo ? "" : styles["section__slidein--hidden"]
          }`}
        >
          During my freetime I like to work on a multitude of side projects
          aswell as some open-source projects. Some of the work im most proud of
          can be found below.
        </div>
        <div
          ref={refThree}
          className={`${styles.section__slidein} ${
            showThree ? "" : styles["section__slidein--hidden"]
          }`}
        >
          I{"'"}m very passionate about the intersection of mathematics and
          computer science. And would one day like to work / do research in
          fields such as Theoretical Machineleanring, Quantum Computability and
          General Inteligence. This is why I{"'"}m currently working on building
          a solid foundational understanding of mathematics and computer
          science, by taking as many related courses as possible next to the
          requried curriculum.
          <br />
          However I would not be surprised if on the way I find something that
          interests me even more.
        </div>
      </div>
    </div>
  );
};
