import React, { FC } from "react";
import { Center, Heading, Input, Stack } from "@chakra-ui/react";

type TopicProps = {
  topic: string;
  updateTopic: (topic: string) => void;
};

const Topic: FC<TopicProps> = ({ topic, updateTopic }) => {
  const [newTopic, setNewTopic] = React.useState("");
  return (
    <Stack spacing={4} py={32}>
      <Center>
        <Heading as="h2" size="3xl" isTruncated>
          {topic}
        </Heading>
      </Center>
      <Center>
        <Input
          onChange={(e) => {
            setNewTopic(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              updateTopic(newTopic);
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
