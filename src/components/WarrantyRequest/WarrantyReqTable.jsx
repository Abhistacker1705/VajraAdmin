import React, {useEffect, useState, forwardRef, useRef} from "react";
import {
  Box,
  Button,
  ClickAwayListener,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Snackbar,
} from "@mui/material";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changePrice} from "../../redux/data/action";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const WarrantyReqTable = ({filteredSearchedWarrantyData}) => {
  const {isLoading, isValueSaved} = useSelector((store) => store.data);
  const dispatch = useDispatch();
  const [price, setPrice] = useState("");
  const [rowIndex, setRowIndex] = useState(-1);
  const [open, setOpen] = useState(false);

  const ref = useRef();
  useEffect(() => {
    if (isValueSaved) {
      setOpen(true);
      setRowIndex(-1);
    }
  }, [isValueSaved]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleSaveValue = (e) => {
    dispatch(changePrice({id: rowIndex, value: price}));
  };

  const handleTextFieldChange = (e, rowInd, colName) => {
    const Price = e.target.value.toString();
    setPrice(Price);
    filteredSearchedWarrantyData[colName][rowInd] = price;
  };

  return (
    <>
      <ClickAwayListener onClickAway={() => ref.current.blur()}>
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
                    fontSize: "1.25rem",
                    fontWeight: "500",
                    color: "#1746A2",
                  }}>
                  Price
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: "500",
                    color: "#1746A2",
                  }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredSearchedWarrantyData?.map((data) => (
                <TableRow
                  sx={{":hover": {boxShadow: "tableRow"}}}
                  key={data.id}>
                  <TableCell>
                    <Typography variant="body2">{data.assetName}</Typography>
                  </TableCell>

                  <TableCell>{data.brand}</TableCell>
                  <TableCell>{data.modelNo}</TableCell>
                  <TableCell>{data.hospName}</TableCell>
                  <TableCell>{data.dept}</TableCell>
                  <TableCell>{data.dop}</TableCell>
                  <TableCell>{data.warrantyExpDate}</TableCell>

                  <TableCell
                    sx={{minWidth: "10ch"}}
                    onClick={(e) => {
                      setPrice(e.target.value);
                      setRowIndex(data.id);
                    }}>
                    {rowIndex === data.id ? (
                      <TextField
                        ref={ref}
                        onChange={(e) => handleTextFieldChange(e, data.id, 8)}
                        value={price}
                      />
                    ) : (
                      data.price
                    )}
                  </TableCell>
                  <TableCell>
                    <Button
                      sx={{
                        color: "#ffffff",
                        fontWeight: "500",
                      }}
                      disableRipple
                      disabled={rowIndex !== data.id}
                      onClick={handleSaveValue}
                      variant="contained">
                      Save
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{width: "100%"}}>
              This is a success message!
            </Alert>
          </Snackbar>
        </Box>
      </ClickAwayListener>
    </>
  );
};

export default WarrantyReqTable;
