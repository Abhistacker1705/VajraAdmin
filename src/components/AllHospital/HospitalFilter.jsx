import React, {useState, useEffect} from "react";
import {
  IconButton,
  Tooltip,
  Box,
  FormLabel,
  Checkbox,
  FormControlLabel,
  Popover,
} from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import {hospitalfilter} from "../../utils/hospitalFilter";

const Filter = ({filters, searchedHospData, setSearchedFilteredHospData}) => {
  const [filterData, setFilterData] = useState({city: [], sub: [], status: []});
  useEffect(() => {
    if (
      filterData.city.length === 0 &&
      filterData.status.length === 0 &&
      filterData.sub.length === 0
    ) {
      setSearchedFilteredHospData(searchedHospData);
    } else {
      const filterAppliedData = hospitalfilter(searchedHospData, filterData);
      setSearchedFilteredHospData(filterAppliedData);
    }
  }, [filterData, searchedHospData]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (e) => {
    let value = e.target.name;
    let name = e.target.getAttribute("data-type");
    if (
      filterData.city.includes(value) ||
      filterData.sub.includes(value) ||
      filterData.status.includes(value)
    ) {
      if (filterData.status.includes(value)) {
        setFilterData({
          ...filterData,
          status: filterData.status.filter(
            (data, idx) => idx !== filterData.status.indexOf(value)
          ),
        });
      } else if (filterData.city.includes(value)) {
        setFilterData({
          ...filterData,
          city: filterData.city.filter(
            (data, idx) => idx !== filterData.city.indexOf(value)
          ),
        });
      } else if (filterData.sub.includes(value)) {
        setFilterData({
          ...filterData,
          sub: filterData.sub.filter(
            (data, idx) => idx !== filterData.sub.indexOf(value)
          ),
        });
      } else {
        return;
      }
    } else {
      if (name === "city") {
        setFilterData({...filterData, city: [...filterData.city, value]});
      } else if (name === "sub") {
        setFilterData({...filterData, sub: [...filterData.sub, value]});
      } else if (name === "status") {
        setFilterData({...filterData, status: [...filterData.status, value]});
      } else {
        return;
      }
    }
  };
  return (
    <>
      <Tooltip title="Filter">
        <IconButton
          sx={{
            color:
              filterData.status.length ||
              filterData.sub.length ||
              filterData.city.length
                ? "#FF731D"
                : "#C2C2C2",
          }}
          onClick={handleClick}
          type="button"
          aria-label="filter">
          <FilterAltOutlinedIcon />
        </IconButton>
      </Tooltip>

      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={handleClose}>
        <Box sx={{padding: "2rem", color: "#212427"}}>
          <Box sx={{display: "flex", flexDirection: "column"}}>
            <FormLabel
              sx={{fontSize: "1.125rem", fontWeight: "500", color: "#1746A2"}}
              component="legend">
              City
            </FormLabel>
            <Box sx={{maxWidth: "30vw", padding: "1rem"}}>
              {filters.city?.map((city) => (
                <FormControlLabel
                  key={city}
                  slotProps={{typography: {fontSize: "0.825rem"}}}
                  control={
                    <Checkbox
                      size="small"
                      inputProps={{
                        "data-type": "city",
                      }}
                      onChange={handleChange}
                      sx={{
                        color: "#FF731D",
                        "&.Mui-checked": {
                          color: "#FF731D",
                        },
                      }}
                      checked={filterData.city.includes(city)}
                      name={city}
                    />
                  }
                  label={city}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{display: "flex", flexDirection: "column"}}>
            <FormLabel
              sx={{fontSize: "1.125rem", fontWeight: "500", color: "#1746A2"}}
              component="legend">
              Status
            </FormLabel>
            <Box sx={{maxWidth: "30vw", padding: "1rem"}}>
              {filters.status?.map((status) => (
                <FormControlLabel
                  key={status}
                  slotProps={{typography: {fontSize: "0.825rem"}}}
                  control={
                    <Checkbox
                      size="small"
                      inputProps={{
                        "data-type": "status",
                      }}
                      onChange={handleChange}
                      sx={{
                        color: "#FF731D",
                        "&.Mui-checked": {
                          color: "#FF731D",
                        },
                      }}
                      checked={filterData.status.includes(status)}
                      name={status}
                    />
                  }
                  label={status}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{display: "flex", flexDirection: "column"}}>
            <FormLabel
              sx={{fontSize: "1.125rem", fontWeight: "500", color: "#1746A2"}}
              component="legend">
              Subscription
            </FormLabel>
            <Box sx={{maxWidth: "30vw", padding: "1rem"}}>
              {filters.subscription?.map((sub) => (
                <FormControlLabel
                  key={sub}
                  slotProps={{typography: {fontSize: "0.825rem"}}}
                  control={
                    <Checkbox
                      inputProps={{
                        "data-type": "sub",
                      }}
                      size="small"
                      onChange={handleChange}
                      sx={{
                        color: "#FF731D",
                        "&.Mui-checked": {
                          color: "#FF731D",
                        },
                      }}
                      checked={filterData.sub.includes(sub)}
                      name={sub}
                    />
                  }
                  label={sub}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default Filter;
