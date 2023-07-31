import React from "react";
import {Typography, Box, Button} from "@mui/material";
import {Link} from "react-router-dom";
import {TbFileUpload} from "react-icons/tb";
const HospDashHeader = ({hospitalData}) => {
  return (
    <Box display="flex" flexDirection="column" width="100%" gap="3rem">
      <Box
        display="flex"
        gap="2rem"
        justifyContent="space-between"
        alignItems={"center"}
        flexDirection={{mobile: "column", tablet: "row"}}
        width="100%">
        <Box display="flex" gap="2rem" alignItems={"center"}>
          <Typography
            variant="h1"
            color="primary"
            sx={{
              maxWidth: "25ch",
            }}>
            {hospitalData.name}
          </Typography>
          <Typography variant="h2" fontWeight="400" color="text.primary">
            ,{hospitalData.city}
          </Typography>
        </Box>
        <Box display="flex" gap="2rem" justifySelf="end">
          <Button
            component={Link}
            to="departments"
            startIcon={<TbFileUpload />}
            variant="contained"
            sx={{borderRadius: "2rem", textTransform: "none"}}
            color="primary"
            display="flex"
            gap="0.5rem">
            Upload Bulk Dept
          </Button>
          <Button
            component={Link}
            to="assets"
            startIcon={<TbFileUpload />}
            variant="contained"
            sx={{borderRadius: "2rem", textTransform: "none"}}
            color="primary"
            display="flex"
            gap="0.5rem">
            Upload Bulk Assets
          </Button>
        </Box>
      </Box>
      <Typography variant="h4" fontWeight="400" color="primary">
        View and analyze hospital data
      </Typography>
    </Box>
  );
};

export default HospDashHeader;
