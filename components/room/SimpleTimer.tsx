import React, { FC } from "react";
import { DateTime } from "luxon";
import { gql, useMutation } from "@apollo/client";
import {
  Box,
  Button,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { MdOutlineTimer } from "react-icons/md";
import Timer from "./Timer";
import { convertToInput } from "../../lib/convertToInput";

type SimpleTimerProps = {
  room: Room;
};

const SimpleTimer: FC<SimpleTimerProps> = ({ room }) => {
  const [updateRoom] = useMutation(gql`
    mutation updateRoom($room: RoomInput!) {
      updateRoom(room: $room) {
        name
      }
    }
  `);
  const [value, setValue] = React.useState(5);
  const stopTimer = () => {
    updateRoom({
      variables: {
        room: {
          ...convertToInput(room),
          simpletimer: null,
        },
      },
    });
  };
  return (
    <HStack gap={4} p={4}>
      <MdOutlineTimer size={36} />
      {room.simpletimer ? (
        <Box w={"150px"}>
          <Timer
            date={room.simpletimer}
            size="small"
            message="Time is up!"
            onComplete={stopTimer}
          />
        </Box>
      ) : (
        <NumberInput
          step={1}
          value={value}
          onChange={(e) => setValue(parseInt(e))}
          w="150px"
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      )}
      {room.simpletimer ? (
        <Button
          onClick={() => {
            stopTimer();
            document.title = "Mob Timer";
          }}
          colorScheme="orange"
          variant="outline"
        >
          Stop
        </Button>
      ) : (
        <Button
          onClick={() => {
            updateRoom({
              variables: {
                room: {
                  ...convertToInput(room),
                  simpletimer: DateTime.now().plus({
                    minute: value,
                  }),
                },
              },
            });
          }}
          colorScheme="teal"
          variant="outline"
        >
          Start
        </Button>
      )}
    </HStack>
  );
};

export default SimpleTimer;
