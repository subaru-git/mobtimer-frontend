import React, { FC } from "react";
import { gql, useMutation } from "@apollo/client";
import { Grid, GridItem } from "@chakra-ui/react";
import BreakProgress from "./BreakProgress";
import MemberList from "./MemberList";
import TimerControl from "./TimerControl";
import { convertToInput } from "../../lib/convertToInput";

type MainTimerProps = {
  room: Room;
};

const MainTimer: FC<MainTimerProps> = ({ room }) => {
  const [updateRoom] = useMutation(gql`
    mutation updateRoom($room: RoomInput!) {
      updateRoom(room: $room) {
        name
      }
    }
  `);

  return (
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
  );
};

export default MainTimer;
