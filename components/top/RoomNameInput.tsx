import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const RoomNameInput: FC = () => {
  const [name, setName] = useState("");
  const router = useRouter();
  return (
    <HStack>
      <InputGroup>
        <InputLeftAddon
          children={window.location.href}
          bg="gray.400"
          color="white"
        />
        <Input
          placeholder="mob-room"
          onChange={(e) => {
            setName(e.target.value);
          }}
          disabled
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
  );
};

export default RoomNameInput;
