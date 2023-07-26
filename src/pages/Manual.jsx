import React from "react";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";
import {Box} from "@mui/material";

const Manual = () => {
  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <Box display="flex" justifyContent="center" alignItems="center">
        Manual
      </Box>
    </SideBarWrapper>
  );
};

export default Manual;
