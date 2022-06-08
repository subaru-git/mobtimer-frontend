import React, { FC } from "react";
import Head from "next/head";

const Meta: FC = () => {
  return (
    <Head>
      <title>Mob Timer</title>
      <meta charSet="utf-8" />
      <link rel="icon" href="/mobtimer-logo.svg" type="image/svg+xml" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="The timer for mob programming" />
      <link
        rel="apple-touch-icon"
        href="/mobtimer-logo.svg"
        type="image/svg+xml"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta property="og:url" content="https://mobtimer.space/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Mob Timer" />
      <meta property="og:description" content="The timer for mob programming" />
      <meta property="og:site_name" content="Mob Timer" />
      <meta
        property="og:image"
        content="https://github.com/subaru-git/mobtimer-frontend/blob/main/public/card.png?raw=true"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="robots" content="noindex" />
    </Head>
  );
};

export default Meta;
