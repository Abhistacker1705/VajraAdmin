import React from "react";
import {useDispatch, useSelector} from "react-redux";
import SideBarWrapper from "../../Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../../../utils/dashboardMenuList";
import {Grid, Box, Button, Typography, IconButton} from "@mui/material";
import {Link} from "react-router-dom";
import {DeleteOutlined} from "@mui/icons-material";
import {deleteHospUser} from "../../../redux/data/action";

const HospitalUsers = () => {
  const users = useSelector((store) => store.data.hospitalUsers);
  const dispatch = useDispatch();
  const handleDeleteHospUser = (e, id) => {
    console.log(e.target.getAttribute("href"));
    const link = e.target.getAttribute("href");
    dispatch(deleteHospUser({id}));
  };
  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        marginBottom="2rem">
        <Typography color="secondary" variant="h3">
          Hospital Users - {users.length}
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
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center">
              <Link
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  textDecoration: "none",
                  color: "unset",
                }}
                key={user.id}
                to={`${user.id}`}>
                {" "}
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                  }}
                  variant="h3">
                  {user.name}
                </Typography>
              </Link>
              <Box display="flex" flexDirection="row">
                {user?.status.toLowerCase() == "active" ? (
                  <Button
                    sx={{
                      position: "relative",
                      zIndex: "20",
                      color: "#00A884",
                      fontWeight: "400",
                      borderColor: "#00A884",
                      borderRadius: "2rem",
                    }}
                    disableRipple
                    variant="outlined">
                    Active
                  </Button>
                ) : (
                  <Button
                    sx={{
                      color: "#FF4B4B",
                      fontWeight: "400",
                      borderColor: "#FF4B4B",
                      borderRadius: "2rem",
                    }}
                    disableRipple
                    variant="outlined">
                    InActive
                  </Button>
                )}
                <IconButton
                  variant="outlined"
                  sx={{position: "relative", zIndex: "200"}}
                  onClick={(e) => {
                    confirm("Are you sure you want to delete the user?")
                      ? handleDeleteHospUser(e, user.id)
                      : "";
                  }}>
                  <DeleteOutlined color="secondary" />
                </IconButton>
              </Box>
            </Box>
            <Link
              style={{
                textDecoration: "none",
                color: "unset",
              }}
              key={user.id}
              to={`${user.id}`}>
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
            </Link>
          </Grid>
        ))}{" "}
      </Grid>
    </SideBarWrapper>
  );
};

export default HospitalUsers;
