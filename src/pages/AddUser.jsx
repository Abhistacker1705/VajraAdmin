import React, {useEffect} from "react";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";
import {Typography, Box, Button} from "@mui/material";
import AddUserBox from "../components/AddUser/AddUserBox";
import {useSelector, useDispatch} from "react-redux";

const AddUser = () => {
  const users = useSelector((store) => store.data.users);

  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        marginBottom="2rem">
        <Typography color="secondary" variant="h3">
          AddUser
        </Typography>
      </Box>
      <AddUserBox />
    </SideBarWrapper>
  );
};

export default AddUser;
