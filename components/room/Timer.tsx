import React, { FC } from "react";
import CountdownTimer from "./CountdownTimer";
import Notifier from "react-desktop-notification";

type TimerProps = {
  date?: Date;
  size: "small" | "large";
  message: string;
  onComplete?: () => void;
};

const Timer: FC<TimerProps> = ({
  date,
  size,
  message,
  onComplete = () => {},
}) => {
  if (!date) return null;
  return (
    <CountdownTimer
      date={date}
      size={size}
      onComplete={() => {
        onComplete();
        Notifier.start("Timer complete", message);
      }}
    />
  );
};

export default Timer;
