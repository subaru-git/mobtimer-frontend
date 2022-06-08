import React, { FC } from "react";
import { Text, Stack, Box, Grid, GridItem, Center } from "@chakra-ui/react";
import { MdOutlineDriveEta } from "react-icons/md";

type MemberListProps = {
  members: string[];
};

const MemberList: FC<MemberListProps> = ({ members }) => {
  return (
    <Stack>
      {members.map((member, index) => (
        <Box key={`${member}-${index}`}>
          <Grid templateColumns="repeat(5, 1fr)" gap={2}>
            <GridItem colStart={1}>
              {index === 0 ? (
                <Center h="100%">
                  <MdOutlineDriveEta size="40px" />
                </Center>
              ) : null}
            </GridItem>
            <GridItem colStart={2} colEnd={5}>
              <Text fontSize="3xl" isTruncated>
                {member}
              </Text>
            </GridItem>
          </Grid>
        </Box>
      ))}
    </Stack>
  );
};

export default MemberList;
