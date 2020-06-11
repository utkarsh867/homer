import React from "react";
import { Box, Flex, Heading, IconButton, useColorMode } from "@chakra-ui/core";
import { LambdaDemo } from "../components/LambdaDemo";
import { WitAI } from "../components/WitAI";
import { DashboardDevice } from "../components/DashboardDevice";

export interface Device {
  deviceName: string;
  deviceStates: DeviceState[];
}

export interface DeviceState {
  type: "analog" | "digital" | "slider";
  value: number | boolean;
}
const mockDevice: Device = {
  deviceName: "Fan",
  deviceStates: [
    {
      type: "analog",
      value: 65,
    },
    {
      type: "digital",
      value: false,
    },
    {
      type: "slider",
      value: 65,
    },
  ],
};
export default () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box as="header">
        <Flex p={5} justifyContent="space-between" alignItems="center">
          <Heading>Homer</Heading>
          <IconButton
            aria-label="color-mode"
            icon={colorMode === "light" ? "moon" : "sun"}
            onClick={toggleColorMode}
          />
        </Flex>
      </Box>
      <Box as="main">
        <Flex justifyContent="center" flex="1">
          <Box textAlign="center">
            <DashboardDevice device={mockDevice} />
            <LambdaDemo />
            <WitAI />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
