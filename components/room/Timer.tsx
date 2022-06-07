import React, { FC } from "react";
import CountdownTimer from "./CountdownTimer";
import Notifier from "react-desktop-notification";

type TimerProps = {
  date?: Date;
  onComplete?: () => void;
};

const Timer: FC<TimerProps> = ({ date, onComplete = () => {} }) => {
  if (!date) return null;
  return (
    <CountdownTimer
      date={date}
      onComplete={() => {
        onComplete();
        Notifier.start(
          "Timer complete",
          "The time is up! Change the driver or take a break"
        );
      }}
    />
  );
};

export default Timer;
