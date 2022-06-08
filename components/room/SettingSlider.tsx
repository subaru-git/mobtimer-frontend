import React, { FC } from "react";
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
  value: number;
  onUpdate: (value: number) => void;
};

const SettingSlider: FC<SettingSliderProps> = ({
  min,
  max,
  value,
  onUpdate,
}) => {
  return (
    <Flex>
      <Slider
        min={min}
        max={max}
        step={1}
        value={value}
        onChange={(value) => {
          onUpdate(value);
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
          onUpdate(parseInt(value));
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
