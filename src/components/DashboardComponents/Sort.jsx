import React, {useState, useEffect} from "react";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import {
  IconButton,
  ListItem,
  Tooltip,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";

const Sort = ({sortOrder, setSortOrder}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (e) => {
    if (e.target.innerText === "By Name") {
      if (sortOrder === "AlphaAsc") {
        setSortOrder("AlphaDesc");
      } else setSortOrder("AlphaAsc");
    } else {
      if (sortOrder === "DateAsc") {
        setSortOrder("DateDesc");
      } else setSortOrder("DateAsc");
    }
  };

  return (
    <>
      <Tooltip title="Sort">
        <IconButton
          onClick={handleClick}
          sx={{
            color: sortOrder.length !== 0 ? "#FF731D" : "#C2C2C2",
          }}>
          <SortOutlinedIcon />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="sort-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{horizontal: "right", vertical: "top"}}
        anchorOrigin={{horizontal: "right", vertical: "bottom"}}>
        <MenuItem
          sx={{
            color:
              sortOrder === "AlphaAsc"
                ? "#FF731D"
                : sortOrder === "AlphaDesc"
                ? "#000000"
                : "initial",
          }}
          onClick={handleMenuClick}>
          <SortByAlphaIcon sx={{marginRight: "0.5rem"}} />
          By Name
        </MenuItem>
        <MenuItem
          sx={{
            color:
              sortOrder === "DateAsc"
                ? "#FF731D"
                : sortOrder === "DateDesc"
                ? "#000000"
                : "initial",
          }}
          onClick={handleMenuClick}>
          <FormatListNumberedRtlIcon sx={{marginRight: "0.5rem"}} /> By Date
        </MenuItem>
      </Menu>
    </>
  );
};

export default Sort;
