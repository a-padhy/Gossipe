/* eslint-disable react/prop-types */
import { BellIcon } from "@chakra-ui/icons";
import { Badge, Box } from "@chakra-ui/react";

const NotificationBell = ({ notificationCount }) => {
  return (
    <Box position="relative">
      <BellIcon fontSize="2xl" m={1} />
      {notificationCount > 0 && (
        <Badge
          position="absolute"
          top="0"
          right="0"
          colorScheme="red"
          borderRadius="full"
          px={2}
        >
          {notificationCount}
        </Badge>
      )}
    </Box>
  );
};

export default NotificationBell;
