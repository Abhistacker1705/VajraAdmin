import React from "react";
import {Card, CardContent, Typography, Grid, Box} from "@mui/material";
import {Link} from "react-router-dom";

const AssetsAndServices = ({hospitalData}) => {
  return (
    <Box width="100%">
      <Grid
        sx={{background: "white"}}
        width="100%"
        maxHeight="400px"
        marginTop="20px"
        borderRadius="20px"
        border="1px solid #F7811740"
        boxShadow="0px 0px 4px 0px #0000001F">
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            borderRadius: "20px",
            border: "none",
            height: "100%",
          }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              justifyContent: "center",
              width: "100%",
            }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "500",
                color: "#1746A2",
              }}>
              Asset
            </Typography>
            <Typography
              sx={{
                width: "60px",
                height: "60px",
              }}>
              <img src="/Asset.svg" alt="" />
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "400",
                color: "#FF731D",
                display: "flex",
                padding: "10px",
              }}>
              <Link
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "end",
                  gap: "1rem",
                  textDecoration: "none",
                }}
                to="assets">
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Total Assets :
                </Typography>
                <Typography sx={{color: "secondary.main"}}>
                  {hospitalData.assets}
                </Typography>
              </Link>
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "500",
                color: "#1746A2",
              }}>
              Services
            </Typography>
            <Typography
              sx={{
                width: "60px",
                height: "60px",
              }}>
              <img src="/Service.svg" alt="" />
            </Typography>
            <Box padding="10px">
              <Link
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "end",
                  gap: "1rem",
                  textDecoration: "none",
                }}
                to="services">
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Total Services :
                </Typography>
                <Typography sx={{color: "secondary.main"}}>
                  {hospitalData.totalService}
                </Typography>
              </Link>
              <Link
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "end",
                  gap: "1rem",
                  textDecoration: "none",
                }}
                to="services/open">
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Open Services :
                </Typography>
                <Typography sx={{color: "secondary.main"}}>
                  {hospitalData.openService}
                </Typography>
              </Link>
              <Link
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "end",
                  gap: "1rem",
                  textDecoration: "none",
                }}
                to="services/cleared">
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Cleared Services :
                </Typography>
                <Typography sx={{color: "secondary.main"}}>
                  {hospitalData.clearedService}
                </Typography>
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default AssetsAndServices;