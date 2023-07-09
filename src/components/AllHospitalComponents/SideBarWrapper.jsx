import {
  Tooltip,
  Box,
  Button,
  Stack,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import VajraLogo from "/VajraLogo.svg";
import React, {useState} from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {ExpandMore, ExpandLess} from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import {useNavigate, Link, NavLink} from "react-router-dom";

const drawerWidth = 230;

const SideBarWrapper = (props) => {
  let navigate = useNavigate();
  let menuList = props.menuList;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = (e) => {
    setMobileOpen(!mobileOpen);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("Logout Done");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const drawer = (
    <>
      <Stack alignItems="center" m={2}>
        <img
          src={VajraLogo}
          alt="Dashboard Home Page"
          height={80}
          width={80}
          onClick={() => navigate("/")}
        />
      </Stack>
      <Stack
        spacing={1}
        height="80%"
        alignItems="flex-start"
        justifyContent="flex-start">
        {menuList.map((item, index) => {
          return (
            <Button
              key={index}
              component={NavLink}
              to={item.path}
              end={true}
              sx={{
                justifyContent: "start",
                pl: "3rem",
                gap: "1rem",
                textTransform: "none",
              }}
              style={({isActive}) => {
                return {
                  borderRadius: "0",
                  color: isActive ? "primary.main" : "#FFFFFF",
                  backgroundColor: isActive ? "#FFFFFF" : "primary.main",
                };
              }}
              startIcon={item.icon}
              size="large"
              variant="text"
              fullWidth>
              {item.name}
            </Button>
          );
        })}
      </Stack>
      <Button
        startIcon={<LogoutIcon />}
        component={Link}
        onClick={handleLogout}
        fullWidth
        sx={{
          borderRadius: "0",
          gap: "1rem",
          color: "#FFFFFF",
          backgroundColor: "primary.main",
          justifyContent: "start",
          justifyItems: "end",
        }}>
        Logout
      </Button>
    </>
  );

  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100vw",
          minHeight: "80px",
          display: {laptop: "none", mobile: "grid"},
          gridTemplateColumns: "10% 75% 15%",
          placeItems: "flex-start",
          alignItems: "center",
        }}>
        <IconButton
          aria-label="open drawer"
          onClick={(e) => handleDrawerToggle(e)}>
          <MenuIcon sx={{color: "#FFFFFF"}} />
        </IconButton>
        <Box display="flex" alignItems="center" width="50%" height="50%">
          <img
            style={{height: "80%"}}
            src={VajraLogo}
            alt="Dashboard Home Page"
            onClick={() => navigate("/")}
          />
        </Box>
        <Box sx={{justifySelf: "end"}}>
          <IconButton
            sx={{
              display: {laptop: "none", tablet: "block"},
            }}>
            <AccountCircleIcon sx={{color: "#FFFFFF"}} />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          bgcolor: "background.default",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}>
        <Box
          component="nav"
          sx={{
            width: {laptop: drawerWidth},
            display: "flex",
            bgcolor: "background.default",
            height: "100vh",
            flexShrink: {mobile: 0},
          }}>
          <Drawer
            anchor="left"
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            PaperProps={{
              sx: {
                backgroundColor: "primary.main",
                color: "#FFFFFF",
              },
            }}
            sx={{
              display: {mobile: "flex", laptop: "none"},
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                height: "90vh",
                border: "none",
                borderTopRightRadius: "3rem",
                borderBottomRightRadius: "3rem",
                marginTop: "5vh",
              },
            }}>
            {drawer}
          </Drawer>

          <Drawer
            anchor="left"
            variant="permanent"
            PaperProps={{
              sx: {
                backgroundColor: "primary.main",
                color: "#FFFFFF",
              },
            }}
            sx={{
              display: {mobile: "none", tablet: "none", laptop: "block"},
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                border: "none",
                borderTopRightRadius: "3rem",
                borderBottomRightRadius: "3rem",
                height: "90vh",
                marginTop: "5vh",
              },
            }}
            open>
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            width: "100%",
            minHeight: "100vh",
            bgcolor: "background.default",
            margin: 0,
            padding: "2.5%",
            overflow: {mobile: "scroll", desktop: "unset"},
          }}>
          {props.children}
        </Box>
      </Box>
    </>
  );
};

export default SideBarWrapper;
