import React, { FC, useEffect } from "react";
import {
  Button,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Grid,
  GridItem,
  Text,
  VStack,
} from "@chakra-ui/react";

type BreakProgressProps = {
  current: number;
  total: number;
  updateCurrent: (value: number) => void;
};

const BreakProgress: FC<BreakProgressProps> = ({
  current,
  total,
  updateCurrent,
}) => {
  const [value, setValue] = React.useState(`${current}`);
  const color = current === total ? "pink" : "lightblue";
  useEffect(() => setValue(`${current}`), [current]);
  return (
    <VStack gap={4}>
      <Center>
        <CircularProgress
          value={(current * 100) / total}
          color={color}
          size="120px"
        >
          <CircularProgressLabel alignContent="center">
            <Center>
              <Flex fontSize="small">
                <input
                  type="number"
                  value={value}
                  style={{ width: "16px" }}
                  max={total}
                  min={0}
                  onChange={(e) => {
                    setValue(e.target.value);
                    if (!e.target.value) {
                      updateCurrent(0);
                      return;
                    }
                    let input = parseInt(e.target.value);
                    if (input > total) input = total;
                    if (input < 0) input = 0;
                    setValue(`${input}`);
                    updateCurrent(input);
                  }}
                  onBlur={(e) => {
                    if (e.target.value === "") setValue("0");
                  }}
                />
                <Text pr={2}>/</Text>
                <Text>4</Text>
              </Flex>
            </Center>
          </CircularProgressLabel>
        </CircularProgress>
      </Center>
      <Center>
        <Grid templateColumns="repeat(4, 1fr)" gap={2}>
          <GridItem colSpan={1} colStart={1}>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => {
                const input = parseInt(value) - 1;
                if (input < 0) return;
                setValue(`${input}`);
                updateCurrent(input);
              }}
              disabled={value === "0"}
            >
              -
            </Button>
          </GridItem>
          <GridItem colSpan={1} colStart={2}>
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => {
                const input = parseInt(value) + 1;
                if (input > total) return;
                setValue(`${input}`);
                updateCurrent(input);
              }}
              disabled={value === `${total}`}
            >
              +
            </Button>
          </GridItem>
          <GridItem colSpan={2} colStart={3}>
            <Center>
              <Button
                colorScheme="orange"
                variant="outline"
                onClick={() => {
                  setValue(`0`);
                  updateCurrent(0);
                }}
              >
                reset
              </Button>
            </Center>
          </GridItem>
        </Grid>
      </Center>
    </VStack>
  );
};

export default BreakProgress;
