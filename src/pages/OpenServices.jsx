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
  Link,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";

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
      <Box
        maxWidth={{
          xl: "1030px",
          lg: "1030px",
          md: "900px",
          sm: "600px",
          xs: "480px",
        }}
        minHeight="937px"
        sx={{
          boxShadow: "0px 0px 4px 0px #00000033",
          border: "0px solid #1746A280",
          borderRadius: "15px",
          background: "white",
          marginTop: {
            xl: "20px",
            lg: "20px",
            md: "20px",
            sm: "20px",
            xs: "20px",
          },
          marginLeft: {xl: "0px", lg: "0px", md: "0px"},
        }}>
        {openServices?.map((request, index) => (
          <Link
            href={
              request.Status === "Cleared"
                ? `/detailscleared/${request.Head}`
                : `/detailsnotcleared/${request.Head}`
            }
            color={request.Status === "Cleared" ? "#00A884" : "#FF4B4B"}
            sx={{textDecoration: "none"}}
            key={index}>
            <Box
              width="440px"
              height="257px"
              display="inline-block"
              paddingX="20px"
              paddingY="20px"
              marginLeft={{xl: "15px"}}>
              <Grid>
                <Card
                  sx={{
                    width: {
                      xl: "455px",
                      lg: "455px",
                      md: "480px",
                      sm: "455px",
                      xs: "455px",
                    },
                    height: "257px",
                    border: "1px solid #1746A280",
                    boxShadow: "0px 0px 4px 0px #00000033",
                    borderRadius: "30px",
                    marginLeft: {
                      xl: "0px",
                      lg: "0px",
                      md: "180px",
                      sm: "50px",
                      xs: "-8px",
                    },
                  }}>
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: "500",
                        color: "#000000",
                        padding: "10PX",
                      }}>
                      {request.Head}
                    </Typography>
                    <Box>
                      <Box display="flex" padding="8PX">
                        <Typography
                          sx={{
                            fontSize: "20px",
                            fontWeight: "400",
                            color: "#1746A2",
                          }}>
                          Department
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "20px",
                            fontWeight: "400",
                            color: "#1746A2",
                            marginLeft: "10px",
                          }}>
                          :
                        </Typography>
                        <Typography
                          display="flex"
                          sx={{
                            fontSize: "20px",
                            fontWeight: "400",
                            color: "#212427",
                            marginLeft: "10px",
                          }}>
                          {request.Dept}
                        </Typography>
                      </Box>
                      <Box display="flex" padding="8PX">
                        <Typography
                          sx={{
                            fontSize: "20px",
                            fontWeight: "400",
                            color: "#1746A2",
                          }}>
                          Date
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "20px",
                            fontWeight: "400",
                            color: "#1746A2",
                            marginLeft: "83.5px",
                          }}>
                          :
                        </Typography>
                        <Typography
                          display="flex"
                          sx={{
                            fontSize: "20px",
                            fontWeight: "400",
                            color: "#212427",
                            marginLeft: "10px",
                          }}>
                          {request.Date}
                        </Typography>
                      </Box>
                      <Box display="flex" padding="8PX">
                        <Typography
                          sx={{
                            fontSize: "20px",
                            fontWeight: "400",
                            color: "#1746A2",
                          }}>
                          Time
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "20px",
                            fontWeight: "400",
                            color: "#1746A2",
                            marginLeft: "82.5px",
                          }}>
                          :
                        </Typography>
                        <Typography
                          display="flex"
                          sx={{
                            fontSize: "20px",
                            fontWeight: "400",
                            color: "#212427",
                            marginLeft: "10px",
                          }}>
                          {request.Time}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      color={
                        request.Status === "Cleared" ? "#00A884" : "#FF4B4B"
                      }
                      sx={{
                        border: "1px solid ",
                        borderRadius: "18px",
                        width: "115px",
                        height: "36px",
                        marginLeft: "280px",
                      }}>
                      <Typography
                        align="center"
                        color={
                          request.Status === "Cleared" ? "#00A884" : "#FF4B4B"
                        }
                        sx={{
                          fontSize: "16px",
                          fontWeight: "500",
                          height: "36px",
                          width: "110px",
                          padding: "2px",
                        }}>
                        {request.Status}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Box>
          </Link>
        ))}
      </Box>
    </SideBarWrapper>
  );
};

export default OpenServices;
