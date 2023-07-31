import {Card, CardContent, Typography, Grid, Box} from "@mui/material";
import {Link} from "react-router-dom";
import React from "react";

const ReportCard = () => {
  return (
    <Link style={{textDecoration: "none"}} to="reports">
      <Box
        sx={{
          boxShadow: "0px 0px 4px 0px #0000001F",
          borderRadius: "20px",
        }}>
        <Card sx={{borderRadius: "20px", border: "none", height: "100%"}}>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
            }}>
            <Box
              display="flex"
              width="100%"
              flexDirection="column"
              gap="0.75rem"
              alignItems="start">
              <Typography variant="h4" color="primary.main">
                Reports
              </Typography>
              <img
                src="/ReportIcon.png"
                style={{alignSelf: "center", width: "50px", height: "50px"}}
                alt=""
              />

              <Typography
                component={Link}
                color="text.primary"
                sx={{textDecoration: "none"}}
                alignSelf="center"
                variant="body2">
                Total Reports :{" "}
                <Typography variant="" color="secondary">
                  512
                </Typography>
              </Typography>

              <Typography
                component={Link}
                color="text.primary"
                sx={{textDecoration: "none"}}
                alignSelf="center"
                variant="body2">
                Service Reports :{" "}
                <Typography variant="" color="secondary">
                  512
                </Typography>
              </Typography>

              <Typography
                component={Link}
                color="text.primary"
                sx={{textDecoration: "none"}}
                alignSelf="center"
                variant="body2">
                Calibration Reports :{" "}
                <Typography variant="" color="secondary">
                  512
                </Typography>
              </Typography>
              <Typography
                component={Link}
                color="text.primary"
                sx={{textDecoration: "none"}}
                alignSelf="center"
                variant="body2">
                Incident Reports :{" "}
                <Typography variant="" color="secondary">
                  512
                </Typography>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Link>
  );
};

export default ReportCard;
