import React from "react";
import {Card, CardContent, Typography, Grid, Box} from "@mui/material";

const WarrantyCard = () => {
  return (
    <Grid
      width="100%"
      sx={{background: "white"}}
      borderRadius="20px"
      border="1px solid #F7811740"
      boxShadow="0px 0px 4px 0px #0000001F">
      <Card sx={{borderRadius: "20px", border: "none", height: "100%"}}>
        <CardContent>
          <Typography variant="h4" color="primary">
            Warranty
          </Typography>
          <Box
            display="flex"
            flexDirection={{lg: "row", xs: "column"}}
            alignItems={{lg: "unset", xs: "center"}}
            gap="2rem"
            padding={{lg: "1.25rem", xs: "0"}}>
            <img
              style={{width: "60px", height: "90px"}}
              src="/Warranty.svg"
              alt=""
            />

            <Typography
              variant="subtitle1"
              color="text.primary"
              sx={{
                textAlign: "center",

                width: "200px",
              }}>
              Click and Check Asset warranty status
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default WarrantyCard;
