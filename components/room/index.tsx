import React, { FC, useRef, useState } from "react";
import { useSubscription, gql, useMutation } from "@apollo/client";
import { Button, Input } from "@chakra-ui/react";
import CountdownTimer from "./CountdownTimer";
import SettingSlider from "./SettingSlider";
import AppBar from "./AppBar";
import TimerControl from "./TimerControl";

type RoomsProps = {
  error: string;
  room: {
    name: string;
    topic: string;
  };
};

const Rooms: FC<RoomsProps> = ({ error, room: { name, topic } }) => {
  const [newTopic, setNewTopic] = useState("");
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
      <TimerControl />
      <p>data={name}</p>
      <p>topic={topic}</p>
      <Input
        onChange={(e) => {
          setNewTopic(e.target.value);
        }}
        placeholder="topic"
      />
      <Button
        onClick={() => {
          updateRoom({ variables: { name, topic: newTopic } });
        }}
      >
        update
      </Button>
      <SettingSlider min={0} max={30} step={5} initialValue={15} />
    </>
  );
};

export default Rooms;
