import {Box, Button, Stack, Drawer, IconButton, AppBar} from "@mui/material";
import VajraLogo from "/VajraLogo.svg";
import React from "react";
import {NavLink} from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import {useNavigate} from "react-router-dom";
const drawerWidth = 230;

const SideBarWrapper = (props) => {
  let navigate = useNavigate();
  let menuList = props.menuList;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = (e) => {
    setMobileOpen(!mobileOpen);
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
      <Stack spacing={1} alignItems="flex-start" justifyContent="flex-start">
        {menuList.map((item, index) => {
          return (
            <Button
              key={index}
              component={NavLink}
              to={item.path}
              end={true}
              style={({isActive}) => {
                return {
                  borderRadius: "0",
                  color: isActive ? "#1746A2" : "#FFFFFF",
                  backgroundColor: isActive ? "#FFFFFF" : "#1746A2",
                };
              }}
              startIcon={item.icon}
              fullWidth
              variant="text">
              {item.name}
            </Button>
          );
        })}
      </Stack>
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
          height: "100vh",
        }}>
        <Box
          component="nav"
          sx={{
            width: {laptop: drawerWidth},
            display: "flex",
            bgcolor: "background.default",
            alignItems: "center",
            justifyContent: "center",
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
            height: "100vh",
            bgcolor: "background.default",
            margin: 0,
            padding: "2.5%",
            overflowY: "scroll",
          }}>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            maxWidth="100vw"
            height="5vh">
            <Box
              variant="h6"
              color="black"
              id="basic-button"
              aria-controls={open2 ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open2 ? "true" : undefined}
              onClick={handleClick2}
              sx={{
                boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "36px",
                minWidth: "150px",
                padding: "20px",
                height: "38px",
                marginRight: "2%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "white",
              }}>
              <AccountCircleOutlinedIcon sx={{color: "#FF731D"}} />
              {userIds.username}
              {!open ? <ExpandMore /> : <ExpandLess />}
            </Box>
            <Menu
              id="basic-menu"
              anchorEl={anchorE2}
              open={open2}
              onClose={handleClose2}
              sx={{marginTop: "2%"}}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}>
              <MenuItem
                onClick={handleClose2}
                component={Link}
                to="/profile"
                button
                key={"2"}
                selected={"/profile" === path}>
                {" "}
                Profile
              </MenuItem>
              <MenuItem
                onClick={handleClose2}
                component={Link}
                to="/"
                button
                key={"2"}>
                {" "}
                Log out
              </MenuItem>
            </Menu>
          </Box>
          {props.children}
        </Box>
      </Box>
    </>
  );
};

export default SideBarWrapper;
