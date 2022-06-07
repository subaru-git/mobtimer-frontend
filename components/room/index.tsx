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
import BreakProgress from "./BreakProgress";

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
  console.log(room);
  return (
    <>
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
    </>
  );
};

export default Rooms;
