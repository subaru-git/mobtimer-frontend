import React, { FC } from "react";
import { useSubscription, gql } from "@apollo/client";

type RoomsProps = {
  error: string;
  room: {
    name: string;
    topic: string;
  };
};

const Rooms: FC<RoomsProps> = ({ error, room: { name, topic } }) => {
  return (
    <>
      <p>data={name}</p>
      <p>topic={topic}</p>
    </>
  );
};

export default Rooms;
