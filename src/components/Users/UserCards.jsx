import {Box, Icon, IconButton, Stack, Typography} from "@mui/material";
import {EditOutlined, DeleteOutlined} from "@mui/icons-material";
import React from "react";

const UserCards = ({user, index, users, setUsers}) => {
  const deleteUser = (e, index) => {
    // const filteredUsers = users.filter((user, idx) => idx !== index);
    // setUsers(filteredUsers);
  };
  return (
    <Box
      display="flex"
      bgcolor="#FFFFFF"
      height="20rem"
      padding="2rem"
      gap="1rem"
      flexDirection="column"
      border="1px solid #21242780"
      justifyContent="start">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h3">{user.name}</Typography>
        <Box display="flex" flexDirection="row">
          <IconButton>
            <EditOutlined color="secondary" />
          </IconButton>
          <IconButton onClick={(e) => deleteUser(e, index)}>
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
          <Typography variant="body1">Role : </Typography>
          <Typography variant="body2" color="text.primary">
            {user.role}
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
