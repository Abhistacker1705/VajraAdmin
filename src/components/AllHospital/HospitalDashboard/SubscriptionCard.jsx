import {Card, CardContent, Typography, Grid, Box} from "@mui/material";

import React from "react";

const SubscriptionCard = () => {
  return (
    <Box
      sx={{
        boxShadow: "0px 0px 4px 0px #0000001F",
        borderRadius: "20px",
        marginTop: "20px",
      }}
      width={{
        sm: "100%",
        xs: "90vw",
      }}>
      <Card sx={{borderRadius: "20px", border: "none", height: "100%"}}>
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Box
            display="flex"
            flexDirection="column"
            gap="1rem"
            alignItems="center">
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: "500",
                color: "#1746A2",
              }}>
              Plus
            </Typography>

            <img
              src="/plan.svg"
              style={{
                width: "50px",
                height: "40px",
              }}
              alt=""
            />

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
    </Box>
  );
};

export default SubscriptionCard;
