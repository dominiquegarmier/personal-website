import type { NextPage } from "next";
import { Hero } from "../components/Hero";
import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { About } from "../components/content/About";
import { Projects } from "../components/content/Projects";
import { Experience } from "../components/content/Experience";
import { Awards } from "../components/content/Awards";
import { Contact } from "../components/content/Contact";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Content>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Awards />
        <Contact />
      </Content>
    </>
  );
};

export default Home;
