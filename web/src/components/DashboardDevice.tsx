import React from "react";
import { Box, Image } from "@chakra-ui/core";
import { Device } from "src/pages/home";

interface DashboardDeviceProps {
  device: Device;
}

export const DashboardDevice: React.FC<DashboardDeviceProps> = ({ device }) => {
  return (
    <Box maxW="xs" borderWidth="1px" rounded="lg" overflow="hidden">
      <Image src="https://image.flaticon.com/icons/svg/2934/2934983.svg" />
      <Box p="6" fontWeight="semibold" fontSize="xl">
        {device.deviceName}
      </Box>
      {device.deviceStates.map((state) => (
        <Box p="6" fontSize="md"></Box>
      ))}
    </Box>
  );
};
