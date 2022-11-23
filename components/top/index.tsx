import React, { FC } from "react";
import dynamic from "next/dynamic";
import {
  VStack,
  Center,
  Flex,
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  AlertDescription,
} from "@chakra-ui/react";
let AppBar = dynamic(() => import("../common/AppBar"), { ssr: false });
let RoomNameInput = dynamic(() => import("./RoomNameInput"), { ssr: false });
import Footer from "../common/Footer";
import TopLogo from "./TopLogo";

const Top: FC = () => {
  return (
    <Flex direction="column" h="100vh" justifyContent="space-between">
      <Box>
        <AppBar top />
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Sorry, This demo is not available.</AlertTitle>
          <AlertDescription>
            {
              "Please host in your local environment. I'm looking for a hosting service like Heroku."
            }
          </AlertDescription>
        </Alert>
      </Box>
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
