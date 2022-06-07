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
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const Top: FC = () => {
  const [name, setName] = useState("");
  const router = useRouter();
  return (
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
  );
};

export default Top;
