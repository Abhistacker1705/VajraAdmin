import React, {useState} from "react";
import {
  Box,
  InputBase,
  Menu,
  MenuItem,
  Typography,
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
  Grid,
  Button,
  CardHeader,
} from "@mui/material";
import {Link} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";
import IncidentAndServiceGrid from "../components/AllHospital/IncidentAndServiceGrid";

const OpenServices = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorElSort, setAnchorElSort] = useState(null);
  const [anchorElFilter, setAnchorElFilter] = useState(null);
  const [sortOption, setSortOption] = useState("");
  const [filterDepartments, setFilterDepartments] = useState([]);
  const [filterStatus, setFilterStatus] = useState([]);

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
      setFilterDepartments(filterDepartments.filter((Dept) => Dept !== value));
    }
  };

  const getServices = () => {
    const servicesList = [
      {
        id: 1,
        Head: "Defibrilators",
        Dept: "ICU",
        Date: "2023/07/01",
        Time: "17:44:16",
        Status: "Cleared",
      },
      {
        id: 2,
        Head: "ECG Monitor",
        Dept: "ECG",
        Date: "2023/07/01",
        Time: "17:44:16",
        Status: "Not Cleared",
      },
      {
        id: 3,
        Head: "Defibrilators",
        Dept: "Radiology",
        Date: "2023/06/02",
        Time: "17:44:16",
        Status: "Not Cleared",
      },
      {
        id: 4,
        Head: "ECG Monitor",
        Dept: "ICU",
        Date: "2023/06/01",
        Time: "17:44:16",
        Status: "Cleared",
      },
      {
        id: 5,
        Head: "Radiology Monitor",
        Dept: "ICU",
        Date: "2023/05/01",
        Time: "17:44:16",
        Status: "Not Cleared",
      },
      {
        id: 6,
        Head: "Radiology Monitor",
        Dept: "ECG",
        Date: "2023/05/02",
        Time: "17:44:16",
        Status: "Cleared",
      },
      {
        id: 7,
        Head: "Defibrilators",
        Dept: "Radiology",
        Date: "2023/04/01",
        Time: "17:44:16",
        Status: "Not Cleared",
      },
      {
        id: 8,
        Head: "Defibrilators",
        Dept: "ICU",
        Date: "2023/04/02",
        Time: "17:44:16",
        Status: "Cleared",
      },
      {
        id: 9,
        Head: "ECG Monitor",
        Dept: "ECG",
        Date: "2023/07/01",
        Time: "17:44:16",
        Status: "Not Cleared",
      },
      {
        id: 10,
        Head: "Defibrilators",
        Dept: "Radiology",
        Date: "2023/06/02",
        Time: "17:44:16",
        Status: "Not Cleared",
      },
      {
        id: 11,
        Head: "ICU Monitor",
        Dept: "ICU",
        Date: "2023/06/01",
        Time: "17:44:16",
        Status: "Cleared",
      },
      {
        id: 12,
        Head: "Defibrilators",
        Dept: "ICU",
        Date: "2023/05/01",
        Time: "17:44:16",
        Status: "Not Cleared",
      },
    ];

    let filteredData = [...servicesList];

    if (filterDepartments.length > 0) {
      filteredData = filteredData.filter((request) =>
        filterDepartments.includes(request.Dept)
      );
    }

    if (sortOption === "newestToOldest") {
      filteredData.sort((a, b) => new Date(b.Date) - new Date(a.Date));
    } else if (sortOption === "oldestToNewest") {
      filteredData.sort((a, b) => new Date(a.Date) - new Date(b.Date));
    }
    return filteredData;
  };

  const filteredServices = getServices().filter((request) =>
    request.Head.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openServices = filteredServices.filter(
    (incident) => incident.Status === "Not Cleared"
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
          Services - Open
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
              <MenuItem>
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
                        fontSize: "14px",
                        fontWeight: "500",
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
                        fontSize: "14px",
                        fontWeight: "500",
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
                        fontSize: "14px",
                        fontWeight: "500",
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
      <IncidentAndServiceGrid data={openServices} />
    </SideBarWrapper>
  );
};

export default OpenServices;
