import {DownloadOutlined} from "@mui/icons-material";
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";

const AssetServiceHistory = () => {
  const assetServiceRequests = useSelector(
    (store) => store.data.assetServiceRequests
  );
  return (
    <Box
      sx={{
        width: "40vw",
        overflow: "visible",
        marginTop: "2rem",
        paddingTop: "0.5rem",
        height: "fit-content",
        bgcolor: "#FFFFFF",
        borderRadius: "2rem",
      }}>
      <Typography marginLeft="1rem" variant="body1" color="secondary.main">
        Service History
      </Typography>

      <Table
        aria-label="simple table"
        sx={{
          zIndex: "1",
          marginX: "auto",
          fontSize: "1.125rem",
          width: "100%",

          borderRadius: "1rem",
          boxShadow: "0px 0px 4px 0px #00000033",
          backgroundColor: "#FFFFFF",
        }}>
        <TableHead sx={{backgroundColor: "#1746A233"}}>
          <TableRow>
            <TableCell
              sx={{
                fontSize: "1.25rem",
                fontWeight: "500",
                color: "primary.main",
                borderTopLeftRadius: "1rem",
              }}>
              Date
            </TableCell>
            <TableCell
              sx={{
                fontSize: "1.25rem",
                fontWeight: "500",
                color: "primary.main",
              }}>
              Name
            </TableCell>
            <TableCell
              sx={{
                fontSize: "1.25rem",
                fontWeight: "500",
                color: "primary.main",
              }}>
              Report
            </TableCell>
            <TableCell
              sx={{
                fontSize: "1.25rem",
                fontWeight: "500",
                color: "primary.main",
                borderTopRightRadius: "1rem",
              }}>
              Download
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assetServiceRequests?.map((request) => (
            <TableRow sx={{":hover": {boxShadow: "tableRow"}}} key={request.id}>
              <TableCell>{request.date}</TableCell>
              <TableCell>{request.name}</TableCell>
              <TableCell>{request.report}</TableCell>
              <TableCell align="center">
                <DownloadOutlined color="secondary" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default AssetServiceHistory;
