import React, { FC, useState } from "react";
import Link from "next/link";
import { Box, Button, Flex, Heading, HStack, Tooltip } from "@chakra-ui/react";
import CopyToClipboard from "react-copy-to-clipboard";
import { MdOutlinePersonAddAlt } from "react-icons/md";

type AppBarProps = {
  top?: boolean;
};

const AppBar: FC<AppBarProps> = ({ top = false }) => {
  const [tooltip, setTooltip] = useState("Copy to clipboard");
  return (
    <Box bg="lightblue" w="100%" p={4}>
      <Flex h={6} alignItems="center" justifyContent="space-between">
        <Box>
          <Heading as="h1" size="lg" color="gray.50">
            {top ? (
              "Mob Timer"
            ) : (
              <Link href="/" passHref>
                Mob Timer
              </Link>
            )}
          </Heading>
        </Box>
        <Flex>
          <HStack spacing={4}>
            {top ? null : (
              <Tooltip
                label={tooltip}
                onClose={() => {
                  setTooltip("Copy to clipboard");
                }}
                closeOnClick={false}
              >
                <Box>
                  <CopyToClipboard text={window.location.href}>
                    <Button
                      leftIcon={<MdOutlinePersonAddAlt size={22} />}
                      variant="solid"
                      onClick={() => {
                        setTooltip("Copied!");
                      }}
                    >
                      Invite
                    </Button>
                  </CopyToClipboard>
                </Box>
              </Tooltip>
            )}
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AppBar;
