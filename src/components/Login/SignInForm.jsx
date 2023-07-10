import {Typography, TextField, Box, Stack, Button} from "@mui/material";
import {IconTextField} from "./IconTextField";
import {Link, useNavigate} from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LoginUser from "/LoginUser.svg";
import Playstore from "/PlayStore.svg";
import AppStore from "/AppStore.svg";
import {useState, useEffect} from "react";
const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    secretKey: "",
  });
  const [passVisible, setPassVisible] = useState(false);
  const [passwordValidated, setPasswordvalidated] = useState(false);
  const [passwordError, setPasswordError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [showErrors, setShowErrors] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    validateInputs();
  }, [formData]);

  const handleDataSubmit = () => {
    setShowErrors(true);
    setPassVisible(false);
    if (!passwordError && !emailError && formData.secretKey !== "") {
      setFormData({
        email: "",
        password: "",
        secretKey: "",
      });
      console.log(formData);

      navigate("/dashboard");
    } else return;
  };

  const validateInputs = () => {
    if (formData.password.length >= 8) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
    if (formData.email.includes(".") && formData.email.includes("@", 1)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  return (
    <Stack
      maxWidth="100vw"
      direction={{mobile: "column", laptop: "row"}}
      marginY="5rem"
      paddingX="2rem"
      justifyContent="space-between"
      alignItems={{mobile: "center", laptop: "initial"}}
      minHeight="100vh"
      gap={{mobile: "3rem", laptop: "0"}}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        rowGap="3rem"
        width={{mobile: "100%", laptop: "50%"}}
        maxHeight="100%">
        <Typography textAlign="center" variant="h1" color="text.primary">
          Welcome, Vajra Admin
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          paddingX="20%">
          <Typography textAlign="center" variant="h4" color="secondary">
            The Best Hospital Asset Management Application Ever
          </Typography>
        </Box>

        <img
          className="LoginUserImage"
          style={{maxWidth: "80%"}}
          src={LoginUser}
          alt="Login For Admin to Medpick Vajra"
        />
      </Box>
      <Box
        sx={{
          border: "2px solid rgba(255, 115, 29, 0.5)",
          borderRadius: "3.75rem",
          paddingY: "1rem",
        }}
        display="flex"
        gap="2rem"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        width={{mobile: "100%", laptop: "50%"}}
        height="100%">
        <Typography variant="h2" color="text.primary">
          Get Started
        </Typography>
        <Stack>
          <Typography variant="body2" marginBottom="6px">
            Username
          </Typography>
          <IconTextField
            key="Username"
            sx={{
              backgroundColor: "rgba(153, 153, 153, 0.1)",
              border: "1px solid rgba(126, 126, 126, 0.80)",
              boxShadow: "input",
              marginBottom: "20px",
            }}
            error={showErrors ? emailError : false}
            helperText={
              showErrors
                ? emailError
                  ? "Should not be empty and should be valid email"
                  : ""
                : ""
            }
            iconEnd={<PersonOutlineIcon />}
            value={formData.email}
            required
            type="email"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="Username"
            variant="outlined"
            fullWidth
          />
          <Typography variant="body2" marginBottom="6px">
            Password
          </Typography>
          <IconTextField
            key="Password"
            sx={{
              backgroundColor: "rgba(153, 153, 153, 0.1)",
              border: "1px solid rgba(126, 126, 126, 0.80)",
              boxShadow: "input",
              marginBottom: "20px",
            }}
            error={showErrors ? passwordError : false}
            helperText={
              showErrors
                ? passwordError
                  ? "Minimum character length should be 8"
                  : ""
                : ""
            }
            value={formData.password}
            required
            type={passVisible ? "text" : "password"}
            onChange={(e) =>
              setFormData({...formData, password: e.target.value})
            }
            iconEnd={
              <Visibility onClick={() => setPassVisible(!passVisible)} />
            }
            placeholder="Password"
            variant="outlined"
            fullWidth
          />
          <Typography variant="body2" marginBottom="6px">
            Secret Key
          </Typography>
          <TextField
            key="Secretkey"
            sx={{
              backgroundColor: "rgba(153, 153, 153, 0.1)",
              border: "1px solid rgba(126, 126, 126, 0.80)",

              boxShadow: "input",
              marginBottom: "10px",
            }}
            value={formData.secretKey}
            required
            type="password"
            onChange={(e) =>
              setFormData({...formData, secretKey: e.target.value})
            }
            placeholder="SecretKey"
            variant="outlined"
            fullWidth
          />
          <Button
            component={Link}
            to="/forgotpass"
            sx={{
              fontFamily: "'Poppins' ,sans-seriff",
              alignSelf: "end",
              fontSize: "1rem",
              color: "primary",
              textDecoration: "none",
            }}>
            Forgot Password
          </Button>
        </Stack>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="start"
          alignItems="center"
          width="100%">
          {passwordValidated && (
            <Typography variant="subtitle2" color="error">
              Incorrect Password
            </Typography>
          )}
          <Button
            sx={{width: "50%", borderRadius: "2.5rem", marginBottom: "2.5rem"}}
            variant="contained"
            color="primary"
            onClick={handleDataSubmit}>
            Sign in
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};

export default SignInForm;
