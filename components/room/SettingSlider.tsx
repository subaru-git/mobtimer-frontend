import React, { FC, useState } from "react";
import {
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";

type SettingSliderProps = {
  min: number;
  max: number;
  step: number;
  initialValue: number;
};

const SettingSlider: FC<SettingSliderProps> = ({
  min,
  max,
  step,
  initialValue,
}) => {
  const [value, setValue] = useState(initialValue);
  return (
    <Flex>
      <Slider
        min={min}
        max={max}
        step={1}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
        flex="1"
        focusThumbOnChange={false}
      >
        <SliderTrack />
        <SliderThumb />
      </Slider>
      <NumberInput
        value={value}
        min={min}
        max={max}
        step={1}
        onChange={(value) => {
          if (!value) value = "0";
          setValue(parseInt(value));
        }}
        maxW="100px"
        ml="2rem"
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </Flex>
  );
};

export default SettingSlider;
