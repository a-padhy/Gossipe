import { Box } from "@chakra-ui/layout";
import SideDrawer from "../components/miscellaneous/SideDrawer.jsx";
import ChatBox from "../components/Chatbox.jsx";
import MyChats from "../components/MyChats.jsx";
import { ChatState } from "../Context/ChatProvider.jsx";
import { useState } from "react";

const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;
