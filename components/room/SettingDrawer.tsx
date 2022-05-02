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
import { gql, useMutation } from "@apollo/client";
import MemberSetting from "./MemberSetting";
import SettingSlider from "./SettingSlider";
import { convertToInput } from "../../lib/convertToInput";

type SettingDrawerProps = { room: Room };

const SettingDrawer: FC<SettingDrawerProps> = ({ room }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { worktime, breaktime, breakcount, members } = room;
  const [updateRoom] = useMutation(gql`
    mutation updateRoom($room: RoomInput!) {
      updateRoom(room: $room) {
        name
      }
    }
  `);
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
            <SettingSlider
              min={0}
              max={60}
              value={worktime}
              onUpdate={(worktime) => {
                updateRoom({
                  variables: { room: { ...convertToInput(room), worktime } },
                });
              }}
            />
            <Text as="sub">Break Time</Text>
            <SettingSlider
              min={0}
              max={60}
              value={breaktime}
              onUpdate={(breaktime) => {
                updateRoom({
                  variables: { room: { ...convertToInput(room), breaktime } },
                });
              }}
            />
            <Text as="sub">Break Count</Text>
            <NumberInput
              value={breakcount}
              onChange={(value) => {
                updateRoom({
                  variables: {
                    room: {
                      ...convertToInput(room),
                      breakcount: parseInt(value),
                    },
                  },
                });
              }}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <MemberSetting
              members={members}
              updateMember={(members) => {
                updateRoom({
                  variables: {
                    room: {
                      ...convertToInput(room),
                      members,
                    },
                  },
                });
              }}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SettingDrawer;
