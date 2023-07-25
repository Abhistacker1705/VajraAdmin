import React from "react";
import {Card, CardContent, Typography, Grid, Box} from "@mui/material";
import {Link} from "react-router-dom";

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
          <CardContent sx={{display: "flex", flexDirection: "column"}}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#1746A2",
                marginBottom: "2rem",
              }}>
              Incident Statistics
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              gap="1.5rem"
              paddingLeft="1rem"
              height="100%"
              width="100%">
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#FF731D",
                  display: "flex",
                  gap: "1rem",
                }}>
                <Typography
                  component={Link}
                  to="incidents"
                  sx={{
                    textDecoration: "none",

                    fontSize: "18px",
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Total Incidents:{" "}
                </Typography>
                {hospitalData.incidentStatistics.total}
              </Typography>

              <Box
                display="flex"
                gap="1rem"
                sx={{textDecoration: "none"}}
                component={Link}
                to="incidents/cleared">
                <Box
                  sx={{
                    height: "19px",
                    width: "204px",
                    backgroundColor: "#CAE4DC",
                    borderRadius: "25px",
                    overflow: "hidden",
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
                  }}>
                  8 Cleared
                </Typography>
              </Box>
              <Box
                display="flex"
                gap="1rem"
                component={Link}
                to="incidents/notcleared"
                sx={{textDecoration: "none"}}
                height="100%">
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
                  }}>
                  2 Not Cleared
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
