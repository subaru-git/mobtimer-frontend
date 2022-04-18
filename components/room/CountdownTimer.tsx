import React, { FC } from "react";
import Countdown, { zeroPad } from "react-countdown";
import { Text } from "@chakra-ui/react";

type CountdownTimerProps = {
  date: Date;
  onComplete?: () => void;
};

const CountdownTimer: FC<CountdownTimerProps> = ({
  date,
  onComplete = () => {},
}) => {
  return (
    <Countdown
      date={date}
      renderer={({ minutes, seconds }) => {
        const text = `${zeroPad(minutes)} : ${zeroPad(seconds)}`;

        return <Text fontSize="6xl">{text}</Text>;
      }}
      onComplete={() => {
        onComplete();
        document.title = "Mob Timer";
      }}
      onTick={({ minutes, seconds }) => {
        const text = `${zeroPad(minutes)} : ${zeroPad(seconds)}`;
        document.title = text;
      }}
    />
  );
};

export default CountdownTimer;
