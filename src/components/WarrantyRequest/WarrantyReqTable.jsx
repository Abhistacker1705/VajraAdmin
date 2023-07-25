import React, {useEffect, useState, forwardRef} from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Snackbar,
  IconButton,
  Tooltip,
} from "@mui/material";

import {Edit} from "@mui/icons-material";
import MuiAlert from "@mui/material/Alert";
import ChangePriceModal from "./ChangePriceModal";
import {useSelector} from "react-redux";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const WarrantyReqTable = ({filteredSearchedWarrantyData}) => {
  const isValueSaved = useSelector((store) => store.data.isValueSaved);
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");
  const [open, setOpen] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);
  const handlePriceClick = (e, id, price) => {
    setId(id);
    setPrice(price);
    setOpen(true);
  };

  useEffect(() => {
    if (isValueSaved) setSnackOpen(true);
    else return;
  }, [isValueSaved]);

  const handleClose = () => {
    setSnackOpen(false);
  };

  return (
    <>
      <ChangePriceModal open={open} setOpen={setOpen} price={price} id={id} />
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
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  color: "#1746A2",
                }}>
                Hospital Name
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  color: "#1746A2",
                }}>
                Brand
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  color: "#1746A2",
                }}>
                Model No
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  color: "#1746A2",
                }}>
                Department
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  color: "#1746A2",
                }}>
                DOP
              </TableCell>
              <TableCell
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  color: "#1746A2",
                }}>
                Warranty Exp. Date
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  color: "#1746A2",
                }}>
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSearchedWarrantyData?.map((data) => (
              <TableRow sx={{":hover": {boxShadow: "tableRow"}}} key={data.id}>
                <TableCell>
                  <Typography variant="body2">{data.assetName}</Typography>
                </TableCell>

                <TableCell>{data.brand}</TableCell>
                <TableCell>{data.modelNo}</TableCell>
                <TableCell>{data.hospName}</TableCell>
                <TableCell>{data.dept}</TableCell>
                <TableCell>{data.dop}</TableCell>
                <TableCell>{data.warrantyExpDate}</TableCell>
                {data.price ? (
                  <TableCell align="center" sx={{minWidth: "10ch"}}>
                    {data.price}
                    <Tooltip title="Edit Price">
                      <IconButton
                        onClick={(e) =>
                          handlePriceClick(e, data.id, data.price)
                        }>
                        <Edit color="secondary" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                ) : (
                  <TableCell>
                    <Button
                      onClick={(e) => handlePriceClick(e, data.id, data.price)}
                      variant="contained"
                      color="primary"
                      sx={{borderRadius: "2rem", textTransform: "none"}}>
                      Add Price
                    </Button>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Snackbar
          open={snackOpen}
          autoHideDuration={2000}
          onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{width: "100%"}}>
            Price updated
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default WarrantyReqTable;
