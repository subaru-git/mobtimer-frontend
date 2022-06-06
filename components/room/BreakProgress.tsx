import React, { FC, useEffect } from "react";
import {
  Center,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  NumberInput,
  NumberInputField,
  Stack,
} from "@chakra-ui/react";

type BreakProgressProps = {
  current: number;
  total: number;
  onChange: (value: number) => void;
};

const BreakProgress: FC<BreakProgressProps> = ({
  current,
  total,
  onChange,
}) => {
  const [value, setValue] = React.useState(`${current}`);
  const color = current === total ? "pink" : "blue";
  useEffect(() => setValue(`${current}`), [current]);
  return (
    <CircularProgress
      value={(current * 100) / total}
      color={color}
      size="120px"
    >
      <CircularProgressLabel alignContent="center">
        <Center>
          <Flex alignItems="center">
            <div style={{ fontSize: "small" }}>
              <div style={{ display: "flex" }}>
                <input
                  type="number"
                  value={value}
                  style={{ width: "16px" }}
                  max={total}
                  min={0}
                  onChange={(e) => {
                    console.log("current count", e.target.value);
                    setValue(e.target.value);
                    if (!e.target.value) {
                      onChange(0);
                      return;
                    }
                    let input = parseInt(e.target.value);
                    if (input > total) input = total;
                    if (input < 0) input = 0;
                    setValue(`${input}`);
                    onChange(input);
                  }}
                  onBlur={(e) => {
                    if (e.target.value === "") setValue("0");
                  }}
                />
                <div style={{ paddingRight: "8px" }}>/</div>
                <div>4</div>
              </div>
            </div>
          </Flex>
        </Center>
      </CircularProgressLabel>
    </CircularProgress>
  );
};

export default BreakProgress;
