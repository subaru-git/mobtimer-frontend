import React, { FC, useState } from "react";
import dynamic from "next/dynamic";
import { Image, VStack, Center, Flex } from "@chakra-ui/react";
let AppBar = dynamic(() => import("../common/AppBar"), { ssr: false });
let RoomNameInput = dynamic(() => import("./RoomNameInput"), { ssr: false });
import Footer from "../common/Footer";

const Top: FC = () => {
  return (
    <Flex direction="column" h="100vh" justifyContent="space-between">
      <AppBar top={true} />
      <Center>
        <VStack>
          <Image src="/mobtimer-logo.svg" alt="Logo" boxSize="250px" m={16} />
          <RoomNameInput />
        </VStack>
      </Center>
      <Footer />
    </Flex>
  );
};

export default Top;
