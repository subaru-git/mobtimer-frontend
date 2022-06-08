import React, { FC } from "react";
import { gql, useMutation } from "@apollo/client";
import { Box, Divider, Flex, Grid, GridItem } from "@chakra-ui/react";
import { DateTime } from "luxon";
import AppBar from "../pages/AppBar";
import Footer from "../pages/Footer";
import TimerControl from "./TimerControl";
import MemberList from "./MemberList";
import Topic from "./Topic";
import SettingDrawer from "./SettingDrawer";
import BreakProgress from "./BreakProgress";
import SimpleTimer from "./SimpleTimer";
import { convertToInput } from "../../lib/convertToInput";

type RoomsProps = {
  room: Room;
};

const Rooms: FC<RoomsProps> = ({ room }) => {
  const [updateRoom] = useMutation(gql`
    mutation updateRoom($room: RoomInput!) {
      updateRoom(room: $room) {
        name
      }
    }
  `);
  return (
    <Flex direction="column" h="100vh" justifyContent="space-between">
      <Box>
        <AppBar />
        <SettingDrawer room={room} />
        <Grid templateColumns="repeat(6, 1fr)" gap={4}>
          <GridItem colSpan={4}>
            <TimerControl room={room} />
          </GridItem>
          <GridItem>
            <BreakProgress
              current={room.count}
              total={room.breakcount}
              updateCurrent={(value: number) => {
                updateRoom({
                  variables: {
                    room: {
                      ...convertToInput(room),
                      count: value,
                    },
                  },
                });
              }}
            />
          </GridItem>
          <GridItem>
            <MemberList members={room.members} />
          </GridItem>
        </Grid>
        <Topic
          topic={room.topic}
          updateTopic={(topic) => {
            updateRoom({
              variables: {
                room: { ...convertToInput(room), topic },
              },
            });
          }}
        />
        <Divider my={8} />
        <SimpleTimer
          date={room.simpletimer}
          onStart={(value: number) => {
            updateRoom({
              variables: {
                room: {
                  ...convertToInput(room),
                  simpletimer: DateTime.now().plus({
                    minute: value,
                  }),
                },
              },
            });
          }}
          onComplete={() => {
            updateRoom({
              variables: {
                room: {
                  ...convertToInput(room),
                  simpletimer: null,
                },
              },
            });
          }}
        />
      </Box>
      <Footer />
    </Flex>
  );
};

export default Rooms;
