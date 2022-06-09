import React, { FC } from "react";
import { Box, Center, HStack, Link, Text } from "@chakra-ui/react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

const Footer: FC = () => {
  return (
    <Box bg="gray.700" h="24px" w="100%">
      <Center>
        <HStack gap={8}>
          <Text color="white">{`${process.env.COPY_RIGHT}`}</Text>
          <HStack gap={2}>
            <Link href={process.env.GITHUB_URL}>
              <AiFillGithub size="24px" color="white" />
            </Link>
            <Link href={process.env.TWITTER_URL}>
              <AiOutlineTwitter size="24px" color="white" />
            </Link>
          </HStack>
        </HStack>
      </Center>
    </Box>
  );
};

export default Footer;
