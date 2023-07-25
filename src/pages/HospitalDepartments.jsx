import React, {useState} from "react";
import {Box, Typography} from "@mui/material";
import {
  TextField,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Menu,
  MenuItem,
} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import {Link} from "react-router-dom";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";
const HospitalDepartments = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorElSort, setAnchorElSort] = useState(null);
  const [sortOption, setSortOption] = useState("");

  const DepartmentsData = {
    Hospital: "Apolo Hospital",
    City: "Banglore",
    Departments: [
      {
        Dept: "Radiology",
        Asset: ["Smart PFT_USB", "USB", "ECG Monitor", "PFT", "USB-PFT"],
        InCharge: "Dhanush",
      },
      {
        Dept: "ECG",
        Asset: ["Smart PFT_USB", "ECG Monitor", "USB-PFT"],
        InCharge: "Abhijith",
      },
      {
        Dept: "ICU",
        Asset: ["Smart PFT_USB", "ECG Monitor", "PFT", "USB-PFT"],
        InCharge: "Arunraj",
      },
      {
        Dept: "Radiology",
        Asset: ["Smart PFT_USB", "USB", "ECG Monitor", "PFT", "USB-PFT"],
        InCharge: "Dhanush",
      },
      {
        Dept: "ECG",
        Asset: ["Smart PFT_USB", "ECG Monitor", "USB-PFT"],
        InCharge: "Abhijith",
      },
      {
        Dept: "ICU",
        Asset: ["Smart PFT_USB", "ECG Monitor", "PFT", "USB-PFT"],
        InCharge: "Arunraj",
      },
      {
        Dept: "ECHO",
        Asset: ["Smart PFT_USB", "USB", "ECG Monitor", "PFT", "USB-PFT"],
        InCharge: "Dhanush",
      },
      {
        Dept: "OP",
        Asset: ["Smart PFT_USB", "ECG Monitor", "USB-PFT"],
        InCharge: "Abhijith",
      },
      {
        Dept: "ICU",
        Asset: ["Smart PFT_USB", "ECG Monitor", "PFT", "USB-PFT"],
        InCharge: "Arunraj",
      },
      {
        Dept: "Radiology",
        Asset: ["Smart PFT_USB", "USB", "ECG Monitor", "PFT", "USB-PFT"],
        InCharge: "Dhanush",
      },
      {
        Dept: "ECHO",
        Asset: ["Smart PFT_USB", "ECG Monitor", "USB-PFT"],
        InCharge: "Abhijith",
      },
      {
        Dept: "ICU",
        Asset: ["Smart PFT_USB", "ECG Monitor", "PFT", "USB-PFT"],
        InCharge: "Arunraj",
      },
      {
        Dept: "OP",
        Asset: ["Smart PFT_USB", "USB", "ECG Monitor"],
        InCharge: "Dhanush",
      },
      {
        Dept: "ECG",
        Asset: ["Smart PFT_USB", "ECG Monitor", "USB-PFT"],
        InCharge: "Abhijith",
      },
      {
        Dept: "OP",
        Asset: ["Smart PFT_USB", "ECG Monitor", "PFT"],
        InCharge: "Arunraj",
      },
      {
        Dept: "Radiology",
        Asset: ["Smart PFT_USB", "USB", "ECG Monitor", "PFT", "USB-PFT"],
        InCharge: "Dhanush",
      },
      {
        Dept: "ECG",
        Asset: ["Smart PFT_USB", "ECG Monitor", "USB-PFT"],
        InCharge: "Abhijith",
      },
      {
        Dept: "ECHO",
        Asset: ["Smart PFT_USB", "ECG Monitor", "PFT", "USB-PFT"],
        InCharge: "Arunraj",
      },
    ],
  };

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

  const DepartmentDetails = () => {
    let filteredData = [...DepartmentsData.Departments];

    if (sortOption === "aToZ") {
      filteredData.sort((a, b) => a.Dept.localeCompare(b.Dept));
    } else if (sortOption === "zToA") {
      filteredData.sort((a, b) => b.Dept.localeCompare(a.Dept));
    }
    return filteredData;
  };

  const filteredDepartments = DepartmentDetails().filter((request) =>
    request.Dept.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <Box minWidth="100%" minHeight="100%" sx={{background: "#FAF5EE"}}>
        <Box
          display={{
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "block",
            xs: "block",
          }}>
          <Box>
            <Box
              display={"flex"}
              width={{
                xl: "600px",
                lg: "600px",
                md: "600px",
                sm: "550px",
                xs: "460px",
              }}>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "500",
                  color: "#1746A2",
                  width: "300px",
                }}>
                {DepartmentsData.Hospital}
              </Typography>
              <Typography
                sx={{fontSize: "30px", fontWeight: "500", color: "#212427"}}>
                {DepartmentsData.City}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "500",
                  color: "#212427",
                  width: {
                    xl: "600px",
                    lg: "600px",
                    md: "600px",
                    sm: "550px",
                    xs: "460px",
                  },
                }}>
                Departments: {DepartmentsData.Departments.length}
              </Typography>
            </Box>
          </Box>
          <Box
            marginTop="20px"
            marginLeft={{xl: "100px", lg: "100px", md: "-50px", sm: "-0px"}}
            display="flex">
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
            </Box>
          </Box>
        </Box>

        <Box
          maxWidth="1030px"
          minHeight="100%"
          sx={{
            boxShadow: "0px 0px 4px 0px #00000033",
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
              minWidth: {xl: 1030, lg: 1030, md: 850, sm: 500, xs: 400},
              minHeight: "100%",
              borderRadius: "15px",
            }}
            aria-label="simple table">
            <Table>
              <TableHead width="1030px" height="50px">
                <TableRow sx={{background: "#EFF5FE", width: "1030px"}}>
                  <TableCell maxWidth="1030px">
                    <Box display="flex">
                      <Typography
                        align="left"
                        sx={{
                          fontSize: "20px",
                          fontWeight: "500",
                          color: "#1746A2",
                          width: "250px",
                          height: "30px",
                        }}>
                        Department Name
                      </Typography>
                      <Typography
                        align="left"
                        sx={{
                          fontSize: "20px",
                          fontWeight: "500",
                          color: "#1746A2",
                          width: "200px",
                          height: "30px",
                          marginLeft: "180px",
                        }}>
                        No of Assets
                      </Typography>
                      <Typography
                        align="left"
                        sx={{
                          fontSize: "20px",
                          fontWeight: "500",
                          color: "#1746A2",
                          width: "200px",
                          height: "30px",
                          marginLeft: "140px",
                        }}>
                        InCharge
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredDepartments.map((request, index) => (
                  <TableRow display="flex" key={index}>
                    <TableCell
                      maxWidth="1030px"
                      sx={{
                        background: "white",
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
                            marginLeft: "2px",
                          }}
                          component="th">
                          <Link
                            to={`${request.Dept.toLowerCase()}`}
                            style={{
                              textDecoration: "none",
                              color: "#1746A2",
                              borderBottom: "2px solid #1746A2",
                            }}>
                            {request.Dept}
                          </Link>{" "}
                        </Typography>
                        <Typography
                          align="left"
                          sx={{
                            fontSize: "18px",
                            fontWeight: "500",
                            color: "#212427",
                            width: "200px",
                            height: "30px",
                            borderColor: "black",
                            marginLeft: "190px",
                          }}>
                          {request.Asset.length}
                        </Typography>
                        <Typography
                          align="left"
                          sx={{
                            fontSize: "18px",
                            fontWeight: "500",
                            color: "#212427",
                            width: "200px",
                            height: "30px",
                            borderColor: "black",
                            marginLeft: "140px",
                          }}>
                          {request.InCharge}
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
    </SideBarWrapper>
  );
};

export default HospitalDepartments;
