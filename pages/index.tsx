import type { NextPage } from "next";
import { Hero } from "../components/Hero";
import { Header } from "../components/Header";
import styles from "../styles/index.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className={styles.container}></div>
    </>
  );
};

export default Home;
