import React, {useState, useEffect} from "react";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import AllHospitalAssetsTable from "../components/AllHospital/HospitalDetails/AllHospitalAssetsTable";
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
import {useSelector} from "react-redux";
import {FilterAltOutlined} from "@mui/icons-material";
import {DashboardMenuList} from "../utils/dashboardMenuList";
import {FormatListNumberedRtl, SortOutlined, Search} from "@mui/icons-material";

const AllHospitalAssets = () => {
  const assets = useSelector((store) => store.data.assets);
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorElSort, setAnchorElSort] = useState(null);
  const [sortOption, setSortOption] = useState("");

  const [filterDepartments, setFilterDepartments] = useState([]);
  const [filterStatus, setFilterStatus] = useState([]);
  const [filterBrands, setFilterBrands] = useState([]);
  const [anchorElFilter, setAnchorElFilter] = useState(null);
  const open = Boolean(anchorElFilter);
  const openSort = Boolean(anchorElSort);
  const [uniqueFilterOptions, setUniqueFilterOptions] = useState({
    depts: [],
    status: [],
    brands: [],
  });
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    assets.map((asset) => {
      // console.log(asset.status);

      if (!uniqueFilterOptions.depts.includes(asset.department)) {
        uniqueFilterOptions.depts.push(asset.department);
      }
      if (!uniqueFilterOptions.status.includes(asset.status)) {
        uniqueFilterOptions.status.push(asset.status);
      }
      if (!uniqueFilterOptions.brands.includes(asset.brand)) {
        uniqueFilterOptions.brands.push(asset.brand);
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
    } else if (name === "status")
      if (filterStatus.includes(value)) {
        setFilterStatus(filterStatus.filter((status) => status !== value));
      } else setFilterStatus([...filterStatus, value]);
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
    let filteredAssetsData = [...assets];
    if (filterBrands.length > 0) {
      filteredAssetsData = filteredAssetsData.filter((request) =>
        filterBrands.includes(request.brand)
      );
    }

    if (filterDepartments.length > 0) {
      filteredAssetsData = filteredAssetsData.filter((request) =>
        filterDepartments.includes(request.department)
      );
    }

    if (filterStatus.length > 0) {
      filteredAssetsData = filteredAssetsData.filter((request) =>
        filterStatus.includes(request.status)
      );
    }

    if (sortOrder === "NewToOld") {
      filteredAssetsData.sort(
        (a, b) => new Date(b.maintenance) - new Date(a.maintenance)
      );
    } else if (sortOrder === "OldToNew") {
      filteredAssetsData.sort(
        (a, b) => new Date(a.maintenance) - new Date(b.maintenance)
      );
    }

    return filteredAssetsData;
  };

  const filteredSearchedAssetData = getServiceRequests().filter((request) =>
    request.assetName.toLowerCase().includes(searchQuery.toLowerCase())
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
            All Assets
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
                      filterStatus.length ||
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
                      Status
                    </FormLabel>
                    <Box sx={{maxWidth: "30vw", padding: "1rem"}}>
                      {uniqueFilterOptions?.status?.map((status, index) => (
                        <FormControlLabel
                          key={index}
                          slotProps={{typography: {fontSize: "0.825rem"}}}
                          control={
                            <Checkbox
                              size="small"
                              inputProps={{
                                "data-type": "status",
                              }}
                              onChange={handleFilterChange}
                              sx={{
                                color: "#FF731D",
                                "&.Mui-checked": {
                                  color: "#FF731D",
                                },
                              }}
                              checked={filterStatus.includes(status)}
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
        <AllHospitalAssetsTable
          filteredSearchedAssetData={filteredSearchedAssetData}
        />
      </Stack>
    </SideBarWrapper>
  );
};

export default AllHospitalAssets;
