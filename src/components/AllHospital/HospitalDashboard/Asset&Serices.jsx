import React from "react";
import {Card, CardContent, Typography, Grid, Box} from "@mui/material";
import {Link} from "react-router-dom";

const AssetsAndServices = ({hospitalData}) => {
  return (
    <Box width="100%">
      <Grid
        sx={{background: "white"}}
        width="100%"
        maxHeight="370px"
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
              <Link style={{textDecoration: "none"}} to="assets">
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Total Assets:{hospitalData.assets}
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
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#FF731D",
                  display: "flex",
                  paddingTop: "10px",
                }}>
                <Typography
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Total Service:{" "}
                </Typography>
                {hospitalData.totalService}
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#FF731D",
                  display: "flex",
                }}>
                <Typography
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Open Service:{" "}
                </Typography>
                {hospitalData.openService}
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#FF731D",
                  display: "flex",
                }}>
                <Typography
                  style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Cleared Service:{" "}
                </Typography>
                {hospitalData.clearedService}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default AssetsAndServices;
