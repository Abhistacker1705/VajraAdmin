import React from "react";
import {Typography, Box} from "@mui/material";

const HospDashHeader = ({hospitalData}) => {
  return (
    <Box width="100%">
      <Box display={"flex"} width="100%">
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "500",
            color: "#1746A2",
            width: "300px",
          }}>
          {hospitalData.name}
        </Typography>
        <Typography
          sx={{fontSize: "30px", fontWeight: "500", color: "#212427"}}>
          {hospitalData.city}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "500",
          color: "#1746A2",
          width: {
            xl: "600px",
            lg: "600px",
            md: "600px",
            sm: "550px",
            xs: "460px",
          },
        }}>
        View and analyze hospital data
      </Typography>
    </Box>
  );
};

export default HospDashHeader;
