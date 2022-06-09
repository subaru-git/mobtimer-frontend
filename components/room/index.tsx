import React, { FC } from "react";
import { Box, Divider, Flex } from "@chakra-ui/react";
import AppBar from "../common/AppBar";
import SettingDrawer from "./SettingDrawer";
import MainTimer from "./MainTimer";
import Topic from "./Topic";
import SimpleTimer from "./SimpleTimer";
import Footer from "../common/Footer";

type RoomsProps = {
  room: Room;
};

const Rooms: FC<RoomsProps> = ({ room }) => {
  return (
    <Flex direction="column" h="100vh" justifyContent="space-between">
      <Box>
        <AppBar />
        <SettingDrawer room={room} />
        <MainTimer room={room} />
        <Topic room={room} />
        <Divider my={8} />
        <SimpleTimer room={room} />
      </Box>
      <Footer />
    </Flex>
  );
};

export default Rooms;
