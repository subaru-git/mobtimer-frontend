import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { MdOutlineTimer } from "react-icons/md";
import CountdownTimer from "./CountdownTimer";
import Timer from "./Timer";

type SimpleTimerProps = {
  date?: Date;
  onStart: (value: number) => void;
  onComplete: () => void;
};

const SimpleTimer: FC<SimpleTimerProps> = ({ date, onStart, onComplete }) => {
  const [value, setValue] = React.useState(5);

  return (
    <HStack gap={4} p={4}>
      <MdOutlineTimer size={36} />
      {date ? (
        <Box w={"150px"}>
          <Timer
            date={date}
            size="small"
            message="Time is up!"
            onComplete={onComplete}
          />
        </Box>
      ) : (
        <NumberInput
          step={1}
          value={value}
          onChange={(e) => setValue(parseInt(e))}
          w={"150px"}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      )}
      {date ? (
        <Button onClick={onComplete} colorScheme="orange" variant="outline">
          Stop
        </Button>
      ) : (
        <Button
          onClick={() => onStart(value)}
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
