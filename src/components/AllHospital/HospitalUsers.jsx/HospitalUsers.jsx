import React from "react";
import {useSelector} from "react-redux";
import SideBarWrapper from "../../Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../../../utils/dashboardMenuList";
import {Grid, Box, Typography} from "@mui/material";

const HospitalUsers = () => {
  const users = useSelector((store) => store.data.hospitalUsers);

  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        marginBottom="2rem">
        <Typography color="secondary" variant="h3">
          Hospital Users
        </Typography>
      </Box>
      <Grid
        display="grid"
        overflow="hidden"
        width="100%"
        border="1px solid"
        borderColor="#21242780"
        bgcolor="#FFFFFF"
        borderRadius="3rem"
        gridTemplateColumns={{mobile: "1fr", desktop: "1fr 1fr"}}
        // sx={{justifyContent: "center"}}
        container>
        {users.map((user, index) => (
          <Grid
            key={index}
            sx={{
              border: "1px solid",
              borderColor: "#21242780",
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
              gap: "2rem",
              height: "18rem",

              gridTemplateColumn: "1fr 1fr 1fr",
            }}
            item>
            <Typography variant="h3">{user.name}</Typography>
            <Box display="flex" flexDirection="column" gap="1rem">
              <Box display="flex" gap="1rem">
                <Typography width="10ch" variant="body1" color="primary">
                  Role
                </Typography>
                <Typography variant="body2">:</Typography>
                <Typography variant="body2" color="text.default">
                  {user.role}
                </Typography>
              </Box>

              <Box display="flex" gap="1rem">
                <Typography width="10ch" variant="body1" color="primary">
                  Department
                </Typography>
                <Typography variant="body2">:</Typography>
                <Typography variant="body2" color="text.primary">
                  {user.dept}
                </Typography>
              </Box>

              <Box display="flex" gap="1rem">
                <Typography width="10ch" variant="body1" color="primary">
                  Email
                </Typography>
                <Typography variant="body2" color="text.primary">
                  :
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {user.email}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}{" "}
      </Grid>
    </SideBarWrapper>
  );
};

export default HospitalUsers;
