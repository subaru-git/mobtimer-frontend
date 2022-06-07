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
let AppBar = dynamic(() => import("../room/AppBar"), { ssr: false });

const Top: FC = () => {
  const [name, setName] = useState("");
  const router = useRouter();
  return (
    <>
      <AppBar top={true} />
      <Center w="100%" h="100vh">
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
    </>
  );
};

export default Top;
