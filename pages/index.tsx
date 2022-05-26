import type { NextPage } from "next";
import { Hero } from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center">
      <Hero />
      <div className="p-4">
        machinlearning
        <div>tensorflow</div>
        <div>pytorch</div>
      </div>
      <div className="p-4">
        frontend
        <div>react</div>
        <div>vue</div>
        <div>nextjs</div>
        <div>nuxt</div>
        <div>graphql</div>
      </div>
      <div className="p-4">
        backend
        <div>django</div>
        <div>flask</div>
        <div>fastapi</div>
        <div>graphql</div>
        <div>postgres</div>
        <div>cockroachdb</div>
        <div>dgraph</div>
        <div>redis</div>
        <div>apache kafka</div>
      </div>
      <div className="p-4">
        cloud
        <div>aws</div>
        <div>gcp</div>
        <div>digitalocean</div>
        <div>vercel</div>
      </div>
      <div className="p-4">
        CI / CD
        <div>docker</div>
        <div>pytest</div>
        <div>jest</div>
        <div>cypress</div>
        <div>pre-commit</div>
        <div>terraform</div>
        <div>github / github actions</div>
      </div>
    </div>
  );
};

export default Home;
