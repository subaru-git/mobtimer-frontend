import React, { FC, useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const Top: FC = () => {
  const [name, setName] = useState("");
  const router = useRouter();
  return (
    <Flex>
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
    </Flex>
  );
};

export default Top;
