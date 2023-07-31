import React from "react";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";
import {Box, Button, Typography} from "@mui/material";
import {AddCircleOutline} from "@mui/icons-material";

const Manuals = () => {
  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%">
        <Typography variant="body1" color="secondary.main">
          Manuals
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{borderRadius: "2rem", textTransform: "none"}}
          startIcon={<AddCircleOutline />}>
          Add Manual
        </Button>
      </Box>
    </SideBarWrapper>
  );
};

export default Manuals;
