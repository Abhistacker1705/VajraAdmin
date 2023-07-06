import React from "react";
import VajraLogo from "/VajraLogo.svg";
import {Box, Stack, Link, Typography, IconButton, Icon} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
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
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <IconButton>
          <HomeRoundedIcon sx={{color: "#FFFFFF"}} />
        </IconButton>
        <Link
          sx={{display: {mobile: "none", laptop: "block"}}}
          underline="hover"
          color="#FFFFFF"
          variant="body1">
          HOME
        </Link>
      </Box>
    </Stack>
  );
};

export default Navbar;
