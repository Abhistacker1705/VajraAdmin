import React from "react";
import {Typography, Box} from "@mui/material";

const HospDashHeader = ({hospitalData}) => {
  return (
    <Box display="flex" flexDirection="column" width="100%" gap="3rem">
      <Box
        display={"flex"}
        gap="2rem"
        alignItems={"center"}
        flexDirection={{mobile: "column", tablet: "row"}}
        width="100%">
        <Typography
          variant="h1"
          color="primary"
          sx={{
            maxWidth: "25ch",
          }}>
          {hospitalData.name}
        </Typography>
        <Typography variant="h2" fontWeight="400" color="text.primary">
          {hospitalData.city}
        </Typography>
      </Box>
      <Typography variant="h4" fontWeight="400" color="primary">
        View and analyze hospital data
      </Typography>
    </Box>
  );
};

export default HospDashHeader;
