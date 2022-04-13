import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Rooms from "../components/rooms";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scrum Timer</title>
        <meta name="description" content="The timer for mob programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Rooms />
      </main>
    </div>
  );
};

export default Home;
