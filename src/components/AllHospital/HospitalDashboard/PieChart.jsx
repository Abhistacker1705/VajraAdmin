import React from "react";
import {Card, CardContent, Typography, Grid, Box} from "@mui/material";
import {Chart} from "react-google-charts";

const PieChart = ({hospitalData}) => {
  const departmentsData = [
    ["Department", "Percentage"],
    ...hospitalData.departments.map((department) => [
      department.name,
      department.percentage,
    ]),
  ];

  return (
    <Box display="flex" width="100%" height="400px">
      <Grid
        width="100%"
        height="400px"
        sx={{background: "white"}}
        marginTop="20px"
        borderRadius="20px"
        border="1px solid #F7811740"
        boxShadow="0px 0px 4px 0px #0000001F">
        <Card
          sx={{
            borderRadius: "20px",
            border: "none",
            height: "100%",
            width: "100%",
          }}>
          <CardContent>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
                color: "#1746A2",
                marginLeft: "10px",
                margintop: "20px",
              }}>
              Department Asset
            </Typography>
            <Chart
              chartType="PieChart"
              width="100%"
              data={departmentsData}
              options={{
                is3D: true,
                width: "100%",
                slices: [
                  {color: "#75cbed"},
                  {color: "#e0b1f6"},
                  {color: "#61CEAA"},
                  {color: "#dc9819"},
                  {color: "#f8ca9e"},
                ],
                legend: {
                  textStyle: {
                    color: "#212427",
                    width: "100%",
                    fontWeight: 500,
                  },
                },
              }}
              height="400px"
              borderRadius="20px"
            />
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default PieChart;
