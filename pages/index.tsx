import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Top from "../components/top";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Top />
      </main>
    </div>
  );
};

export default Home;
