import React, {useState, useEffect} from "react";
import {Card, CardContent, Typography, Grid, Box} from "@mui/material";
import {Chart} from "react-google-charts";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

const PieChart = ({hospitalData}) => {
  let navigate = useNavigate("");
  const [currdepartment, setCurrDepartment] = useState("");
  const departmentsData = [
    ["Department", "Percentage"],
    ...hospitalData.departments.map((department) => [
      department.name,
      department.percentage,
    ]),
  ];

  const handleClick = (slice) => {
    const dept = departmentsData[slice.row + 1][0];
    console.log(departmentsData[slice.row + 1][0]);
    setCurrDepartment(dept);
  };

  useEffect(() => {
    if (currdepartment) {
      navigate(`departments/${currdepartment.toLowerCase()}`);
    }
  }, [currdepartment, navigate]);

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
            <Link style={{textDecoration: "none"}} to="departments">
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#1746A2",
                  marginLeft: "10px",
                  margintop: "20px",
                }}>
                Department Assets
              </Typography>
            </Link>
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
              chartEvents={[
                {
                  eventName: "ready",
                  callback: ({chartWrapper, google}) => {
                    const chart = chartWrapper.getChart();
                    google.visualization.events.addListener(
                      chart,
                      "select",
                      () => {
                        const chart = chartWrapper.getChart();
                        const selectedItem = chart.getSelection()[0];
                        console.log(selectedItem);
                        if (selectedItem) {
                          handleClick(selectedItem);
                        }
                      }
                    );
                  },
                },
              ]}
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
