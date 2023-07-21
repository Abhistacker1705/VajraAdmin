import {Box, Stack, Typography} from "@mui/material";
import React from "react";
import WarrantyIcon from "/WarrantyIcon.png";

const AssetWarrantyCard = () => {
  return (
    <Stack
      maxHeight="16rem"
      minWidth="48%"
      bgcolor="#FFFFFF"
      padding="1rem"
      borderRadius="2rem">
      <Typography color="secondary.main">Warranty</Typography>
      <Box
        display="flex"
        flexDirection={{mobile: "column", desktop: "row"}}
        justifyContent={{mobile: "center", desktop: "center"}}
        alignItems="center"
        gap="0.5rem"
        padding="2rem">
        <img src={WarrantyIcon} style={{width: "5rem", height: "7rem"}} />
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
    </Stack>
  );
};

export default AssetWarrantyCard;
