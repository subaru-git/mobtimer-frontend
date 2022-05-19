import React, { FC } from "react";
import Head from "next/head";

const Meta: FC = () => {
  return (
    <Head>
      <title>Mob Timer</title>
      <meta name="description" content="The timer for mob programming" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="robots" content="noindex" />
    </Head>
  );
};

export default Meta;
