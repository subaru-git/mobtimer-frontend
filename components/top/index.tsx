import React, { FC } from "react";
import dynamic from "next/dynamic";
import { Image, VStack, Center, Flex } from "@chakra-ui/react";
let AppBar = dynamic(() => import("../common/AppBar"), { ssr: false });
let RoomNameInput = dynamic(() => import("./RoomNameInput"), { ssr: false });
import Footer from "../common/Footer";
import TopLogo from "./TopLogo";

const Top: FC = () => {
  return (
    <Flex direction="column" h="100vh" justifyContent="space-between">
      <AppBar top />
      <Center>
        <VStack gap={16}>
          <TopLogo />
          <RoomNameInput />
        </VStack>
      </Center>
      <Footer />
    </Flex>
  );
};

export default Top;
