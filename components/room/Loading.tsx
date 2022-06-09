import React, { FC } from "react";
import { Center, Spinner } from "@chakra-ui/react";

const Loading: FC = () => {
  return (
    <Center width="100%" h="100vh">
      <Spinner
        thickness="4px"
        speed="0.5s"
        emptyColor="gray.200"
        color="lightblue"
        size="xl"
      />
    </Center>
  );
};

export default Loading;
