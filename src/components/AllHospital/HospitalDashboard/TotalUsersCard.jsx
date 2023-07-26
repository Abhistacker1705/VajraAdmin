import React from "react";
import {Card, CardContent, Typography, Grid, Box} from "@mui/material";
import {Link} from "react-router-dom";

const TotalUsersCard = () => {
  return (
    <Grid
      component={Link}
      to="users"
      width="100%"
      height="100%"
      sx={{background: "white", textDecoration: "none"}}
      borderRadius="20px"
      border="1px solid #F7811740"
      boxShadow="0px 0px 4px 0px #0000001F">
      <Card
        sx={{
          borderRadius: "20px",
          border: "none",
          height: "100%",
        }}>
        <CardContent
          sx={{display: "flex", gap: "0.75rem", flexDirection: "column"}}>
          <Typography variant="h4" color="primary">
            Users
          </Typography>
          <Box alignSelf="center" width="64px" height="64px">
            <img width="100%" height="100%" src="/Users.png" />
          </Box>
          <Box display="flex" alignSelf="center" gap="1rem">
            <Typography variant="subtitle1" color="text.primary">
              Total Users
            </Typography>
            <Typography variant="subtitle1">:</Typography>
            <Typography variant="subtitle1" color="secondary">
              10
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TotalUsersCard;
