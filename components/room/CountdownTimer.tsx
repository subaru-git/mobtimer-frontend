import React, { FC } from "react";
import { Text } from "@chakra-ui/react";
import Countdown, { zeroPad } from "react-countdown";

type CountdownTimerProps = {
  date: Date;
  size: "small" | "large";
  onComplete?: () => void;
};

const CountdownTimer: FC<CountdownTimerProps> = ({
  date,
  size,
  onComplete = () => {},
}) => {
  return (
    <Countdown
      date={date}
      renderer={({ minutes, seconds }) => {
        const text = `${zeroPad(minutes)} : ${zeroPad(seconds)}`;
        return <Text fontSize={size === "large" ? "6xl" : "2xl"}>{text}</Text>;
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
