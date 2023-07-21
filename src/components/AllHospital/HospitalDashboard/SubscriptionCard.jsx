import {Card, CardContent, Typography, Grid, Box} from "@mui/material";

import React from "react";

const SubscriptionCard = () => {
  return (
    <Box
      width={{
        sm: "100%",
        xs: "90vw",
      }}>
      <Grid
        width="100%"
        maxHeight="196px"
        sx={{background: "white"}}
        marginTop="20px"
        borderRadius="20px"
        border="1px solid #F7811740"
        boxShadow="0px 0px 4px 0px #0000001F">
        <Card sx={{borderRadius: "20px", border: "none", height: "100%"}}>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Box marginTop="35px">
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "500",
                  color: "#1746A2",
                  marginLeft: "49px",
                }}>
                Plus
              </Typography>
              <Typography>
                <img
                  src="/plan.svg"
                  style={{
                    width: "50px",
                    height: "40px",
                    marginLeft: "48px",
                  }}
                  alt=""
                />
              </Typography>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "500",
                  color: "#212427",
                }}>
                Current Plan
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default SubscriptionCard;
