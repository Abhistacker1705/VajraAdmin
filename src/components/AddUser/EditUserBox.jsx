import {Box, Button} from "@mui/material";
import React, {useState} from "react";
import {LabelTextField} from "./LabelTextField";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addUser, addUserFailure} from "../../redux/data/action";

const EditUserBox = (props) => {
  const users = useSelector((store) => store.data.users);
  console.log(props.toEditUser);
  const [userDetails, setUserDetails] = useState({
    id: props.toEditUser[0].id,
    user: props.toEditUser[0].user,
    email: props.toEditUser[0].email,
    phone: props.toEditUser[0].phone,
    role: props.toEditUser[0].role,
  });

  const dispatch = useDispatch();

  const handleEditUser = () => {
    dispatch(addUser(userDetails));
    setUserDetails({
      id: props.toEditUser[0].id,
      user: "",
      email: "",
      phone: "",
      role: "",
    });
  };

  const handleChange = (e) => {
    setUserDetails({...userDetails, [e.target.name]: e.target.value});
  };

  return (
    <>
      <Box
        display="grid"
        sx={{
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          bgcolor: "#FFFFFF",
          padding: "2rem",
        }}>
        <LabelTextField
          label="Name"
          value={userDetails.user}
          name="user"
          onChange={(e) => handleChange(e)}
        />
        <LabelTextField
          label="Email"
          value={userDetails.email}
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <LabelTextField
          label="Phone No"
          value={userDetails.phone}
          name="phone"
          onChange={(e) => handleChange(e)}
        />
        <LabelTextField
          label="Role"
          value={userDetails.role}
          name="role"
          onChange={(e) => handleChange(e)}
        />
      </Box>
      {props.edit ? (
        <Box display="flex" gap="0.5rem" justifyContent="end" marginTop="2rem">
          <Button
            to="add"
            variant="contained"
            sx={{borderRadius: "2rem", textTransform: "none"}}
            color="primary"
            display="flex"
            gap="0.5rem"
            onClick={handleEditUser}>
            Save
          </Button>
        </Box>
      ) : (
        <Box display="flex" gap="0.5rem" justifyContent="end" marginTop="2rem">
          <Button
            to="add"
            variant="contained"
            sx={{borderRadius: "2rem", textTransform: "none"}}
            color="primary"
            display="flex"
            gap="0.5rem"
            onClick={handleEditUser}>
            Add
          </Button>
          <Button
            component={Link}
            to={"/home/users"}
            variant="contained"
            sx={{borderRadius: "2rem", textTransform: "none"}}
            color="primary"
            display="flex"
            gap="0.5rem">
            Cancel
          </Button>
        </Box>
      )}
    </>
  );
};

export default EditUserBox;
