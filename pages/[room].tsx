import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { FC } from "react";
import Rooms from "../components/room";

let created = false;
const Room: FC = () => {
  const { query } = useRouter();
  const { loading, error, data, refetch, subscribeToMore } = useQuery(gql`
    query {
      find(name: "${query.room}") {
        name
        topic
      }
    }`);
  const [createRoom, mutation] = useMutation(
    gql`
      mutation addRoom($name: String!) {
        createRoom(name: $name) {
          name
          topic
        }
      }
    `,
    {
      onCompleted: () => {
        refetch();
        created = false;
      },
    }
  );
  if (loading || mutation.loading) return <p>Loading...</p>;
  if (error || mutation.error) {
    console.error(error);
    console.error(mutation.error);
    return <p>Error :(</p>;
  }
  if (!data.find) {
    console.log("created");
    if (!created) {
      createRoom({ variables: { name: query.room } });
      created = true;
    }
    return <p>Creating room...</p>;
  }
  subscribeToMore({
    document: gql`
      subscription notifyAddedRoom($name: String!) {
        roomUpdated(name: $name) {
          name
          topic
        }
      }
    `,
    variables: { name: query.room },
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData.data) return prev;
      return Object.assign({}, prev, {
        find: subscriptionData.data.roomUpdated,
      });
    },
  });
  return <Rooms room={data.find} error={""} />;
};

export default Room;