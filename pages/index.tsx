import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useQuery, gql } from "@apollo/client";

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(
    gql`
      query {
        findAll {
          name
        }
      }
    `
  );
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>Error :(</p>;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Scrum Timer</title>
        <meta name="description" content="The timer for mob programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        rooms: {data.findAll.map((r: { name: string }) => r.name)}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
