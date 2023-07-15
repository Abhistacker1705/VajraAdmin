import React, {useState} from "react";
import {
  TextField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Menu,
  MenuItem,
  Typography,
  FormControlLabel,
  Checkbox,
  Box,
  InputAdornment,
  InputBase,
  IconButton,
  TableContainer,
} from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import {useParams, Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ServiceReqestTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorElSort, setAnchorElSort] = useState(null);
  const [anchorElFilter, setAnchorElFilter] = useState(null);
  const [sortOption, setSortOption] = useState("");
  const [filterDepartments, setFilterDepartments] = useState([]);
  const [filterCities, setFilterCities] = useState([]);

  const serviceRequests = useSelector((store) => store.data.requests);
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

  const handleCityCheckboxChange = (event) => {
    const {value, checked} = event.target;

    if (checked) {
      setFilterCities([...filterCities, value]);
    } else {
      setFilterCities(filterCities.filter((city) => city !== value));
    }
  };

  const getServiceRequests = () => {
    let filteredData = [...serviceRequests];

    if (filterDepartments.length > 0) {
      filteredData = filteredData.filter((request) =>
        filterDepartments.includes(request.department)
      );
    }

    if (filterCities.length > 0) {
      filteredData = filteredData.filter((request) =>
        filterCities.includes(request.city)
      );
    }

    if (sortOption === "newestToOldest") {
      filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOption === "oldestToNewest") {
      filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortOption === "aToZ") {
      filteredData.sort((a, b) => a.hospital.localeCompare(b.hospital));
    } else if (sortOption === "zToA") {
      filteredData.sort((a, b) => b.hospital.localeCompare(a.hospital));
    }

    return filteredData;
  };

  const filteredServiceRequests = getServiceRequests().filter((request) =>
    request.hospital.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box width="100%">
      <Box>
        <Box display="flex" justifyContent="space-between">
          <Typography
            sx={{
              fontSize: {
                xl: "24px",
                lg: "24px",
                md: "22px",
                sm: "20px",
                xs: "20px",
              },
              fontWeight: "500",
              color: "secondary.main",

              width: {
                xl: "220px",
                lg: "220px",
                md: "220px",
                sm: "120px",
                xs: "80px",
              },
            }}>
            Service Requests
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Box
              sx={{
                display: "flex",
                maxWidth: "20ch",
                borderRadius: "3rem",
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

            <Box display="flex" marginTop="-10px">
              <IconButton onClick={handleSortClick} type="button">
                <SortIcon
                  sx={{
                    width: "60px",
                    height: "40px",
                    color: "secondary.main",
                  }}
                />
              </IconButton>
              <Menu
                anchorEl={anchorElSort}
                open={Boolean(anchorElSort)}
                onClose={handleSortClose}>
                <MenuItem
                  onClick={() => handleSortOptionSelect("newestToOldest")}
                  sx={{
                    color:
                      sortOption === "newestToOldest"
                        ? "secondary.main"
                        : "text.primary",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}>
                  Newest to Oldest
                </MenuItem>
                <MenuItem
                  onClick={() => handleSortOptionSelect("oldestToNewest")}
                  sx={{
                    color:
                      sortOption === "oldestToNewest"
                        ? "secondary.main"
                        : "text.primary",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}>
                  Oldest to Newest
                </MenuItem>
                <MenuItem
                  onClick={() => handleSortOptionSelect("aToZ")}
                  sx={{
                    color:
                      sortOption === "aToZ" ? "secondary.main" : "text.primary",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}>
                  A-Z
                </MenuItem>
                <MenuItem
                  onClick={() => handleSortOptionSelect("zToA")}
                  sx={{
                    color:
                      sortOption === "zToA" ? "secondary.main" : "text.primary",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}>
                  Z-A
                </MenuItem>
              </Menu>
              <IconButton onClick={handleFilterClick}>
                <FilterAltOutlinedIcon
                  sx={{
                    width: "60px",
                    height: "40px",
                    color: "secondary.main",
                    marginLeft: "-20px",
                  }}></FilterAltOutlinedIcon>
              </IconButton>
              <Menu
                anchorEl={anchorElFilter}
                open={Boolean(anchorElFilter)}
                onClose={handleFilterClose}>
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: "18px",
                    fontWeight: "500",
                    marginLeft: "18px",
                  }}>
                  Department
                </Typography>
                <MenuItem>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "text.primary",
                          "&.Mui-checked": {color: "secondary.main"},
                        }}
                        checked={filterDepartments.includes("Radiology")}
                        onChange={handleDepartmentCheckboxChange}
                        value="Radiology"
                      />
                    }
                    label={
                      <Typography
                        style={{
                          color: "text.primary",
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
                          color: "text.primary",
                          "&.Mui-checked": {color: "secondary.main"},
                        }}
                        checked={filterDepartments.includes("ECG")}
                        onChange={handleDepartmentCheckboxChange}
                        value="ECG"
                      />
                    }
                    label={
                      <Typography
                        style={{
                          color: "text.primary",
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
                          color: "text.primary",
                          "&.Mui-checked": {color: "secondary.main"},
                        }}
                        checked={filterDepartments.includes("ICU")}
                        onChange={handleDepartmentCheckboxChange}
                        value="ICU"
                      />
                    }
                    label={
                      <Typography
                        style={{
                          color: "text.primary",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}>
                        ICU
                      </Typography>
                    }
                  />
                </MenuItem>
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: "18px",
                    fontWeight: "500",
                    marginLeft: "18px",
                  }}>
                  City
                </Typography>
                <MenuItem>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "text.primary",
                          "&.Mui-checked": {color: "secondary.main"},
                        }}
                        checked={filterCities.includes("Banglore")}
                        onChange={handleCityCheckboxChange}
                        value="Banglore"
                      />
                    }
                    label={
                      <Typography
                        style={{
                          color: "text.primary",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}>
                        Banglore
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "text.primary",
                          "&.Mui-checked": {color: "secondary.main"},
                        }}
                        checked={filterCities.includes("Shivamogga")}
                        onChange={handleCityCheckboxChange}
                        value="Shivamogga"
                      />
                    }
                    label={
                      <Typography
                        style={{
                          color: "text.primary",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}>
                        Shivamogga
                      </Typography>
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "text.primary",
                          "&.Mui-checked": {color: "secondary.main"},
                        }}
                        checked={filterCities.includes("Davangere")}
                        onChange={handleCityCheckboxChange}
                        value="Davangere"
                      />
                    }
                    label={
                      <Typography
                        style={{
                          color: "text.primary",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}>
                        Davangere
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
            width: "100%",
            overflowX: {xs: "scroll", desktop: "visible"},
            marginTop: "2rem",
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
                    color: "primary.main",
                    borderTopLeftRadius: "1rem",
                  }}>
                  Hospital Name
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: "500",
                    color: "primary.main",
                  }}>
                  Asset Name
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: "500",
                    color: "primary.main",
                  }}>
                  City
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: "500",
                    color: "primary.main",
                  }}>
                  Department
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: "500",
                    color: "primary.main",
                  }}>
                  Issue
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "1.25rem",
                    fontWeight: "500",
                    color: "primary.main",
                    borderTopRightRadius: "1rem",
                  }}>
                  Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredServiceRequests?.map((data) => (
                <TableRow
                  sx={{":hover": {boxShadow: "tableRow"}}}
                  key={data.id}>
                  <TableCell sx={{maxWidth: "20ch", lineHeight: "2"}}>
                    <Link
                      to={`${data.id}`}
                      style={{
                        color: "primary.main",
                        textDecoration: "none",
                      }}>
                      {data.hospital}
                    </Link>
                  </TableCell>
                  <TableCell>{data.asset}</TableCell>
                  <TableCell>{data.city}</TableCell>
                  <TableCell>{data.department}</TableCell>
                  <TableCell>{data.issue}</TableCell>
                  <TableCell>{data.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceReqestTable;
