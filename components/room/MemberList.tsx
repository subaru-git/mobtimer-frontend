import React, { FC } from "react";
import {
  List,
  ListIcon,
  Text,
  Stack,
  Box,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import { MdOutlineDriveEta } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";

const MemberList: FC = () => {
  return (
    <Stack>
      <Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={2}>
          <GridItem colStart={1}>
            <Center w="100%" h="100%">
              <MdOutlineDriveEta size="40px" />
            </Center>
          </GridItem>
          <GridItem colStart={2} colEnd={5}>
            <Text fontSize="3xl" isTruncated>
              driver
            </Text>
          </GridItem>
        </Grid>
      </Box>
      <Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={2}>
          <GridItem colStart={1}>
            <Center w="100%" h="100%">
              <GrMapLocation size="40px" />
            </Center>
          </GridItem>
          <GridItem colStart={2} colEnd={5}>
            <Text fontSize="3xl" isTruncated>
              navigator
            </Text>
          </GridItem>
        </Grid>
      </Box>
      <Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={2}>
          <GridItem colStart={1} />
          <GridItem colStart={2} colEnd={5}>
            <Text fontSize="3xl" isTruncated>
              mob
            </Text>
          </GridItem>
        </Grid>
      </Box>
      <Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={2}>
          <GridItem colStart={1} />
          <GridItem colStart={2} colEnd={5}>
            <Text fontSize="3xl" isTruncated>
              mob
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </Stack>
  );
};

export default MemberList;
