import React, {useState} from "react";
import {
  TextField,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Menu,
  MenuItem,
  Typography,
  FormControlLabel,
  Checkbox,
  InputBase,
  Button,
} from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import {Box} from "@mui/system";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import TableContainer from "@mui/material/TableContainer";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";

const Calibrated = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorElSort, setAnchorElSort] = useState(null);
  const [anchorElFilter, setAnchorElFilter] = useState(null);
  const [sortOption, setSortOption] = useState("");
  const [filterDepartments, setFilterDepartments] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortClick = (event) => {
    setAnchorElSort(event.currentTarget);
  };

  const handleSortClose = () => {
    setAnchorElSort(null);
  };

  let handleSortOptionSelect = (option) => {
    setSortOption(option);
    setAnchorElSort(null);
  };

  const handleFilterClick = (event) => {
    setAnchorElFilter(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorElFilter(null);
  };

  const handleDepartmentCheckboxChange = (event) => {
    const {value, checked} = event.target;

    if (checked) {
      setFilterDepartments([...filterDepartments, value]);
    } else {
      setFilterDepartments(filterDepartments.filter((dept) => dept !== value));
    }
  };

  const getCalibrated = () => {
    const assets = [
      {
        id: 1,
        Asset: "Smart PFT USB",
        Dept: "Radiology",
        SerialNo: "BB34456TR",
        Status: "Calibrated",
        Date: "2023/05/04",
        DueDate: "2023/09/05",
      },
      {
        id: 2,
        Asset: "Apolo PFT USB",
        Dept: "ECG",
        SerialNo: "BB34456TR",
        Status: "Calibrated",
        Date: "2023/03/04",
        DueDate: "2023/05/05",
      },
      {
        id: 3,
        Asset: "Max USB Smart",
        Dept: "ICU",
        SerialNo: "BB34456TR",
        Status: "Calibrated",
        Date: "2023/05/06",
        DueDate: "2023/09/06",
      },
      {
        id: 4,
        Asset: "Smart PFT USB",
        Dept: "Radiology",
        SerialNo: "BB34456TR",
        Status: "Not Calibrated",
        Active: "Not Required",
      },
      {
        id: 5,
        Asset: "Apolo PFT USB",
        Dept: "ECG",
        SerialNo: "BB34456TR",
        Status: "Not Calibrated",
        Active: "Required",
      },
      {
        id: 6,
        Asset: "Max USB Smart",
        Dept: "ICU",
        SerialNo: "BB34456TR",
        Status: "Not Calibrated",
        Active: "Not Required",
      },
      {
        id: 7,
        Asset: "Narayan PFT USB",
        Dept: "Radiology",
        SerialNo: "BB34456TR",
        Status: "Calibrated",
        Date: "2023/02/04",
        DueDate: "2023/06/05",
      },
      {
        id: 8,
        Asset: "Subbhaiha PFT USB",
        Dept: "ECG",
        SerialNo: "BB34456TR",
        Status: "Calibrated",
        Date: "2023/05/04",
        DueDate: "2023/09/05",
      },
      {
        id: 9,
        Asset: "Megan USB Smart",
        Dept: "ICU",
        SerialNo: "BB34456TR",
        Status: "Calibrated",
        Date: "2023/05/06",
        DueDate: "2023/09/06",
      },
      {
        id: 10,
        Asset: "Narayan PFT USB",
        Dept: "Radiology",
        SerialNo: "BB34456TR",
        Status: "Not Calibrated",
        Active: "Not Required",
      },
      {
        id: 11,
        Asset: "Subbhaiha PFT USB",
        Dept: "ECG",
        SerialNo: "BB34456TR",
        Status: "Not Calibrated",
        Active: "Required",
      },
      {
        id: 12,
        Asset: "Megan USB Smart",
        Dept: "ICU",
        SerialNo: "BB34456TR",
        Status: "Not Calibrated",
        Active: "Not Required",
      },
      {
        id: 13,
        Asset: "Smart PFT USB",
        Dept: "Radiology",
        SerialNo: "BB34456TR",
        Status: "Calibrated",
        Date: "2023/05/04",
        DueDate: "2023/09/05",
      },
      {
        id: 14,
        Asset: "Apolo PFT USB",
        Dept: "ECG",
        SerialNo: "BB34456TR",
        Status: "Calibrated",
        Date: "2023/03/04",
        DueDate: "2023/05/05",
      },
      {
        id: 15,
        Asset: "Max USB Smart",
        Dept: "ICU",
        SerialNo: "BB34456TR",
        Status: "Calibrated",
        Date: "2023/05/06",
        DueDate: "2023/09/06",
      },
    ];

    let filteredData = [...assets];

    if (filterDepartments.length > 0) {
      filteredData = filteredData.filter((request) =>
        filterDepartments.includes(request.Dept)
      );
    }

    if (sortOption === "newestToOldest") {
      filteredData.sort((a, b) => new Date(b.DueDate) - new Date(a.DueDate));
    } else if (sortOption === "oldestToNewest") {
      filteredData.sort((a, b) => new Date(a.DueDate) - new Date(b.DueDate));
    } else if (sortOption === "aToZ") {
      filteredData.sort((a, b) => a.Asset.localeCompare(b.Asset));
    } else if (sortOption === "zToA") {
      filteredData.sort((a, b) => b.Asset.localeCompare(a.Asset));
    }
    return filteredData;
  };

  const filteredSearchedData = getCalibrated().filter((request) =>
    request.Asset.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const calibrated = filteredSearchedData.filter(
    (asset) => asset.Status === "Calibrated"
  );

  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="2rem">
        <Typography
          variant="h3"
          sx={{
            color: "#FF731D",
          }}>
          Calibrated
        </Typography>
        <Box display="flex">
          <Box
            sx={{
              display: "flex",
              maxWidth: "20ch",
              borderRadius: "2rem",
              border: "1px solid rgba(23, 70, 162, 0.5)",
              backgroundColor: "#FFFFFF",
            }}>
            <IconButton
              sx={{
                color: "#C2C2C2",
              }}
              type="button"
              aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ml: 1}}
              placeholder="Search"
              inputProps={{"aria-label": "search table"}}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Box>

          <Box display="flex">
            <IconButton onClick={handleSortClick} type="button">
              <SortIcon
                sx={{
                  color: "#FF731D",
                }}></SortIcon>
            </IconButton>
            <Menu
              anchorEl={anchorElSort}
              open={Boolean(anchorElSort)}
              onClose={handleSortClose}>
              <MenuItem
                onClick={() => handleSortOptionSelect("newestToOldest")}
                sx={{
                  color:
                    sortOption === "newestToOldest" ? "#FF731D" : "#212427",
                }}>
                Newest to Oldest
              </MenuItem>
              <MenuItem
                onClick={() => handleSortOptionSelect("oldestToNewest")}
                sx={{
                  color:
                    sortOption === "oldestToNewest" ? "#FF731D" : "#212427",
                }}>
                Oldest to Newest
              </MenuItem>
              <MenuItem
                onClick={() => handleSortOptionSelect("aToZ")}
                sx={{
                  color: sortOption === "aToZ" ? "#FF731D" : "#212427",
                }}>
                A-Z
              </MenuItem>
              <MenuItem
                onClick={() => handleSortOptionSelect("zToA")}
                sx={{
                  color: sortOption === "zToA" ? "#FF731D" : "#212427",
                }}>
                Z-A
              </MenuItem>
            </Menu>
            <IconButton onClick={handleFilterClick}>
              <FilterAltOutlinedIcon
                sx={{
                  color: "#FF731D",
                }}></FilterAltOutlinedIcon>
            </IconButton>
            <Menu
              anchorEl={anchorElFilter}
              open={Boolean(anchorElFilter)}
              onClose={handleFilterClose}>
              <Typography
                sx={{
                  color: "#1746A2",
                }}>
                Department
              </Typography>
              <MenuItem sx={{padding: "2rem"}}>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#212427",
                        "&.Mui-checked": {color: "#FF731D"},
                      }}
                      checked={filterDepartments.includes("Radiology")}
                      onChange={handleDepartmentCheckboxChange}
                      value="Radiology"
                    />
                  }
                  label={
                    <Typography
                      style={{
                        color: "#212427",
                      }}>
                      Radiology
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#212427",
                        "&.Mui-checked": {color: "#FF731D"},
                      }}
                      checked={filterDepartments.includes("ECG")}
                      onChange={handleDepartmentCheckboxChange}
                      value="ECG"
                    />
                  }
                  label={
                    <Typography
                      style={{
                        color: "#212427",
                      }}>
                      ECG
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#212427",
                        "&.Mui-checked": {color: "#FF731D"},
                      }}
                      checked={filterDepartments.includes("ICU")}
                      onChange={handleDepartmentCheckboxChange}
                      value="ICU"
                    />
                  }
                  label={
                    <Typography
                      style={{
                        color: "#212427",
                      }}>
                      ICU
                    </Typography>
                  }
                />
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          boxShadow: "0px 0px 4px 0px #00000033",
          border: "0px solid #1746A280",
          borderRadius: "15px",
          overflowX: "auto",
        }}>
        <Table sx={{backgroundColor: "#FFFFFF", color: "text.primary"}}>
          <TableHead>
            <TableRow sx={{background: "#EFF5FE"}}>
              <TableCell
                sx={{
                  fontWeight: "500",
                  color: "#1746A2",
                }}>
                Asset Name
              </TableCell>

              <TableCell
                align="left"
                sx={{
                  color: "#1746A2",
                }}>
                Department
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "#1746A2",
                }}>
                Serial No
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "#1746A2",
                }}>
                Status
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "#1746A2",
                }}>
                Date
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "#1746A2",
                }}>
                Due Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {calibrated?.map((request, index) => (
              <TableRow key={index}>
                <TableCell>{request.Asset}</TableCell>
                <TableCell align="left">{request.Dept}</TableCell>
                <TableCell align="left">{request.SerialNo}</TableCell>

                <TableCell align="start">
                  <Button
                    sx={{
                      border: "1px solid #00A884 ",
                      color: "#00A884",
                      borderRadius: "2rem",
                      padding: "5px",
                    }}>
                    {" "}
                    {request.Status}
                  </Button>
                </TableCell>

                <TableCell align="left" sx={{}}>
                  {request.Date}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#212427",
                  }}>
                  {request.DueDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </SideBarWrapper>
  );
};

export default Calibrated;
