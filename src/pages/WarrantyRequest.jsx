import React, {useState, useEffect} from "react";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";
import {useSelector} from "react-redux";
import WarrantyReqTable from "../components/WarrantyRequest/WarrantyReqTable";
import {FilterAltOutlined} from "@mui/icons-material";

import {FormatListNumberedRtl, SortOutlined, Search} from "@mui/icons-material";
import {
  Box,
  Stack,
  Popover,
  Tooltip,
  Typography,
  FormLabel,
  FormControlLabel,
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
  InputBase,
} from "@mui/material";

const WarrantyRequest = () => {
  const warrantyReqs = useSelector((store) => store.data.warrantyReqs);
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorElSort, setAnchorElSort] = useState(null);

  const [filterDepartments, setFilterDepartments] = useState([]);
  const [filterHosps, setFilterHosps] = useState([]);
  const [filterBrands, setFilterBrands] = useState([]);
  const [anchorElFilter, setAnchorElFilter] = useState(null);
  const open = Boolean(anchorElFilter);
  const openSort = Boolean(anchorElSort);
  const [uniqueFilterOptions, setUniqueFilterOptions] = useState({
    depts: [],
    hosps: [],
    brands: [],
  });
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    warrantyReqs.map((warrantyReq) => {
      if (!uniqueFilterOptions.depts.includes(warrantyReq.dept)) {
        uniqueFilterOptions.depts.push(warrantyReq.dept);
      }
      if (!uniqueFilterOptions.hosps.includes(warrantyReq.hospName)) {
        uniqueFilterOptions.hosps.push(warrantyReq.hospName);
      }
      if (!uniqueFilterOptions.brands.includes(warrantyReq.brand)) {
        uniqueFilterOptions.brands.push(warrantyReq.brand);
      }
    });
  }, []);

  // filter methods
  const handleFilterChange = (e) => {
    let value = e.target.name;
    let name = e.target.getAttribute("data-type");

    if (name === "brand") {
      if (filterBrands.includes(value)) {
        setFilterBrands(filterBrands.filter((brand) => brand !== value));
      } else setFilterBrands([...filterBrands, value]);
    } else if (name === "department") {
      if (filterDepartments.includes(value)) {
        setFilterDepartments(
          filterDepartments.filter((dept) => dept !== value)
        );
      } else setFilterDepartments([...filterDepartments, value]);
    } else if (name === "hosp")
      if (filterHosps.includes(value)) {
        setFilterHosps(filterHosps.filter((hosp) => hosp !== value));
      } else setFilterHosps([...filterHosps, value]);
  };

  const handleFilterClose = () => {
    setAnchorElFilter(null);
  };

  const handleFilterClick = (e) => {
    setAnchorElFilter(e.currentTarget);
  };

  //sort methods

  const handleSortClose = () => {
    setAnchorElSort(null);
  };

  const handleSortClick = (e) => {
    setAnchorElSort(e.currentTarget);
  };

  const handleSortMenuClick = (e) => {
    if (e.target.innerText === "New To Old") {
      setSortOrder("NewToOld");
    } else if (e.target.innerText === "Old To New") {
      setSortOrder("OldToNew");
    }
  };

  //search Methods

  const searchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  //complete filter applying sort search and filter

  const getServiceRequests = () => {
    let filteredWarrantyReqsData = [...warrantyReqs];
    if (filterBrands.length > 0) {
      filteredWarrantyReqsData = filteredWarrantyReqsData.filter((request) =>
        filterBrands.includes(request.brand)
      );
    }

    if (filterDepartments.length > 0) {
      filteredWarrantyReqsData = filteredWarrantyReqsData.filter((request) =>
        filterDepartments.includes(request.dept)
      );
    }

    if (filterHosps.length > 0) {
      filteredWarrantyReqsData = filteredWarrantyReqsData.filter((request) =>
        filterHosps.includes(request.hospName)
      );
    }

    if (sortOrder === "NewToOld") {
      filteredWarrantyReqsData.sort((a, b) => {
        let aa = a.warrantyExpDate.split("-").reverse().join();
        let bb = b.warrantyExpDate.split("-").reverse().join();
        new Date(bb) - new Date(aa);
      });
    }
    if (sortOrder === "OldToNew") {
      filteredWarrantyReqsData.sort((a, b) => {
        let aa = a.warrantyExpDate.split("-").reverse().join();
        let bb = b.warrantyExpDate.split("-").reverse().join();
        new Date(aa) - new Date(bb);
      });
    }

    return filteredWarrantyReqsData;
  };

  const filteredSearchedWarrantyData = getServiceRequests().filter(
    (request) =>
      request.assetName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.hospName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <Stack minHeight="100%">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          marginBottom="2rem">
          <Typography color="secondary" variant="h3">
            Warranty Requests
          </Typography>

          {/* search */}

          <Box display="flex" gap="0.5rem">
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
                <Search />
              </IconButton>
              <InputBase
                sx={{ml: 1}}
                placeholder="Search"
                inputProps={{"aria-label": "search table"}}
                value={searchQuery}
                onChange={searchQueryChange}
              />
            </Box>

            {/* sort */}

            <Box>
              <Tooltip title="Sort">
                <IconButton
                  onClick={handleSortClick}
                  sx={{
                    color: sortOrder.length !== 0 ? "#FF731D" : "#C2C2C2",
                  }}>
                  <SortOutlined />
                </IconButton>
              </Tooltip>

              <Menu
                anchorEl={anchorElSort}
                id="sort-menu"
                open={openSort}
                onClose={handleSortClose}
                transformOrigin={{horizontal: "right", vertical: "top"}}
                anchorOrigin={{horizontal: "right", vertical: "bottom"}}>
                <MenuItem
                  sx={{
                    color: sortOrder === "NewToOld" ? "#FF731D" : "#000000",
                  }}
                  onClick={handleSortMenuClick}>
                  <FormatListNumberedRtl sx={{marginRight: "0.5rem"}} />
                  New To Old
                </MenuItem>
                <MenuItem
                  sx={{
                    color: sortOrder === "OldToNew" ? "#FF731D" : "#000000",
                  }}
                  onClick={handleSortMenuClick}>
                  <FormatListNumberedRtl sx={{marginRight: "0.5rem"}} />
                  Old To New
                </MenuItem>
              </Menu>
            </Box>
            <Box>
              {/* Filter */}

              <Tooltip title="Filter">
                <IconButton
                  sx={{
                    color:
                      filterDepartments.length ||
                      filterHosps.length ||
                      filterBrands.length
                        ? "#FF731D"
                        : "#C2C2C2",
                  }}
                  onClick={handleFilterClick}
                  type="button"
                  aria-label="filter">
                  <FilterAltOutlined />
                </IconButton>
              </Tooltip>

              <Popover
                open={open}
                anchorEl={anchorElFilter}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                onClose={handleFilterClose}>
                <Box sx={{padding: "2rem", color: "#212427"}}>
                  <Box sx={{display: "flex", flexDirection: "column"}}>
                    <FormLabel
                      sx={{
                        fontSize: "1.125rem",
                        fontWeight: "500",
                        color: "#1746A2",
                      }}
                      component="legend">
                      Brand
                    </FormLabel>
                    <Box sx={{maxWidth: "30vw", padding: "1rem"}}>
                      {uniqueFilterOptions?.brands?.map((brand, index) => (
                        <FormControlLabel
                          key={index}
                          slotProps={{typography: {fontSize: "0.825rem"}}}
                          control={
                            <Checkbox
                              size="small"
                              inputProps={{
                                "data-type": "brand",
                              }}
                              onChange={handleFilterChange}
                              sx={{
                                color: "#FF731D",
                                "&.Mui-checked": {
                                  color: "#FF731D",
                                },
                              }}
                              checked={filterBrands.includes(brand)}
                              name={brand}
                            />
                          }
                          label={brand}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{display: "flex", flexDirection: "column"}}>
                    <FormLabel
                      sx={{
                        fontSize: "1.125rem",
                        fontWeight: "500",
                        color: "#1746A2",
                      }}
                      component="legend">
                      Hospitals
                    </FormLabel>
                    <Box sx={{maxWidth: "30vw", padding: "1rem"}}>
                      {uniqueFilterOptions?.hosps?.map((hosps, index) => (
                        <FormControlLabel
                          key={index}
                          slotProps={{typography: {fontSize: "0.825rem"}}}
                          control={
                            <Checkbox
                              size="small"
                              inputProps={{
                                "data-type": "hosp",
                              }}
                              onChange={handleFilterChange}
                              sx={{
                                color: "#FF731D",
                                "&.Mui-checked": {
                                  color: "#FF731D",
                                },
                              }}
                              checked={filterHosps.includes(hosps)}
                              name={hosps}
                            />
                          }
                          label={hosps}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box sx={{display: "flex", flexDirection: "column"}}>
                    <FormLabel
                      sx={{
                        fontSize: "1.125rem",
                        fontWeight: "500",
                        color: "#1746A2",
                      }}
                      component="legend">
                      Departments
                    </FormLabel>
                    <Box sx={{maxWidth: "30vw", padding: "1rem"}}>
                      {uniqueFilterOptions?.depts?.map((department, index) => (
                        <FormControlLabel
                          key={index}
                          slotProps={{typography: {fontSize: "0.825rem"}}}
                          control={
                            <Checkbox
                              inputProps={{
                                "data-type": "department",
                              }}
                              size="small"
                              onChange={handleFilterChange}
                              sx={{
                                color: "#FF731D",
                                "&.Mui-checked": {
                                  color: "#FF731D",
                                },
                              }}
                              checked={filterDepartments.includes(department)}
                              name={department}
                            />
                          }
                          label={department}
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Popover>
            </Box>
          </Box>
        </Box>
        <WarrantyReqTable
          filteredSearchedWarrantyData={filteredSearchedWarrantyData}
        />
      </Stack>
    </SideBarWrapper>
  );
};

export default WarrantyRequest;
