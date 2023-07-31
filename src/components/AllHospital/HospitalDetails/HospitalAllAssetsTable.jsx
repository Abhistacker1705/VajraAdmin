import React from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const HospitalAllAssetsTable = ({filteredSearchedAssetData}) => {
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
              Asset Name
            </TableCell>
            <TableCell
              sx={{fontSize: "1.25rem", fontWeight: "500", color: "#1746A2"}}>
              Brand
            </TableCell>
            <TableCell
              sx={{fontSize: "1.25rem", fontWeight: "500", color: "#1746A2"}}>
              Serial No
            </TableCell>
            <TableCell
              sx={{fontSize: "1.25rem", fontWeight: "500", color: "#1746A2"}}>
              Department
            </TableCell>
            <TableCell
              sx={{fontSize: "1.25rem", fontWeight: "500", color: "#1746A2"}}>
              Status
            </TableCell>
            <TableCell
              sx={{
                fontSize: "1.25rem",
                fontWeight: "500",
                color: "#1746A2",
              }}>
              AMC/CMC
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredSearchedAssetData?.map((data, index) => (
            <TableRow
              component={motion.div}
              initial={{opacity: 0.2, translateY: "-25px", speed: 2}}
              animate={{opacity: 1, translateY: "0"}}
              transition={{duration: 1 + index / 12}}
              sx={{":hover": {boxShadow: "tableRow"}}}
              key={data.id}>
              <TableCell>
                <Typography
                  component={Link}
                  variant="body2"
                  sx={{textDecoration: "none"}}
                  to={`${data.id}`}>
                  {data.assetName}
                </Typography>
              </TableCell>

              <TableCell>{data.brand}</TableCell>
              <TableCell>{data.serialNo}</TableCell>
              <TableCell>{data.department}</TableCell>
              <TableCell>
                {data.status.toLowerCase() === "working" ? (
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
              <TableCell>{data.maintenance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default HospitalAllAssetsTable;
