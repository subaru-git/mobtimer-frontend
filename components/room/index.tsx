import React, { FC, useRef, useState } from "react";
import { useSubscription, gql, useMutation } from "@apollo/client";
import { Button, Input } from "@chakra-ui/react";
import CountdownTimer from "./CountdownTimer";

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
      <CountdownTimer date={new Date(Date.now() + 10000)} />
    </>
  );
};

export default Rooms;
