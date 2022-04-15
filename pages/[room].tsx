import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { FC } from "react";

let created = false;
const Room: FC = () => {
  const { query } = useRouter();
  const { loading, error, data, refetch } = useQuery(gql`
    query {
      find(name: "${query.room}") {
        name
      }
    }`);
  const [createRoom, mutation] = useMutation(
    gql`
      mutation addRoom($name: String!) {
        createRoom(name: $name) {
          name
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
  console.log(data);
  if (!data.find) {
    console.log("created");
    if (!created) {
      createRoom({ variables: { name: query.room } });
      created = true;
    }
    return <p>Creating room...</p>;
  }
  return <p>data={data.find.name}</p>;
};

export default Room;
