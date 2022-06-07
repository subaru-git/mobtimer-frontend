import React, { FC, useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Flex,
  Image,
  VStack,
  HStack,
  Box,
  Center,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Footer from "../pages/Footer";
let AppBar = dynamic(() => import("../pages/AppBar"), { ssr: false });

const Top: FC = () => {
  const [name, setName] = useState("");
  const router = useRouter();
  return (
    <>
      <AppBar top={true} />
      <Center w="100%" h="calc(100vh - 56px - 24px)">
        <VStack>
          <Image src="/mobtimer-logo.svg" alt="Logo" boxSize="250px" />
          <HStack>
            <InputGroup>
              <InputLeftAddon children="https://mobtimer.space/" />
              <Input
                placeholder="mob-room"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </InputGroup>
            <Button
              onClick={() => {
                router.push(`/${name}`);
              }}
              disabled={!name}
            >
              {">"}
            </Button>
          </HStack>
        </VStack>
      </Center>
      <Footer />
    </>
  );
};

export default Top;
