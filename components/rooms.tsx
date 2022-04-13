import React, { FC } from "react";
import { useSubscription, gql } from "@apollo/client";

const Rooms: FC = () => {
  const { data, loading, error } = useSubscription(
    gql`
      subscription notifyAddedRoom {
        roomAdded {
          name
        }
      }
    `
  );
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>Error :(</p>;
  }
  console.log(data);

  return <p>data={data.roomAdded.name}</p>;
};

export default Rooms;
