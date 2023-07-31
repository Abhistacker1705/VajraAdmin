import React, {useState} from "react";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";
import UserCards from "../components/Users/UserCards";
import {Link} from "react-router-dom";
import {Box, Typography, Button} from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";
import {useSelector} from "react-redux";
import {motion} from "framer-motion";

const Users = () => {
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
          Users
        </Typography>
        <Button
          component={Link}
          to="add"
          variant="contained"
          startIcon={<AddCircle fill="#0000FF" />}
          sx={{borderRadius: "2rem", textTransform: "none"}}
          color="primary"
          display="flex"
          gap="0.5rem">
          Add User
        </Button>
      </Box>
      <Box
        display="grid"
        sx={{
          gridTemplateColumns: {tablet: "1fr 1fr", mobile: "1fr"},
        }}
        gridTemplateColumns="1fr 1fr"
        bgcolor="#FFFFFF"
        width="100%"
        overflow="hidden"
        flexWrap="wrap"
        border="1px solid #21242780"
        borderRadius="3rem">
        {users.map((user, index) => (
          <UserCards key={index} index={index} user={user} users={users} />
        ))}
      </Box>
    </SideBarWrapper>
  );
};

export default Users;
