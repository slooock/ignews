import { GetStaticProps } from "next";
import Head from "next/head";

// import { SubscribeButton } from "../components/SubscribeButton";

import styles from "./home.module.scss";

interface IHomeProps {
  product: {
    priceId: string;
    amount: string;
  };
}

export default function Home({ product }: IHomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>
            <img
              src="/images/react.gif"
              alt="React Logo Animated"
              height={32}
              width={32}
            />{" "}
            Hey, welcome
          </span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all he publications <br />
            <span>for 11111 month</span>
          </p>
          {/* <SubscribeButton /> */}
        </section>

        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}
