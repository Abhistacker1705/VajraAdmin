import {Box, Button} from "@mui/material";
import React, {useState} from "react";
import {LabelTextField} from "./LabelTextField";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addUser, addUserFailure} from "../../redux/data/action";

const AddUserBox = (props) => {
  const navigate = useNavigate();
  const users = useSelector((store) => store.data.users);
  console.log(props.toEditUser);
  const [userDetails, setUserDetails] = useState({
    id: users.length,
    user: "",
    email: "",
    phone: "",
    role: "",
  });

  const dispatch = useDispatch();

  const handleAddUser = () => {
    dispatch(addUser(userDetails));
    setUserDetails({
      id: users.length,
      user: "",
      email: "",
      phone: "",
      role: "",
    });
    navigate(-1);
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
            onClick={handleAddUser}>
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
            onClick={handleAddUser}>
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

export default AddUserBox;
