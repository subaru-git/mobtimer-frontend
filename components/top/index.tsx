import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Image,
  VStack,
  HStack,
  Center,
  Flex,
} from "@chakra-ui/react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
let AppBar = dynamic(() => import("../pages/AppBar"), { ssr: false });
import Footer from "../pages/Footer";

const Top: FC = () => {
  const [name, setName] = useState("");
  const router = useRouter();
  return (
    <Flex direction="column" h="100vh" justifyContent="space-between">
      <AppBar top={true} />
      <Center>
        <VStack>
          <Image src="/mobtimer-logo.svg" alt="Logo" boxSize="250px" m={16} />
          <HStack>
            <InputGroup>
              <InputLeftAddon
                children={window.location.href}
                bg="teal.300"
                color="white"
              />
              <Input
                placeholder="mob-room"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </InputGroup>
            <Button
              color="teal.300"
              variant="outline"
              borderColor="teal.300"
              onClick={() => {
                router.push(`/${name}`);
              }}
              disabled={!name}
            >
              <MdOutlineArrowForwardIos color="teal" />
            </Button>
          </HStack>
        </VStack>
      </Center>
      <Footer />
    </Flex>
  );
};

export default Top;
