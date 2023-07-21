import React from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import {Link} from "react-router-dom";

const HospitalTable = ({searchedFilteredHospData}) => {
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: {xs: "scroll", desktop: "visible"},
      }}>
      <Table
        aria-label="simple table"
        sx={{
          marginX: "auto",
          fontSize: "1.125rem",
          maxWidth: {xs: "100vw", md: "95vw"},

          borderRadius: "1rem",
          boxShadow: "0px 0px 4px 0px #00000033",
          backgroundColor: "#FFFFFF",
        }}>
        <TableHead
          sx={{
            backgroundColor: "#1746A233",
          }}>
          <TableRow>
            <TableCell
              sx={{
                fontSize: "1.25rem",
                fontWeight: "500",
                color: "#1746A2",
                borderTopLeftRadius: "1rem",
              }}>
              Hospital-Name
            </TableCell>
            <TableCell
              sx={{fontSize: "1.25rem", fontWeight: "500", color: "#1746A2"}}>
              City
            </TableCell>
            <TableCell
              sx={{fontSize: "1.25rem", fontWeight: "500", color: "#1746A2"}}>
              Ph.No
            </TableCell>
            <TableCell
              sx={{fontSize: "1.25rem", fontWeight: "500", color: "#1746A2"}}>
              Regd. Date
            </TableCell>
            <TableCell
              sx={{
                fontSize: "1.25rem",
                fontWeight: "500",
                color: "#1746A2",
              }}>
              Status
            </TableCell>
            <TableCell
              sx={{
                fontSize: "1.25rem",
                fontWeight: "500",
                color: "#1746A2",
                borderTopRightRadius: "1rem",
              }}>
              Subscription
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {searchedFilteredHospData?.map((data) => (
            <TableRow sx={{":hover": {boxShadow: "tableRow"}}} key={data.id}>
              <TableCell
                sx={{
                  maxWidth: "20ch",
                  lineHeight: "2",
                }}>
                <Link style={{textDecoration: "none"}} to={":hospitalId"}>
                  {data.name}
                </Link>
              </TableCell>

              <TableCell>{data.city}</TableCell>
              <TableCell>{data.phone}</TableCell>
              <TableCell>{data.joinDate}</TableCell>
              <TableCell>
                {data.status.toLowerCase() === "active" ? (
                  <Button
                    sx={{
                      color: "#00A884",
                      fontWeight: "500",
                      borderColor: "#00A884",
                      borderRadius: "2rem",
                    }}
                    disableRipple
                    variant="outlined">
                    {data.status}
                  </Button>
                ) : (
                  <Button
                    sx={{
                      color: "#FF4B4B",
                      fontWeight: "500",
                      borderColor: "#FF4B4B",
                      borderRadius: "2rem",
                    }}
                    disableRipple
                    variant="outlined">
                    {data.status}
                  </Button>
                )}
              </TableCell>
              <TableCell>{data.subscription}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default HospitalTable;
