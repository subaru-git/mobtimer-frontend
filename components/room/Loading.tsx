import { Center, Spinner } from "@chakra-ui/react";
import React, { FC } from "react";

const Loading: FC = () => {
  return (
    <Center width="100%" h="100vh">
      <Spinner
        thickness="4px"
        speed="0.5s"
        emptyColor="gray.200"
        color="blue"
        size="xl"
      />
    </Center>
  );
};

export default Loading;
