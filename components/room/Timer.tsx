import React, { FC } from "react";
import CountdownTimer from "./CountdownTimer";

type TimerProps = {
  date?: Date;
  onComplete?: () => void;
};

const Timer: FC<TimerProps> = ({ date, onComplete = () => {} }) => {
  if (!date) return <></>;
  return <CountdownTimer date={date} onComplete={onComplete} />;
};

export default Timer;
