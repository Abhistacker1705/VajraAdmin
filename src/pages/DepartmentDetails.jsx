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
} from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import {Box} from "@mui/system";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import TableContainer from "@mui/material/TableContainer";
import {useParams} from "react-router-dom";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";

const DepartmentDetails = () => {
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

  const DepartmentsData = {
    Departments: [
      {
        Dept: "Radiology",
        AssetName: "Smart PFT USB",
        Status: "Working",
        Date: "2023/04/04",
        Brand: "BPL",
        SerialNo: "BB34456TR",
      },
      {
        Dept: "Radiology",
        AssetName: "PFT USB",
        Status: "Not Working",
        Date: "2023/05/04",
        Brand: "APL",
        SerialNo: "BB34456TR",
      },
      {
        Dept: "Radiology",
        AssetName: "USB PFT",
        Status: "Working",
        Date: "2023/06/04",
        Brand: "BPL",
        SerialNo: "BB34456TR",
      },
      {
        Dept: "Radiology",
        AssetName: "PFT Radiology",
        Status: "Not Working",
        Date: "2023/07/04",
        Brand: "APL",
        SerialNo: "BB34456TR",
      },
      {
        Dept: "Radiology",
        AssetName: "USB Radiology",
        Status: "Working",
        Date: "2023/08/04",
        Brand: "BPL",
        SerialNo: "BB34456TR",
      },
      {
        Dept: "ECG",
        AssetName: "ECG Monitor",
        Status: "Working",
        Date: "2023/05/04",
        Brand: "BPL",
        SerialNo: "BB34456TR",
      },
      {
        Dept: "ECG",
        AssetName: "Smart Monitor",
        Status: "Not Working",
        Date: "2023/06/04",
        Brand: "APL",
        SerialNo: "BB34456TR",
      },
      {
        Dept: "ECG",
        AssetName: "ECG PFT",
        Status: "Working",
        Date: "2023/07/04",
        Brand: "BPL",
        SerialNo: "BB34456TR",
      },
      {
        Dept: "ICU",
        AssetName: "ICU Monitor",
        Status: "Working",
        Date: "2023/05/04",
        Brand: "BPL",
        SerialNo: "BB34456TR",
      },
      {
        Dept: "ICU",
        AssetName: "ICU PFT",
        Status: "Not Working",
        Date: "2023/04/04",
        Brand: "APL",
        SerialNo: "BB34456TR",
      },
      {
        Dept: "ICU",
        AssetName: "PFT USB",
        Status: "Working",
        Date: "2023/06/04",
        Brand: "APL",
        SerialNo: "BB34456TR",
      },
      {
        Dept: "ICU",
        AssetName: "Samrt PFT USB",
        Status: "Not Working",
        Date: "2023/08/04",
        Brand: "BPL",
        SerialNo: "BB34456TR",
      },
      {
        Dept: "ECHO",
        AssetName: "Smart PFT USB",
        Status: "Working",
        Date: "2023/07/04",
        Brand: "BPL",
        SerialNo: "BB34456TR",
      },
      {
        Dept: "ECHO",
        AssetName: "PFT USB",
        Status: "Not Working",
        Date: "2023/05/04",
        Brand: "APL",
        SerialNo: "BB34456TR",
      },
      {
        Dept: "ECHO",
        AssetName: "USB PFT",
        Status: "Working",
        Date: "2023/06/04",
        Brand: "BPL",
        SerialNo: "BB34456TR",
      },
      {
        Dept: "ECHO",
        AssetName: "PFT Radiology",
        Status: "Not Working",
        Date: "2023/08/04",
        Brand: "APL",
        SerialNo: "BB34456TR",
      },
      {
        Dept: "ECHO",
        AssetName: "USB Radiology",
        Status: "Working",
        Date: "2023/09/04",
        Brand: "BPL",
        SerialNo: "BB34456TR",
      },
      {
        Dept: "OP",
        AssetName: "USB OP",
        Status: "Working",
        Date: "2023/07/04",
        Brand: "BPL",
        SerialNo: "BB34456TR",
      },
      {
        Dept: "OP",
        AssetName: "USB PFT OP",
        Status: "Not Working",
        Date: "2023/09/04",
        Brand: "BPL",
        SerialNo: "BB34456TR",
      },
      {
        Dept: "OP",
        AssetName: "PFT USB Radiology",
        Status: "Working",
        Date: "2023/09/04",
        Brand: "BPL",
        SerialNo: "BB34456TR",
      },
    ],
  };

  const DepartmentDetails = () => {
    let filteredData = [...DepartmentsData.Departments];

    if (filterDepartments.length > 0) {
      filteredData = filteredData.filter((request) =>
        filterDepartments.includes(request.Status)
      );
    }

    if (sortOption === "newestToOldest") {
      filteredData.sort((a, b) => new Date(b.Date) - new Date(a.Date));
    } else if (sortOption === "oldestToNewest") {
      filteredData.sort((a, b) => new Date(a.Date) - new Date(b.Date));
    }
    if (sortOption === "aToZ") {
      filteredData.sort((a, b) => a.AssetName.localeCompare(b.AssetName));
    } else if (sortOption === "zToA") {
      filteredData.sort((a, b) => b.AssetName.localeCompare(a.AssetName));
    }
    return filteredData;
  };

  const filteredDepartments = DepartmentDetails().filter((request) =>
    request.AssetName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const {dept} = useParams();
  const selectedDept = filteredDepartments.filter(
    (item) => item.Dept.toLowerCase() === dept
  );
  console.log(dept, selectedDept);
  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <Box maxWidth="100%" sx={{background: "#FAF5EE", paddingY: "20px"}}>
        <Box>
          <Box display="flex" justifyContent={"space-between"} width="68vw">
            <Box>
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
                  color: "#FF731D",
                  marginTop: "20px",
                  marginLeft: "20px",
                }}>
                {selectedDept[0]?.Dept}
              </Typography>
            </Box>

            <Box display="flex">
              <Box>
                <TextField
                  value={searchQuery}
                  onChange={handleSearchChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
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
                      maxWidth: "247px",
                    },
                  }}></TextField>
              </Box>
              <Box display="flex" marginTop="-10px">
                <IconButton onClick={handleSortClick} type="button">
                  <SortIcon
                    sx={{
                      width: "60px",
                      height: "40px",
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
                      fontSize: "16px",
                      fontWeight: "500",
                    }}>
                    Newest to Oldest
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleSortOptionSelect("oldestToNewest")}
                    sx={{
                      color:
                        sortOption === "oldestToNewest" ? "#FF731D" : "#212427",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}>
                    Oldest to Newest
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleSortOptionSelect("aToZ")}
                    sx={{
                      color: sortOption === "aToZ" ? "#FF731D" : "#212427",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}>
                    A-Z
                  </MenuItem>
                  <MenuItem
                    onClick={() => handleSortOptionSelect("zToA")}
                    sx={{
                      color: sortOption === "zToA" ? "#FF731D" : "#212427",
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
                      color: "#FF731D",
                      marginLeft: "-20px",
                    }}></FilterAltOutlinedIcon>
                </IconButton>
                <Menu
                  anchorEl={anchorElFilter}
                  open={Boolean(anchorElFilter)}
                  onClose={handleFilterClose}>
                  <Typography
                    sx={{
                      color: "#1746A2",
                      fontSize: "18px",
                      fontWeight: "500",
                      marginLeft: "18px",
                    }}>
                    Status
                  </Typography>
                  <MenuItem>
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#212427",
                            "&.Mui-checked": {color: "#FF731D"},
                          }}
                          checked={filterDepartments.includes("Working")}
                          onChange={handleDepartmentCheckboxChange}
                          value="Working"
                        />
                      }
                      label={
                        <Typography
                          style={{
                            color: "#212427",
                            fontSize: "14px",
                            fontWeight: "500",
                          }}>
                          Working
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
                          checked={filterDepartments.includes("Not Working")}
                          onChange={handleDepartmentCheckboxChange}
                          value="Not Working"
                        />
                      }
                      label={
                        <Typography
                          style={{
                            color: "#212427",
                            fontSize: "14px",
                            fontWeight: "500",
                          }}>
                          Not Working
                        </Typography>
                      }
                    />
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Box>
          <Box
            width="100%"
            minHeight="100%"
            sx={{
              boxShadow: "0px 0px 4px 0px #00000033",
              background: "#FFFFFF",
              border: "0px solid #1746A280",
              borderRadius: "15px",
              marginTop: {
                xl: "20px",
                lg: "20px",
                md: "20px",
                sm: "20px",
                xs: "20px",
              },
            }}>
            <TableContainer
              sx={{
                width: "100%",
                minHeight: "100%",
                borderRadius: "15px",
              }}
              aria-label="simple table">
              <Table>
                <TableHead width="1030px" height="50px">
                  <TableRow sx={{background: "#EFF5FE"}}>
                    <TableCell maxWidth="1030px">
                      <Box display="flex">
                        <Typography
                          align="left"
                          sx={{
                            fontSize: "20px",
                            fontWeight: "500",
                            color: "#1746A2",
                            width: "232px",
                            height: "30px",
                          }}>
                          Asset Name
                        </Typography>
                        <Typography
                          align="left"
                          sx={{
                            fontSize: "20px",
                            fontWeight: "500",
                            color: "#1746A2",
                            width: "170px",
                            height: "30px",
                          }}>
                          Brand
                        </Typography>
                        <Typography
                          align="left"
                          sx={{
                            fontSize: "20px",
                            fontWeight: "500",
                            color: "#1746A2",
                            width: "180px",
                            height: "30px",
                          }}>
                          Department
                        </Typography>
                        <Typography
                          align="left"
                          sx={{
                            fontSize: "20px",
                            fontWeight: "500",
                            color: "#1746A2",
                            width: "180px",
                            height: "30px",
                          }}>
                          Serial No
                        </Typography>
                        <Typography
                          align="left"
                          sx={{
                            fontSize: "20px",
                            fontWeight: "500",
                            color: "#1746A2",
                            height: "30px",
                            width: "135px",
                          }}>
                          Status
                        </Typography>
                        <Typography
                          align="left"
                          sx={{
                            fontSize: "20px",
                            fontWeight: "500",
                            color: "#1746A2",
                            height: "30px",
                            width: "135px",
                            marginRight: "20px",
                          }}>
                          AMC/CMC
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedDept?.map((request, index) => (
                    <TableRow display="flex" key={index}>
                      <TableCell
                        maxWidth="1030px"
                        sx={{
                          background: "",
                          borderColor: "black",
                          padding: "10px",
                        }}>
                        <Box display="flex" width="1030px">
                          <Typography
                            align="left"
                            sx={{
                              fontSize: "18px",
                              fontWeight: "500",
                              width: "250px",
                              height: "30px",
                              borderColor: "black",
                              color: "#1746A2",
                            }}
                            component="th">
                            {request.AssetName}
                          </Typography>
                          <Typography
                            align="left"
                            sx={{
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#212427",
                              width: "180px",
                              height: "30px",
                              borderColor: "black",
                            }}>
                            {request.Brand}
                          </Typography>
                          <Typography
                            align="left"
                            sx={{
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#212427",
                              width: "180px",
                              height: "30px",
                              borderColor: "black",
                            }}>
                            {request.Dept}
                          </Typography>
                          <Typography
                            align="left"
                            sx={{
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#212427",
                              width: "180px",
                              height: "30px",
                              borderColor: "black",
                              display: "block",
                            }}>
                            {request.SerialNo}
                          </Typography>
                          <Box
                            align="center"
                            color={
                              request.Status === "Working"
                                ? "#00A884"
                                : "#FF4B4B"
                            }
                            sx={{
                              border: "1px solid",
                              borderRadius: "30px",
                              width: "130px",
                              marginRight: "20px",
                            }}>
                            <Typography
                              align="start"
                              border={
                                request.Status === "Working"
                                  ? "#00A884"
                                  : "#FF4B4B"
                              }
                              sx={{
                                fontSize: "16px",
                                fontWeight: "500",
                                height: "30px",
                                width: "130px",
                                borderColor: "black",
                                display: "block",
                                padding: "5px",
                                marginLeft: "15px",
                              }}>
                              {request.Status}
                            </Typography>
                          </Box>
                          <Typography
                            align="left"
                            sx={{
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#212427",
                              height: "30px",
                              width: "135px",
                              borderColor: "black",
                              display: "block",
                            }}>
                            {request.Date}
                          </Typography>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </SideBarWrapper>
  );
};

export default DepartmentDetails;
