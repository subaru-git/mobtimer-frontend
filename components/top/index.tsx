import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Image, VStack, Center, Flex } from "@chakra-ui/react";
let AppBar = dynamic(() => import("../pages/AppBar"), { ssr: false });
let RoomInput = dynamic(() => import("./RoomInput"), { ssr: false });
import Footer from "../pages/Footer";

const Top: FC = () => {
  return (
    <Flex direction="column" h="100vh" justifyContent="space-between">
      <AppBar top={true} />
      <Center>
        <VStack>
          <Image src="/mobtimer-logo.svg" alt="Logo" boxSize="250px" m={16} />
          <RoomInput />
        </VStack>
      </Center>
      <Footer />
    </Flex>
  );
};

export default Top;
