import { Box, Center, HStack, Link, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

const Footer: FC = () => {
  return (
    <Box bg="gray.700" h="24px" w="100%">
      <Center>
        <HStack gap={8}>
          <Text color="white">(c) 2022 okadat</Text>
          <HStack gap={2}>
            <Link href="https://github.com/subaru-git">
              <AiFillGithub size="24px" color="white" />
            </Link>
            <Link href="https://twitter.com/subaru_m_">
              <AiOutlineTwitter size="24px" color="white" />
            </Link>
          </HStack>
        </HStack>
      </Center>
    </Box>
  );
};

export default Footer;
