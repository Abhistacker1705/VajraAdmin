import React from "react";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";
import MessageList from "../components/Messages/MessageList";
const Messages = () => {
  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <MessageList />
    </SideBarWrapper>
  );
};

export default Messages;
