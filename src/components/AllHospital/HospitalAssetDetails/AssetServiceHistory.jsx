import {DownloadOutlined} from "@mui/icons-material";
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import ServiceHistEmptyIcon from "/ServiceHistEmptyIcon.png";
const AssetServiceHistory = () => {
  const assetServiceRequests = useSelector(
    (store) => store.data.assetServiceRequests
  );

  const downloadReport = () => {
    console.log("download report has not yet been done");
  };
  return assetServiceRequests.length === 0 ? (
    <Box
      sx={{
        display: "flex",
        paddingY: "2rem",
        flexDirection: "column",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "48%",

        overflow: "auto",
        paddingTop: "0.75rem",
        height: "fit-content",
        bgcolor: "#FFFFFF",
        borderRadius: "2rem",
      }}>
      <img src={ServiceHistEmptyIcon} />
      <Typography variant="subtitle2">Serivice History is empty</Typography>
    </Box>
  ) : (
    <Box
      sx={{
        minWidth: "48%",
        maxHeight: "24rem",
        overflow: "auto",
        paddingTop: "0.75rem",
        height: "fit-content",
        bgcolor: "#FFFFFF",
        borderRadius: "2rem",
      }}>
      <Typography
        display="block"
        marginLeft="1rem"
        marginBottom="1rem"
        variant="body1"
        color="secondary.main">
        Service History
      </Typography>

      <Table
        aria-label="simple table"
        sx={{
          marginX: "auto",
          fontSize: "1.125rem",

          borderBottomLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
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
                <DownloadOutlined onClick={downloadReport} color="secondary" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default AssetServiceHistory;
