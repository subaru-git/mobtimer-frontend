import React, { FC } from "react";
import Notifier from "react-desktop-notification";
import CountdownTimer from "./CountdownTimer";

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
