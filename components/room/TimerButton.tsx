import React, { FC } from "react";
import { Button } from "@chakra-ui/react";
import { MdPlayCircleOutline, MdStop } from "react-icons/md";

type TimerControlProps = {
  onStart: () => void;
  onStop: () => void;
  isStop?: boolean;
};

const TimerButton: FC<TimerControlProps> = ({
  onStart,
  onStop,
  isStop = false,
}) => {
  if (isStop) {
    return (
      <Button
        size="lg"
        width="300px"
        colorScheme="green"
        variant="outline"
        leftIcon={<MdStop />}
        onClick={onStop}
      >
        Stop
      </Button>
    );
  }
  return (
    <Button
      size="lg"
      width="300px"
      colorScheme="blue"
      variant="outline"
      leftIcon={<MdPlayCircleOutline />}
      onClick={onStart}
    >
      Start
    </Button>
  );
};

export default TimerButton;