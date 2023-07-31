import {
  Box,
  Button,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import React, {useState, useEffect} from "react";
import {LabelTextField} from "./LabelTextField";
import {useDispatch, useSelector} from "react-redux";
import {editUser} from "../../redux/data/action";
import {useNavigate} from "react-router-dom";

const EditUserBox = (props) => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    id: props.toEditUser[0].id,
    user: props.toEditUser[0].user,
    email: props.toEditUser[0].email,
    phone: props.toEditUser[0].phone,
    access: props.toEditUser[0].access,
  });

  //validate form
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [userError, setUserError] = useState("");
  const [accessError, setAccessError] = useState("");

  useEffect(() => {
    setPhoneError("");
    setEmailError("");
    setAccessError("");
    setUserError("");
    // let validPhone = true;
    let validPhone = new RegExp(/(0|91)?[6-9][0-9]{9}/);
    const validEmail = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );

    let phoneTest = validPhone.test(userDetails.phone);

    //email test
    let emailTest = validEmail.test(userDetails.email);

    if (!userDetails.user) {
      setUserError("Name cannot be empty");
    }

    if (!userDetails.phone) {
      setPhoneError("Phone Number cannot be empty");
    }
    if (!userDetails.email) {
      setEmailError("Email cannot be empty");
    }

    if (!userDetails.access) {
      setAccessError("User access cannot be empty");
    }
    if (!emailTest) {
      setEmailError("Email is not valid");
    }
    if (!phoneTest) {
      setPhoneError("Phone Number is not valid");
    }
  }, [userDetails]);
  const [open, setOpen] = useState(false);

  const handleAccessChange = (event) => {
    setUserDetails({...userDetails, access: event.target.value});
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();

  const handleEditUser = () => {
    setTimeout(() => {
      if (
        emailError.length === 0 &&
        phoneError.length === 0 &&
        userError.length === 0 &&
        accessError.length === 0
      ) {
        dispatch(editUser(userDetails));

        setUserDetails({
          id: props.toEditUser[0].id,
          user: "",
          email: "",
          phone: "",
          access: "",
        });

        navigate(-1);
      } else return;
    }, 1000);
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
        <FormControl sx={{minWidth: 120}}>
          <Typography
            sx={{marginBottom: "0.5rem"}}
            variant="h4"
            fontWeight="400"
            color="primary.main">
            User Access
          </Typography>
          <Select
            sx={{backgroundColor: "#EFF5FE"}}
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={userDetails.access}
            label="User Access"
            onChange={handleAccessChange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Partial">Partial</MenuItem>
            <MenuItem value="Guest">Guest</MenuItem>
          </Select>
        </FormControl>
        <Box display="flex" flexDirection="column">
          {phoneError && (
            <Typography variant="subtitle1" color="error">
              {phoneError}
            </Typography>
          )}
          {emailError && (
            <Typography variant="subtitle1" color="error">
              {emailError}
            </Typography>
          )}
          {accessError && (
            <Typography variant="subtitle1" color="error">
              {accessError}
            </Typography>
          )}
          {userError && (
            <Typography variant="subtitle1" color="error">
              {userError}
            </Typography>
          )}
        </Box>
      </Box>

      <Box display="flex" gap="0.5rem" justifyContent="end" marginTop="2rem">
        <Button
          variant="contained"
          sx={{borderRadius: "2rem", textTransform: "none"}}
          color="primary"
          display="flex"
          gap="0.5rem"
          onClick={handleEditUser}>
          Save
        </Button>
      </Box>
    </>
  );
};

export default EditUserBox;
