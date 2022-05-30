import React, { FC } from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

type BreakProgressProps = {
  current: number;
  total: number;
};

const BreakProgress: FC<BreakProgressProps> = ({ current, total }) => {
  return (
    <CircularProgress value={(current * 100) / total}>
      <CircularProgressLabel>
        {current} / {total}
      </CircularProgressLabel>
    </CircularProgress>
  );
};

export default BreakProgress;
