import React from "react";
import {Card, CardContent, Typography, Grid, Box} from "@mui/material";

const WarrantyCard = () => {
  return (
    <Box width={{sm: "100%", xs: "90vw"}}>
      <Grid
        width="100%"
        maxHeight="180px"
        sx={{background: "white"}}
        borderRadius="20px"
        border="1px solid #F7811740"
        boxShadow="0px 0px 4px 0px #0000001F">
        <Card sx={{borderRadius: "20px", border: "none", height: "100%"}}>
          <CardContent>
            <Typography
              sx={{fontSize: "18px", fontWeight: "500", color: "#1746A2"}}>
              Warranty
            </Typography>
            <Box
              display="flex"
              flexDirection={{lg: "row", xs: "column"}}
              alignItems={{lg: "unset", xs: "center"}}
              gap="2rem"
              padding={{lg: "2rem", xs: "0"}}>
              <img
                style={{width: "68px", height: "97.83px"}}
                src="/Warranty.svg"
                alt=""
              />

              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontWeight: "400",
                  color: "#212427",
                  width: "260px",
                }}>
                Click and Check your Asset warranty status
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default WarrantyCard;
