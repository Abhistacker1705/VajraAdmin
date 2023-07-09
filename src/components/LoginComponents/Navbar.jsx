import React from "react";
import VajraLogo from "/VajraLogo.svg";
import {Box, Stack, Typography, IconButton} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <Stack
      sx={{backgroundColor: "primary.main"}}
      justifyContent="space-between"
      alignItems="center"
      max-width="100vw"
      height="5rem"
      paddingY="1.25rem"
      paddingX="2rem"
      direction="row">
      <Box>
        <img
          className="vajra-logo"
          src={VajraLogo}
          alt="Vajra Admin Sign Page"
        />
      </Box>
      <Box
        sx={{textDecoration: "none"}}
        component={Link}
        to="/"
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <IconButton>
          <HomeRoundedIcon sx={{color: "#FFFFFF"}} />
        </IconButton>
        <Typography
          sx={{
            display: {mobile: "none", laptop: "block"},
            color: "#FFFFFF",
            textDecoration: "none",
          }}
          variant="body1">
          HOME
        </Typography>
      </Box>
    </Stack>
  );
};

export default Navbar;
