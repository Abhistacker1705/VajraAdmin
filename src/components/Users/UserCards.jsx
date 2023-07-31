import {Box, Icon, IconButton, Stack, Typography} from "@mui/material";
import {EditOutlined, DeleteOutlined} from "@mui/icons-material";
import React from "react";
import {useDispatch} from "react-redux";
import {deleteUser} from "../../redux/data/action";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const UserCards = ({index, user}) => {
  const dispatch = useDispatch();
  //delete users
  const handleDeleteUser = (e, index) => {
    dispatch(deleteUser(index));
  };

  return (
    <Box
      component={motion.div}
      whileHover={{translateY: "-1rem"}}
      display="flex"
      bgcolor="#FFFFFF"
      height="13rem"
      padding="2rem"
      gap="1rem"
      flexDirection="column"
      border="1px solid #21242780"
      justifyContent="start">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h3">{user.user}</Typography>
        <Box display="flex" flexDirection="row">
          <IconButton component={Link} to={`edit/${user.id}`}>
            <EditOutlined color="secondary" />
          </IconButton>
          <IconButton
            onClick={(e) => {
              handleDeleteUser(e, index);
            }}>
            <DeleteOutlined color="secondary" />
          </IconButton>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap="0.75rem">
        <Box
          color="primary.main"
          display="flex"
          flexDirection="row"
          alignItems="center"
          columnGap="0.75rem">
          <Typography variant="body1">User Access : </Typography>
          <Typography variant="body2" color="text.primary">
            {user.access}
          </Typography>
        </Box>

        <Box
          color="primary.main"
          display="flex"
          flexDirection="row"
          alignItems="center"
          columnGap="0.75rem">
          <Typography variant="body1">Phone : </Typography>
          <Typography variant="body2" color="text.primary">
            {user.phone}
          </Typography>
        </Box>
        <Box
          color="primary.main"
          display="flex"
          flexDirection="row"
          alignItems="center"
          columnGap="0.75rem">
          <Typography variant="body1">Email : </Typography>
          <Typography variant="body2" color="text.primary">
            {user.email}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default UserCards;
