import React from "react";
import {Card, CardContent, Typography, Grid, Box} from "@mui/material";
import {Link} from "react-router-dom";
const CalibrationCard = ({hospitalData}) => {
  return (
    <Grid
      width="100%"
      sx={{background: "white"}}
      borderRadius="20px"
      border="1px solid #F7811740"
      boxShadow="0px 0px 4px 0px #0000001F">
      <Card sx={{borderRadius: "20px", border: "none", height: "100%"}}>
        <CardContent>
          <Typography variant="h4" color="primary">
            Calibration
          </Typography>
          {hospitalData.calibration.map((calibration, index) => (
            <Box
              component={Link}
              to={calibration.task.split(" ").join("").toLowerCase()}
              sx={{textDecoration: "none"}}
              key={index}>
              <Box display="flex" padding="10px">
                <Box
                  sx={{
                    height: "14.85px",
                    width: "238px",
                    backgroundColor:
                      calibration.task === "Calibrated"
                        ? "#CAE4DC"
                        : calibration.task === "Not Calibrated"
                        ? "#DADEFF"
                        : "#EDC0C7",
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}>
                  <Box
                    sx={{
                      height: "100%",
                      borderRadius: "3px",
                      width: `${calibration.percentage}%`,
                      backgroundColor:
                        calibration.task === "Calibrated"
                          ? "#61CEAA"
                          : calibration.task === "Not Calibrated"
                          ? "#1746A2"
                          : "#E56D82",
                    }}></Box>
                </Box>

                <Box display="flex" marginTop="-2px" marginLeft="15px">
                  <Typography
                    variant="body2"
                    sx={{
                      color:
                        calibration.task === "Calibrated"
                          ? "#61CEAA"
                          : calibration.task === "Not Calibrated"
                          ? "#1746A2"
                          : "#E56D82",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}>
                    {`${calibration.percentage}\\100`}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#212427",
                      marginTop: "-1.5px",
                      marginLeft: "10px",
                    }}>
                    {calibration.task}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CalibrationCard;
