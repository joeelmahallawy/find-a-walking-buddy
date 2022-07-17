import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import logo from "../assets/fawb-trans.png";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <link rel="shortcut icon" href={logo.src} sizes="16x16"></link>
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </MantineProvider>
    </>
  );
};
export default App;
