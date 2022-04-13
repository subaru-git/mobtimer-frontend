import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Rooms from "../components/rooms";
import { withApollo } from "../lib/withApollo";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  console.log("Home");

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

export default withApollo()(Home);
