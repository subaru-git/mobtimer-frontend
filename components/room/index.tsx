import React, { FC, useRef, useState } from "react";
import { useSubscription, gql, useMutation } from "@apollo/client";
import { Button, Flex, Grid, GridItem, Input } from "@chakra-ui/react";
import CountdownTimer from "./CountdownTimer";
import SettingSlider from "./SettingSlider";
import AppBar from "./AppBar";
import TimerControl from "./TimerControl";
import MemberList from "./MemberList";
import Topic from "./Topic";
import SettingDrawer from "./SettingDrawer";
import { convertToInput } from "../../lib/convertToInput";

type RoomsProps = {
  error: string;
  room: Room;
};

const Rooms: FC<RoomsProps> = ({ error, room }) => {
  const [updateRoom] = useMutation(gql`
    mutation updateRoom($room: RoomInput!) {
      updateRoom(room: $room) {
        name
      }
    }
  `);

  return (
    <>
      <AppBar />
      <SettingDrawer room={room} />
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={4}>
          <TimerControl />
        </GridItem>
        <GridItem colEnd={6}>
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
    </>
  );
};

export default Rooms;
