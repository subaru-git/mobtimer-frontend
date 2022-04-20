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

type RoomsProps = {
  error: string;
  room: {
    name: string;
    topic: string;
  };
};

const Rooms: FC<RoomsProps> = ({ error, room: { name, topic } }) => {
  const [updateRoom] = useMutation(gql`
    mutation updateRoom($name: String!, $topic: String!) {
      updateRoom(name: $name, topic: $topic) {
        name
      }
    }
  `);
  return (
    <>
      <AppBar />
      <SettingDrawer />
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem colSpan={4}>
          <TimerControl />
        </GridItem>
        <GridItem colEnd={6}>
          <MemberList />
        </GridItem>
      </Grid>
      <Topic
        topic={topic}
        updateTopic={(topic) => {
          updateRoom({ variables: { name, topic } });
        }}
      />
    </>
  );
};

export default Rooms;