import React, { FC } from "react";
import { Text, Stack, Box, Grid, GridItem, Center } from "@chakra-ui/react";
import { MdOutlineDriveEta } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";

type MemberListProps = {
  members: string[];
};

const MemberList: FC<MemberListProps> = ({ members }) => {
  const current = 0;
  return (
    <Stack>
      {members.map((member, index) => (
        <Box key={`${member}-${index}`}>
          <Grid templateColumns="repeat(5, 1fr)" gap={2}>
            <GridItem colStart={1}>
              {current === index ? (
                <Center w="100%" h="100%">
                  <MdOutlineDriveEta size="40px" />
                </Center>
              ) : (
                <div />
              )}
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
