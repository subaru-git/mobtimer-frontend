import React, { FC } from "react";
import { MdOutlineDriveEta, MdPlayCircleOutline } from "react-icons/md";
import { ImRedo2 } from "react-icons/im";
import CountdownTimer from "./CountdownTimer";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Spacer,
  Text,
  Stack,
} from "@chakra-ui/react";

const TimerControl: FC = () => {
  return (
    <Stack spacing="32px">
      <Box>
        <Center>
          <CountdownTimer date={new Date(Date.now() + 10000)} />
        </Center>
        <Center>
          <HStack alignItems="center" spacing="24px">
            <Text fontSize="4xl">
              <MdOutlineDriveEta />
            </Text>
            <Text fontSize="4xl">The next driver is you!</Text>
          </HStack>
        </Center>
      </Box>
      <Center>
        <Stack>
          <Button
            size="lg"
            width="300px"
            colorScheme="blue"
            variant="outline"
            leftIcon={<MdPlayCircleOutline />}
          >
            Start
          </Button>
          <Button
            size="lg"
            width="300px"
            colorScheme="pink"
            variant="outline"
            leftIcon={<ImRedo2 />}
          >
            Skip
          </Button>
        </Stack>
      </Center>
    </Stack>
  );
};

export default TimerControl;
