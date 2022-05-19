import React, { FC } from "react";
import { gql, useMutation } from "@apollo/client";
import { MdOutlineDriveEta, MdPlayCircleOutline } from "react-icons/md";
import { ImRedo2 } from "react-icons/im";
import { DateTime } from "luxon";
import { Box, Button, Center, HStack, Text, Stack } from "@chakra-ui/react";
import Timer from "./Timer";
import { convertToInput } from "../../lib/convertToInput";
import TimerButton from "./TimerButton";

type TimerControlProps = {
  room: Room;
};

const TimerControl: FC<TimerControlProps> = ({ room }) => {
  const [updateRoom] = useMutation(gql`
    mutation updateRoom($room: RoomInput!) {
      updateRoom(room: $room) {
        name
      }
    }
  `);
  return (
    <Stack spacing="32px">
      <Box>
        <Center>
          <Timer
            date={room.maintimer}
            onComplete={() => {
              updateRoom({
                variables: {
                  room: { ...convertToInput(room), maintimer: null },
                },
              });
            }}
          />
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
          <TimerButton
            onStart={() => {
              updateRoom({
                variables: {
                  room: {
                    ...convertToInput(room),
                    maintimer: DateTime.now().plus({ minute: room.worktime }),
                  },
                },
              });
            }}
            onStop={() => {
              updateRoom({
                variables: {
                  room: {
                    ...convertToInput(room),
                    maintimer: null,
                  },
                },
              });
            }}
            isStop={room.maintimer !== null}
          />
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
