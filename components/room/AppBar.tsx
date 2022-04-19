import React, { FC, useState } from "react";
import { Box, Button, Flex, Heading, Stack, Tooltip } from "@chakra-ui/react";
import CopyToClipboard from "react-copy-to-clipboard";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import Link from "next/link";

const AppBar: FC = () => {
  const [tooltip, setTooltip] = useState("Copy to clipboard");
  return (
    <Box bg="lightblue" w="100%" p={4}>
      <Flex h={6} alignItems="center" justifyContent="space-between">
        <Box>
          <Heading as="h1" size="lg" color="gray.50">
            <Link href="/" passHref>
              Mob Timer
            </Link>
          </Heading>
        </Box>
        <Flex>
          <Stack direction="row" spacing={4}>
            <Box>
              <CopyToClipboard text={window.location.href}>
                <Tooltip
                  label={tooltip}
                  onClose={() => {
                    setTooltip("Copy to clipboard");
                  }}
                  closeOnClick={false}
                >
                  <Button
                    leftIcon={<MdOutlinePersonAddAlt size={22} />}
                    variant="solid"
                    onClick={() => {
                      setTooltip("Copied!");
                    }}
                  >
                    Invite
                  </Button>
                </Tooltip>
              </CopyToClipboard>
            </Box>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AppBar;
