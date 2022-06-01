import type { NextPage } from "next";
import { Hero } from "../components/Hero";
import { Header } from "../components/Header";
import { Content } from "../components/Content";
import styles from "../styles/index.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Content>
        <Hero />
        <div className={styles.section}>
          <div className={styles.section__title} id="about">
            about
          </div>
          <div className={styles.section__text}>
            Hello,
            <br />I{"'"}m Dominique, a 21 year old mathematics student and
            progammer from Switzerland. I{"'"}m currently attending the second
            semester of a bachelor
            {"'"}s degree in mathematics at{" "}
            <Link href="https://ethz.ch">
              <a className={styles.link}>ETH Zurich</a>
            </Link>
            .
            <br />
            <br />
            During my freetime I like to work on a multitude of side projects
            aswell as some open-source projects. Some of the work im most proud
            of can be found below.
            <br />
            <br />I am very passionate about the intersection of mathematics and
            computer science. And would one day like to work / do research in
            fields such as Theoretical Machineleanring, Quantum Computability
            and General Inteligence. This is why I{"'"}m currently working on
            building a solid foundational understanding of mathematics and
            computer science, by taking as many related courses as possible next
            to the requried curriculum
            <br />
            However I would not be surprised if on the way I find something that
            interests me even more.
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.section__title} id="projects">
            projects
          </div>
          <div className={styles.section__sub}>
            <div
              className={`${styles.section__sub__title} ${styles["section__sub__title--unfinished"]}`}
            >
              <Link href="https://tostudy.io">
                <a>tostudy.io</a>
              </Link>
            </div>
            <div className={styles.section__sub__desc}>
              Social media platform for students to share their study sessions.
              Set realistic goals and track your progress when studying for
              exams.
            </div>
          </div>

          <div className={styles.section__sub} id="anidea">
            <div className={styles.section__sub__title}>
              <Link href="https://github.com/dominiquegarmier/anidea">
                <a>AnIdea</a>
              </Link>
            </div>
            <div className={styles.section__sub__desc}>
              <Link href="./#awards">
                <a className={styles.link}>Award-winning</a>
              </Link>{" "}
              machine learning algorithm for approximating solutions to the
              initial value problem of non linear ordinary differntial
              equations. This was part of my matura thesis.
            </div>
          </div>
          <div className={styles.section__sub}>
            <div className={styles.section__sub__title}>
              <Link href="https://slurp.li">
                <a>slurp.li</a>
              </Link>
            </div>
            <div className={styles.section__sub__desc}>
              Simple and straighforward web based qr code generator.
            </div>
          </div>
          <div className={styles.section__sub}>
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
        <div className={styles.section}>
          <div className={styles.section__title} id="awards">
            awards
          </div>
          <div className={styles.section__text}>
            All awards listed below were awarded for the work related to my{" "}
            <Link href="/#anidea">
              <a className={styles.link}>AnIdea</a>
            </Link>{" "}
            matura thesis.
          </div>
          <div className={styles.section__sub}>
            <div className={styles.section__sub__title}>
              <Link href="https://rotary-freiamt.ch/it/content/news/show/7759">
                <a>Rotary award</a>
              </Link>
            </div>
            <div className={styles.section__sub__desc}>
              Award for (joint) best matura thesis at Kantonschule Wohlen for
              the class of 2020.
              <br />
            </div>
          </div>
          <div className={styles.section__sub}>
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
          <div className={styles.section__sub}>
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
        <div className={styles.section}>
          <div className={styles.section__title} id="experience">
            experience
          </div>
          <div className={styles.section__text}>
            Along the journey I have worked with many technolgies and
            frameworks. Here is a overview of some of them.
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.section__title} id="contact">
            contact
          </div>
          <div className={styles.section__text}>Say Hi!</div>
        </div>
      </Content>
    </>
  );
};

export default Home;
