import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { MdBuild } from "react-icons/md";
import SettingSlider from "./SettingSlider";

const SettingDrawer: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        leftIcon={<MdBuild />}
        colorScheme="gray"
        onClick={() => onOpen()}
      >
        Settings
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Mob Timer Settings</DrawerHeader>
          <DrawerBody>
            <Text as="sub">Work Time</Text>
            <SettingSlider min={0} max={60} step={1} initialValue={15} />
            <Text as="sub">Break Time</Text>
            <SettingSlider min={0} max={60} step={1} initialValue={15} />
            <Text as="sub">Break Count</Text>
            <NumberInput>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SettingDrawer;
