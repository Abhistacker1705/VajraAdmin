import {Box, Button, TextField, Typography} from "@mui/material";
import React, {useEffect} from "react";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";
import {useParams, redirect, useNavigate} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import {changeHospUserStatus, deleteHospUser} from "../redux/data/action";
const HospitalUserDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {hospitalUsers} = useSelector((store) => store.data);
  const {userId} = useParams();

  const filteredUser = hospitalUsers.filter(
    (user) => user.id === Number(userId)
  );
  const user = filteredUser[0];

  const handleDeleteHospUser = (e) => {
    dispatch(deleteHospUser({id: userId}));
    navigate(-1);
  };

  const handleHospUserStatusChange = (e) => {
    dispatch(changeHospUserStatus({id: userId}));
  };

  useEffect(() => {}, [hospitalUsers]);
  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <Box display="flex" gap="4rem" flexDirection="column" width="100%">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%">
          <Typography color="secondary" variant="h3">
            User Details -{" "}
            <Typography component="span" variant="h3" color="primary">
              {user?.name}
            </Typography>
          </Typography>
        </Box>
        <Box
          display="grid"
          gap="2rem"
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "2rem",
            padding: "2rem",
          }}>
          {/* <Box display="flex" gap="2rem" alignItems="center">
            <Typography width="15ch" variant="h4" color="primary">
              Name
            </Typography>
            <Typography>:</Typography>
            <Typography variant="body2" fontWeight="400">{user.name}</Typography>
          </Box> */}
          <Box display="flex" gap="2rem" alignItems="center">
            <Typography width="15ch" variant="h4" color="primary">
              Role
            </Typography>
            <Typography>:</Typography>
            <Typography variant="body2" fontWeight="400">
              {user?.role}
            </Typography>
          </Box>

          <Box display="flex" gap="2rem" alignItems="center">
            <Typography width="15ch" variant="h4" color="primary">
              Department
            </Typography>
            <Typography>:</Typography>
            <Typography variant="body2" fontWeight="400">
              {user?.dept}
            </Typography>
          </Box>

          <Box display="flex" gap="2rem" alignItems="center">
            <Typography width="15ch" variant="h4" color="primary">
              Designation
            </Typography>
            <Typography>:</Typography>
            <Typography variant="body2" fontWeight="400">
              {user?.designation}
            </Typography>
          </Box>

          <Box display="flex" gap="2rem" alignItems="center">
            <Typography width="15ch" variant="h4" color="primary">
              Email
            </Typography>
            <Typography>:</Typography>
            <Typography variant="body2" fontWeight="400">
              {user?.email}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifySelf="end" alignSelf="end" gap="2rem">
          <Button
            variant="contained"
            onClick={handleHospUserStatusChange}
            //   startIcon={<AddCircle fill="#0000FF" />}
            sx={{borderRadius: "2rem", textTransform: "none"}}
            color="primary"
            display="flex"
            gap="0.5rem">
            {user?.status.toLowerCase() == "inactive"
              ? "Activate User"
              : "Deactivate User"}
          </Button>

          <Button
            variant="contained"
            onClick={(e) => {
              confirm("Are you sure you want to delete the user?")
                ? handleDeleteHospUser(e)
                : "";
            }}
            //   startIcon={<AddCircle fill="#0000FF" />}
            sx={{
              borderRadius: "2rem",
              textTransform: "none",
              bgcolor: "#FF4B4B",
              ":hover": {
                bgcolor: "#FFFFFF",
                color: "#FF4B4B",
              },
            }}
            display="flex"
            gap="0.5rem">
            Delete User
          </Button>
        </Box>
      </Box>
    </SideBarWrapper>
  );
};

export default HospitalUserDetails;
