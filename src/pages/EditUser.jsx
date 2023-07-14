import React, {useEffect} from "react";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import EditUserBox from "../components/AddUser/EditUserBox";
import {useParams, useNavigate} from "react-router";
import {useSelector} from "react-redux";
import {DashboardMenuList} from "../utils/dashboardMenuList";
import {Box, Typography} from "@mui/material";

const EditUser = () => {
  const navigate = useNavigate();
  const users = useSelector((store) => store.data.users);
  const {userid} = useParams();
  const toEditUser = users.filter((user) => user.id == userid);

  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        marginBottom="2rem">
        <Typography color="secondary" variant="h3">
          Edit User
        </Typography>
      </Box>
      <EditUserBox toEditUser={toEditUser} />
    </SideBarWrapper>
  );
};

export default EditUser;
