import {
  Box,
  Button,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import React, {useState} from "react";
import {LabelTextField} from "./LabelTextField";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addUser, addUserFailure} from "../../redux/data/action";

const AddUserBox = () => {
  const navigate = useNavigate();
  const users = useSelector((store) => store.data.users);
  const nextUserId = users.length;

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [userError, setUserError] = useState("");
  const [accessError, setAccessError] = useState("");
  const [showSubmit, setShowSubmit] = useState(false);

  //validate form
  useEffect(() => {
    setPhoneError("");
    setEmailError("");
    setAccessError("");
    setUserError("");
    let validPhone = true;

    const validEmail = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );
    console.log(userDetails.phone.length);
    //phone test
    if (
      userDetails.phone.length > 8 &&
      (userDetails.phone[0] === "6" ||
        userDetails.phone[0] === "7" ||
        userDetails.phone[0] === "8" ||
        userDetails.phone[0] === "9")
    ) {
      validPhone = false;
    } else validPhone = true;

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
    if (validPhone) {
      setPhoneError("Phone Number is not valid");
    }
  }, [userDetails]);

  const [userDetails, setUserDetails] = useState({
    id: nextUserId,
    user: "",
    email: "",
    phone: "",
    access: "",
  });

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

  const handleAddUser = () => {
    if (handleValidation()) {
      dispatch(addUser(userDetails));
      setUserDetails({
        id: users.length,
        user: "",
        email: "",
        phone: "",
        access: "",
      });
      navigate(-1);
    } else return;
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
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="partial">Partial</MenuItem>
            <MenuItem value="guest">Guest</MenuItem>
          </Select>
        </FormControl>

        {errors.phone && <Typography color="error">{errors.phone}</Typography>}
        {errors.email && <Typography color="error">{errors.email}</Typography>}
        {errors.access && (
          <Typography color="error">{errors.access}</Typography>
        )}
        {errors.user && <Typography color="error">{errors.user}</Typography>}
      </Box>

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
    </>
  );
};

export default AddUserBox;
