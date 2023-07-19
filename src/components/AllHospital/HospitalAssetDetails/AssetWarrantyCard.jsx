import {Box, Typography} from "@mui/material";
import React from "react";
import WarrantyIcon from "/WarrantyIcon.png";

const AssetWarrantyCard = () => {
  return (
    <Box
      zIndex="1"
      position="relative"
      minWidth="15rem"
      bgcolor="#FFFFFF"
      padding="1rem"
      borderRadius="2rem">
      <Typography color="secondary.main">Warranty</Typography>
      <Box display="flex" gap="0.5rem" padding="2rem">
        <img src={WarrantyIcon} style={{scale: "0.8"}} />
        <Typography
          display="flex"
          justifyContent="start"
          alignItems="center"
          textAlign="center"
          fontWeight="400"
          variant="subtitle2">
          View warranty status of asset
        </Typography>
      </Box>
    </Box>
  );
};

export default AssetWarrantyCard;
