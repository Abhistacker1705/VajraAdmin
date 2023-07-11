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
  IconButton,
  TableContainer,
} from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";

const ServiceReqestTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorElSort, setAnchorElSort] = useState(null);
  const [anchorElFilter, setAnchorElFilter] = useState(null);
  const [sortOption, setSortOption] = useState("");
  const [filterDepartments, setFilterDepartments] = useState([]);
  const [filterCities, setFilterCities] = useState([]);

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
    const serviceRequests = [
      {
        hospital: "Apolo Hospital",
        asset: "PFT USB",
        city: "Banglore",
        department: "ECG",
        issue: "Issue 2 MJHNJNHJH JHJHJHJH JHJJHHHGGGFDDDBJKK",
        date: "2023/07/01",
      },
      {
        hospital: "Megan Hospital",
        asset: "PFT USB",
        city: "Shivamogga",
        department: "ICU",
        issue: "Issue 2 msdddfdfssasd fdsfdsvcdc",
        date: "2023/07/02",
      },
      {
        hospital: "KIMS Hospital",
        asset: "PFT USB",
        city: "Banglore",
        department: "ECG",
        issue: "Issue 3 fdfssasd fdsfdsvcdc hhhdnnadkjdj",
        date: "2023/07/03",
      },
      {
        hospital: "Narayana Hrudayalaya",
        asset: "PFT USB",
        city: "Shivamogga",
        department: "ICU",
        issue: "Issue 4",
        date: "2023/07/04",
      },
      {
        hospital: "Subbhaiah Hospital",
        asset: "PFT USB",
        city: "Shivmogga",
        department: "ECG",
        issue: "Issue 5",
        date: "2023/07/05",
      },
      {
        hospital: "SS Hospital",
        asset: "PFT USB",
        city: "Davangere",
        department: "Radiology",
        issue: "Issue 3",
        date: "2023/07/06",
      },
      {
        hospital: "MAX Hospital",
        asset: "PFT USB",
        city: "Banglore",
        department: "ECG",
        issue: "Issue 2",
        date: "2023/07/02",
      },
      {
        hospital: "Apolo Hospital",
        asset: "PFT USB",
        city: "Banglore",
        department: "ECG",
        issue: "Issue 1",
        date: "2023/07/01",
      },
      {
        hospital: "Megan Hospital",
        asset: "PFT USB",
        city: "Shivamogga",
        department: "Radiology",
        issue: "Issue 2",
        date: "2023/07/02",
      },
      {
        hospital: "KIMS Hospital",
        asset: "PFT USB",
        city: "Banglore",
        department: "ECG",
        issue: "Issue 3",
        date: "2023/07/03",
      },
      {
        hospital: "Narayana Hrudayalaya",
        asset: "PFT USB",
        city: "Shivamogga",
        department: "Radiology",
        issue: "Issue 4",
        date: "2023/07/04",
      },
      {
        hospital: "Subbhaiah Hospital",
        asset: "PFT USB",
        city: "Shivmogga",
        department: "ECG",
        issue: "Issue 5",
        date: "2023/07/05",
      },
      {
        hospital: "SS Hospital",
        asset: "PFT USB",
        city: "Davangere",
        department: "Radiology",
        issue: "Issue 3",
        date: "2023/07/06",
      },
      {
        hospital: "MAX Hospital",
        asset: "PFT USB",
        city: "Banglore",
        department: "ECG",
        issue: "Issue 2",
        date: "2023/07/02",
      },
      {
        hospital: "Apolo Hospital",
        asset: "PFT USB",
        city: "Banglore",
        department: "ECG",
        issue: "Issue 1",
        date: "2023/07/01",
      },
      {
        hospital: "Megan Hospital",
        asset: "PFT USB",
        city: "Shivamogga",
        department: "Radiology",
        issue: "Issue 2",
        date: "2023/07/02",
      },
      {
        hospital: "KIMS Hospital",
        asset: "PFT USB",
        city: "Banglore",
        department: "ECG",
        issue: "Issue 3",
        date: "2023/07/03",
      },
      {
        hospital: "Narayana Hrudayalaya",
        asset: "PFT USB",
        city: "Shivamogga",
        department: "ICU",
        issue: "Issue 4",
        date: "2023/07/04",
      },
      {
        hospital: "Subbhaiah Hospital",
        asset: "PFT USB",
        city: "Shivmogga",
        department: "Radiology",
        issue: "Issue 5",
        date: "2023/07/05",
      },
      {
        hospital: "SS Hospital",
        asset: "PFT USB",
        city: "Davangere",
        department: "ICU",
        issue: "Issue 3",
        date: "2023/07/06",
      },
      {
        hospital: "MAX Hospital",
        asset: "PFT USB",
        city: "Banglore",
        department: "ECG",
        issue: "Issue 2",
        date: "2023/07/02",
      },
      {
        hospital: "Apolo Hospital",
        asset: "PFT USB",
        city: "Banglore",
        department: "ECG",
        issue: "Issue 1",
        date: "2023/07/01",
      },
      {
        hospital: "Megan Hospital",
        asset: "PFT USB",
        city: "Shivamogga",
        department: "ICU",
        issue: "Issue 2",
        date: "2023/07/02",
      },
      {
        hospital: "KIMS Hospital",
        asset: "PFT USB",
        city: "Banglore",
        department: "ECG",
        issue: "Issue 3",
        date: "2023/07/03",
      },
      {
        hospital: "Narayana Hrudayalaya",
        asset: "PFT USB",
        city: "Shivamogga",
        department: "ICU",
        issue: "Issue 4",
        date: "2023/07/04",
      },
      {
        hospital: "Subbhaiah Hospital",
        asset: "PFT USB",
        city: "Shivmogga",
        department: "Radiology",
        issue: "Issue 5",
        date: "2023/07/05",
      },
      {
        hospital: "SS Hospital",
        asset: "PFT USB",
        city: "Davangere",
        department: "ICU",
        issue: "Issue 3",
        date: "2023/07/06",
      },
      {
        hospital: "MAX Hospital",
        asset: "PFT USB",
        city: "Banglore",
        department: "ECG",
        issue: "Issue 2",
        date: "2023/07/02",
      },
      {
        hospital: "Apolo Hospital",
        asset: "PFT USB",
        city: "Banglore",
        department: "ECG",
        issue: "Issue 1",
        date: "2023/07/01",
      },
      {
        hospital: "Megan Hospital",
        asset: "PFT USB",
        city: "Shivamogga",
        department: "Radiology",
        issue: "Issue 2",
        date: "2023/07/02",
      },
      {
        hospital: "KIMS Hospital",
        asset: "PFT USB",
        city: "Banglore",
        department: "ECG",
        issue: "Issue 3",
        date: "2023/07/03",
      },
      {
        hospital: "Narayana Hrudayalaya",
        asset: "PFT USB",
        city: "Shivamogga",
        department: "ICU",
        issue: "Issue 4",
        date: "2023/07/04",
      },
      {
        hospital: "Subbhaiah Hospital",
        asset: "PFT USB",
        city: "Shivmogga",
        department: "ECG",
        issue: "Issue 5",
        date: "2023/07/05",
      },
      {
        hospital: "SS Hospital",
        asset: "PFT USB",
        city: "Davangere",
        department: "ICU",
        issue: "Issue 3",
        date: "2023/07/06",
      },
      {
        hospital: "MAX Hospital",
        asset: "PFT USB",
        city: "Banglore",
        department: "ECG",
        issue: "Issue 2",
        date: "2023/07/02",
      },
    ];

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
        <Box display="flex">
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
              marginTop: "35px",
              marginLeft: "20px",
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
          <Box
            display="flex"
            marginLeft={{xl: "31%", lg: "34%", md: "28%", sm: "20%", xs: "10%"}}
            marginTop={{
              xl: "10px",
              lg: "10px",
              md: "10px",
              sm: "30px",
              xs: "30px",
            }}>
            <Box>
              <TextField
                value={searchQuery}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search"
                sx={{
                  "& fieldset": {
                    borderRadius: "36px",
                    border: "1px solid black",
                    height: "56px",
                    width: {
                      xl: "247px",
                      lg: "247px",
                      md: "247px",
                      sm: "200px",
                      xs: "180px",
                    },
                  },
                }}
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
                        : "#212427",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}>
                  Oldest to Newest
                </MenuItem>
                <MenuItem
                  onClick={() => handleSortOptionSelect("aToZ")}
                  sx={{
                    color: sortOption === "aToZ" ? "secondary.main" : "#212427",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}>
                  A-Z
                </MenuItem>
                <MenuItem
                  onClick={() => handleSortOptionSelect("zToA")}
                  sx={{
                    color: sortOption === "zToA" ? "secondary.main" : "#212427",
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
                          color: "#212427",
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
                          color: "#212427",
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
                          color: "#212427",
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
                          color: "#212427",
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
                          color: "#212427",
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
                          color: "#212427",
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
                          color: "#212427",
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
                          color: "#212427",
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
          width={{
            xl: "1030px",
            lg: "1030px",
            md: "850px",
            sm: "500px",
            xs: "400px",
          }}
          height="937px"
          sx={{
            boxShadow: "0px 0px 4px 0px #00000033",
            border: "0px solid primary.main",
            borderRadius: "15px",
            marginTop: {
              xl: "20px",
              lg: "20px",
              md: "20px",
              sm: "20px",
              xs: "20px",
            },
            marginLeft: {
              xl: "0px",
              lg: "0px",
              md: "25px",
              sm: "50px",
              xs: "38px",
            },
          }}>
          <TableContainer
            sx={{
              minWidth: {xl: 1030, lg: 1030, md: 850, sm: 500, xs: 400},
              height: "937px",
              borderRadius: "15px",
            }}
            aria-label="simple table">
            <Table sx={{backgroundColor: "#FFFFFF"}}>
              <TableHead
                sx={{backgroundColor: "#1746A233"}}
                width="1030px"
                height="50px">
                <TableRow>
                  <Box width="1030px" display="flex">
                    <TableCell
                      align="left"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "500",
                        color: "primary.main",
                        width: "250px",
                        height: "30px",
                      }}>
                      Hospital Name
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "500",
                        color: "primary.main",
                        width: "180px",
                        height: "30px",
                      }}>
                      Asset Name
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "500",
                        color: "primary.main",
                        width: "120px",
                        height: "30px",
                      }}>
                      City
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "500",
                        color: "primary.main",
                        width: "120px",
                        height: "30px",
                      }}>
                      Department
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "500",
                        color: "primary.main",
                        width: "100px",
                        height: "30px",
                      }}>
                      Issue
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "500",
                        color: "primary.main",
                        width: "120px",
                        height: "30px",
                      }}>
                      Date
                    </TableCell>
                  </Box>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredServiceRequests.map((request, index) => (
                  <Box width="1030px">
                    <TableRow display="flex" key={index}>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "18px",
                          fontWeight: "400",
                          color: "#212427",
                          width: "250px",
                          height: "35px",
                          borderColor: "black",
                        }}
                        component="th">
                        {request.hospital}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "18px",
                          fontWeight: "400",
                          color: "#212427",
                          width: "180px",
                          height: "35px",
                          borderColor: "black",
                        }}>
                        {request.asset}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "18px",
                          fontWeight: "400",
                          color: "#212427",
                          width: "120px",
                          height: "35px",
                          borderColor: "black",
                        }}>
                        {request.city}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "18px",
                          fontWeight: "400",
                          color: "#212427",
                          width: "120px",
                          height: "35px",
                          borderColor: "black",
                        }}>
                        {request.department}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "18px",
                          fontWeight: "400",
                          color: "#212427",
                          width: "100px",
                          height: "35px",
                          borderColor: "black",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          "-webkit-line-clamp": "2",
                          "-webkit-box-orient": "vertical",
                        }}>
                        {request.issue}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontSize: "18px",
                          fontWeight: "400",
                          color: "#212427",
                          width: "120px",
                          height: "35px",
                          borderColor: "black",
                        }}>
                        {request.date}
                      </TableCell>
                    </TableRow>
                  </Box>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceReqestTable;
