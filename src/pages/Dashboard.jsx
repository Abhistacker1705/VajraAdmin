import React from "react";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";
import {Typography, Box} from "@mui/material";
const Dashboard = () => {
  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="80%">
        <Typography variant="h2" color="primary.main">
          Welcome, Vajra admin
        </Typography>
      </Box>
    </SideBarWrapper>
  );
};

export default Dashboard;
