import React, { FC } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  MdOutlineDriveEta,
  MdOutlineSkipNext,
  MdOutlineSkipPrevious,
  MdPlayCircleOutline,
} from "react-icons/md";
import { ImRedo2 } from "react-icons/im";
import { DateTime } from "luxon";
import {
  Box,
  Button,
  Center,
  HStack,
  Text,
  Stack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Timer from "./Timer";
import { convertToInput } from "../../lib/convertToInput";
import TimerButton from "./TimerButton";
import {
  rotationNextMembers,
  rotationPreviousMembers,
} from "../../lib/rotationMembers";
import BreakProgress from "./BreakProgress";

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
  const isBreak = room.count === room.breakcount;
  return (
    <Stack spacing="32px">
      <Box>
        <Center>
          <Timer
            date={room.maintimer}
            size="large"
            message="Time is up! Change the driver or take a break!"
            onComplete={() => {
              updateRoom({
                variables: {
                  room: {
                    ...convertToInput(room),
                    maintimer: null,
                    members: isBreak
                      ? room.members
                      : rotationNextMembers(room.members),
                    count: (room.count + 1) % (room.breakcount + 1),
                  },
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
            <Text fontSize="4xl">{isBreak ? "break" : room.members[0]}</Text>
          </HStack>
        </Center>
      </Box>
      <Center>
        <Grid templateColumns="repeat(4, 1fr)" gap={2}>
          <GridItem colSpan={1} colStart={1}>
            <Center>
              <Button
                size="lg"
                width="50px"
                colorScheme="blue"
                variant="outline"
                leftIcon={<MdOutlineSkipPrevious />}
                onClick={() => {
                  updateRoom({
                    variables: {
                      room: {
                        ...convertToInput(room),
                        maintimer: null,
                        members: rotationPreviousMembers(room.members),
                      },
                    },
                  });
                }}
              />
            </Center>
          </GridItem>
          <GridItem colSpan={2} colStart={2}>
            <Center>
              <TimerButton
                onStart={() => {
                  updateRoom({
                    variables: {
                      room: {
                        ...convertToInput(room),
                        maintimer: DateTime.now().plus({
                          minute: room.worktime,
                        }),
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
            </Center>
          </GridItem>
          <GridItem colSpan={1} colStart={4}>
            <Center>
              <Button
                size="lg"
                width="50px"
                colorScheme="blue"
                variant="outline"
                rightIcon={<MdOutlineSkipNext />}
                onClick={() => {
                  updateRoom({
                    variables: {
                      room: {
                        ...convertToInput(room),
                        maintimer: null,
                        members: rotationNextMembers(room.members),
                      },
                    },
                  });
                }}
              />
            </Center>
          </GridItem>
        </Grid>
      </Center>
    </Stack>
  );
};

export default TimerControl;
