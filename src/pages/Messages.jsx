import React from "react";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";
const Messages = () => {
  return <SideBarWrapper menuList={DashboardMenuList}>Messages</SideBarWrapper>;
};

export default Messages;
