import React, {useState} from "react";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";
import UserCards from "../components/Users/UserCards";
import {users} from "../userDummyData";
import {Box} from "@mui/material";
const Users = () => {
  //   const [users, setUsers] = useState([]);
  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <Box
        display="grid"
        gridTemplateColumns="1fr 1fr"
        bgcolor="#FFFFFF"
        width="100%"
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        flexWrap="wrap"
        flexDirection="row"
        border="1px solid #21242780"
        borderRadius="3rem">
        {users.map((user, index) => (
          <UserCards
            key={index}
            user={user}
            // index={index}
            // users={users}
            // setUsers={setUsers}
          />
        ))}
      </Box>
    </SideBarWrapper>
  );
};

export default Users;
