import { Box, Center, Title, Text, Divider } from "@mantine/core";
import React from "react";

const IndexPage = () => {
  return (
    <>
      <head>
        <title>Findawalkingbuddy</title>
      </head>
      <Center sx={{ flexDirection: "column" }}>
        <Box
          sx={(theme) => ({
            flexDirection: "column",
            width: "100%",
            textAlign: "center",
          })}
          p={10}
        >
          <Title>Findawalkingbuddy.com</Title>
          <Divider mt={5} mb={5} />
        </Box>
        <Center sx={{ width: "50%", flexDirection: "column" }}>
          <Text>
            Are you someone who likes to go on walks around San Francisco? Yes,
            walking alone is a form of self-meditation and helps your mental
            health, but sometimes, it can get lonely. Well that's why there's
            this kickazz website! Here you will be matched with people who also
            like to walk and are interested in the same things you're interested
            in so that you don't get bored on your walk.
            <br />
            <br />
            <span style={{ fontWeight: 600, fontSize: "20px" }}>
              DISCLAIMER:
            </span>
            <br />
            {/* <span style={{ color: "#868e96" }}> */}
            This is NOT a dating website and we don't plan on matching you with
            your soul-mate. The objective of this website is to bring people
            with common interests together by taking enjoyable walks around the
            city. We will email you and connect you with your walking buddy once
            we've found a good match for you, so keep look out for your emails.
            {/* </span> */}
          </Text>
        </Center>
        <iframe
          style={{ marginTop: 10 }}
          src="https://docs.google.com/forms/d/e/1FAIpQLSeVTFoKrHPLIUkCyLlnPswrm-Vta7OzWCCodpRCKqzbYs6muw/viewform?embedded=true"
          width="640"
          height="1130"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </Center>
    </>
  );
};

export default IndexPage;
