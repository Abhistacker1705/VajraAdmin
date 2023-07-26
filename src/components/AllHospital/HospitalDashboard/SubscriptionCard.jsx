import {Card, CardContent, Typography, Grid, Box} from "@mui/material";

import React from "react";

const SubscriptionCard = () => {
  return (
    <Box
      sx={{
        boxShadow: "0px 0px 4px 0px #0000001F",
        borderRadius: "20px",
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
            justifyContent="space-between"
            alignItems="center">
            <Typography variant="h4" color="primary">
              Plus
            </Typography>

            <img
              src="/plan.svg"
              style={{
                width: "64px",
                height: "64px",
              }}
              alt=""
            />

            <Typography variant="h4" fontWeight="400">
              Current Plan
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SubscriptionCard;
