import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  CardHeader,
  Button,
} from "@mui/material";
import {Link} from "react-router-dom";

const IncidentAndServiceGrid = ({data}) => {
  return (
    <Box
      bgcolor="white"
      width="calc(100%-4rem)"
      height="100%"
      padding="2rem"
      sx={{overflowY: "auto"}}
      borderRadius={"2rem"}>
      <Grid
        container
        width="100%"
        gap="4rem"
        justifyContent={{mobile: "center", laptop: "space-around"}}>
        {data?.map((request, index) => (
          <Grid
            sx={{textDecoration: "none", width: "32rem"}}
            component={Link}
            // to={
            //   request.Status === "Cleared"
            //     ? `/detailscleared/${request.Head}`
            //     : `/detailsnotcleared/${request.Head}`
            // }
            item
            key={index}>
            <Card
              sx={{
                padding: "2rem",
                border: "1px solid #1746A280",
                boxShadow: "0px 0px 4px 0px #00000033",
                borderRadius: "30px",
              }}>
              <CardContent sx={{display: "flex", flexDirection: "column"}}>
                <CardHeader
                  title={request.Head}
                  sx={{padding: "0", marginBottom: "2rem"}}
                  titleTypographyProps={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                  }}
                />

                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap="1rem"
                  marginBottom="2rem">
                  <Box display="flex" justifyContent="space-between">
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      width="25ch">
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "400",
                          color: "#1746A2",
                        }}>
                        Department
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "400",
                          color: "#1746A2",
                        }}>
                        :
                      </Typography>
                    </Box>
                    <Typography
                      display="flex"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "400",
                        color: "#212427",
                      }}>
                      {request.Dept}
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      width="25ch">
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "400",
                          color: "#1746A2",
                        }}>
                        Date
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "400",
                          color: "#1746A2",
                        }}>
                        :
                      </Typography>
                    </Box>
                    <Typography
                      display="flex"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "400",
                        color: "#212427",
                      }}>
                      {request.Date}
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      width="25ch">
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "400",
                          color: "#1746A2",
                        }}>
                        Time
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "400",
                          color: "#1746A2",
                        }}>
                        :
                      </Typography>
                    </Box>
                    <Typography
                      display="flex"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "400",
                        color: "#212427",
                      }}>
                      {request.Time}
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="outlined"
                  sx={{
                    alignSelf: "flex-end",
                    border: "1px solid",
                    textDecoration: "none",
                    textTransform: "none",
                    borderRadius: "5rem",
                    padding: "1rem",
                    color: request.Status === "Cleared" ? "#00A884" : "#FF4B4B",
                  }}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                    }}>
                    {request.Status}
                  </Typography>
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default IncidentAndServiceGrid;
