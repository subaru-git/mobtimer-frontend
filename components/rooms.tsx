import React, { FC, useEffect } from "react";
import { useSubscription, gql, useQuery } from "@apollo/client";

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
  // const { loading, error, data } = useQuery(gql`
  //   query {
  //     findAll {
  //       name
  //     }
  //   }
  // `);
  useEffect(() => {
    console.log("effect do");
    return () => {
      console.log("effect end");
    };
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("error happened here.", error);
    return <p>Error :(</p>;
  }
  console.log(data);

  return <p>data={data.findAll.map((r: any) => r.name)}</p>;
};

export default Rooms;
