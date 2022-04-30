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
import MemberSetting from "./MemberSetting";
import SettingSlider from "./SettingSlider";

type SettingDrawerProps = { room: Room };

const SettingDrawer: FC<SettingDrawerProps> = ({
  room: { worktime, breaktime, breakcount, members },
}) => {
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
            <SettingSlider min={0} max={60} step={1} initialValue={worktime} />
            <Text as="sub">Break Time</Text>
            <SettingSlider min={0} max={60} step={1} initialValue={breaktime} />
            <Text as="sub">Break Count</Text>
            <NumberInput defaultValue={breakcount}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <MemberSetting member={members} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SettingDrawer;
