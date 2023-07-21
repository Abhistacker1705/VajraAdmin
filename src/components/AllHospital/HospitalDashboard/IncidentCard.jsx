import React from "react";
import {Card, CardContent, Typography, Grid, Box} from "@mui/material";

const IncidentCard = ({hospitalData}) => {
  return (
    <Box
      width={{
        sm: "100%",
        xs: "90vw",
      }}>
      <Grid
        width="100%"
        height="216px"
        sx={{background: "white"}}
        borderRadius="20px"
        border="1px solid #F7811740"
        boxShadow="0px 0px 4px 0px #0000001F">
        <Card sx={{borderRadius: "20px", border: "none", height: "100%"}}>
          <CardContent>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#1746A2",
              }}>
              Incident Statistics
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
              width="100%"
              marginTop="30px">
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#FF731D",
                  display: "flex",
                }}>
                <Typography
                  sx={{
                    marginBottom: "10px",
                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Total Incidents:{" "}
                </Typography>
                {hospitalData.incidentStatistics.total}
              </Typography>

              <Box display="flex" padding="10px">
                <Box
                  sx={{
                    height: "19px",
                    width: "204px",
                    backgroundColor: "#CAE4DC",
                    borderRadius: "25px",
                    overflow: "hidden",
                    marginBottom: "8px",
                  }}>
                  <Box
                    sx={{
                      height: "100%",
                      width: `${hospitalData.incidentStatistics.cleared}%`,
                      backgroundColor: "#61CEAA",
                      borderRadius: "25px",
                    }}></Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#212427",
                    marginLeft: "10px",
                  }}>
                  8 cleared
                </Typography>
              </Box>
              <Box display="flex" height="100%" padding="10px">
                <Box
                  sx={{
                    height: "19px",
                    width: "204px",
                    backgroundColor: "#EDC0C7",
                    borderRadius: "25px",
                    overflow: "hidden",
                  }}>
                  <Box
                    sx={{
                      height: "100%",
                      width: `${hospitalData.incidentStatistics.notCleared}%`,
                      backgroundColor: "#E56D82",
                      borderRadius: "25px",
                    }}></Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#212427",
                    marginLeft: "10px",
                  }}>
                  2 cleared
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default IncidentCard;
