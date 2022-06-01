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
      <Hero />
      <Content>
        <div className={styles.section}>
          <div className={styles.section__title}>projects</div>
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

          <div className={styles.section__sub}>
            <div className={styles.section__sub__title}>
              <Link href="https://github.com/dominiquegarmier/anidea">
                <a>AnIdea</a>
              </Link>
            </div>
            <div className={styles.section__sub__desc}>
              Award-winning machine learning algorithm for approximating
              solutions to the initial value problem of non linear ordinary
              differntial equations.
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
              Iterative based traffic simulation for omnicient agents. Based on
              the
              <Link href="https://www.matsim.org/">
                <a> MATSim </a>
              </Link>
              project.
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};

export default Home;
