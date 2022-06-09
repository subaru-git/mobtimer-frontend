import React, { FC } from "react";
import { gql, useMutation } from "@apollo/client";
import { Center, Heading, Input, Stack } from "@chakra-ui/react";
import { convertToInput } from "../../lib/convertToInput";

type TopicProps = {
  room: Room;
};

const Topic: FC<TopicProps> = ({ room }) => {
  const [updateRoom] = useMutation(gql`
    mutation updateRoom($room: RoomInput!) {
      updateRoom(room: $room) {
        name
      }
    }
  `);
  const [newTopic, setNewTopic] = React.useState("");
  return (
    <Stack spacing={4} py={32}>
      <Center>
        <Heading as="h2" size="3xl" isTruncated>
          {room.topic}
        </Heading>
      </Center>
      <Center>
        <Input
          onChange={(e) => {
            setNewTopic(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              updateRoom({
                variables: {
                  room: { ...convertToInput(room), topic: newTopic },
                },
              });
              setNewTopic("");
              e.currentTarget.value = "";
            }
          }}
          placeholder="input current topic"
          w="500px"
        />
      </Center>
    </Stack>
  );
};

export default Topic;
