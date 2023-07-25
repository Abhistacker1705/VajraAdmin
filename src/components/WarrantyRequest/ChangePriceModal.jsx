import {
  Dialog,
  Typography,
  Button,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {changePrice} from "../../redux/data/action";

const ChangePriceModal = ({open, setOpen, price, id}) => {
  const dispatch = useDispatch();
  const [newPrice, setNewPrice] = useState("");

  const handleInputChange = (e) => {
    setNewPrice(e.target.value);
  };

  const handleSave = (e) => {
    setOpen(false);
    dispatch(changePrice({id: id, value: newPrice}));
    setNewPrice("");
  };

  const handleClose = (e) => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} scroll="paper">
      {price ? (
        <DialogTitle>Change Price</DialogTitle>
      ) : (
        <DialogTitle>Add Price</DialogTitle>
      )}
      <DialogContent
        sx={{display: "flex", flexDirection: "column", gap: "2rem"}}>
        {price ? <Typography>Current Price : {price}</Typography> : ""}

        <TextField
          type="number"
          placeholder="Enter new price..."
          onChange={handleInputChange}
          autoFocus
          value={newPrice}
        />

        <Button
          variant="contained"
          sx={{borderRadius: "2rem", textTransform: "none"}}
          onClick={handleSave}>
          {price ? "Save" : "Add"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePriceModal;
