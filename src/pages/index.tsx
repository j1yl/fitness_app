import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Example from "~/components/Example";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fitness App</title>
        <meta
          name="description"
          content="A collection of visually represented fitness exercises."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Example props={"test"} />
      </main>
    </>
  );
};

export default Home;
