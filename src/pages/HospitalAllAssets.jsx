// import React, {useState, useEffect} from "react";
// import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
// import AllHospitalAssetsTable from "../components/AllHospital/HospitalDetails/HospitalAllAssetsTable";
// import {
//   Box,
//   Button,
//   Stack,
//   Popover,
//   Tooltip,
//   Typography,
//   FormLabel,
//   FormControlLabel,
//   Checkbox,
//   IconButton,
//   Menu,
//   MenuItem,
//   InputBase,
// } from "@mui/material";
// import {useSelector} from "react-redux";
// import {FilterAltOutlined} from "@mui/icons-material";
// import {DashboardMenuList} from "../utils/dashboardMenuList";
// import {FormatListNumberedRtl, SortOutlined, Search} from "@mui/icons-material";
// import {TbFileUpload} from "react-icons/tb";
// const AllHospitalAssets = () => {
//   const assets = useSelector((store) => store.data.assets);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [anchorElSort, setAnchorElSort] = useState(null);
//   const [sortOption, setSortOption] = useState("");

//   const [filterDepartments, setFilterDepartments] = useState([]);
//   const [filterStatus, setFilterStatus] = useState([]);
//   const [filterBrands, setFilterBrands] = useState([]);
//   const [anchorElFilter, setAnchorElFilter] = useState(null);
//   const open = Boolean(anchorElFilter);
//   const openSort = Boolean(anchorElSort);
//   const [uniqueFilterOptions, setUniqueFilterOptions] = useState({
//     depts: [],
//     status: [],
//     brands: [],
//   });
//   const [sortOrder, setSortOrder] = useState("");

//   useEffect(() => {
//     assets.map((asset) => {
//

//       if (!uniqueFilterOptions.depts.includes(asset.department)) {
//         uniqueFilterOptions.depts.push(asset.department);
//       }
//       if (!uniqueFilterOptions.status.includes(asset.status)) {
//         uniqueFilterOptions.status.push(asset.status);
//       }
//       if (!uniqueFilterOptions.brands.includes(asset.brand)) {
//         uniqueFilterOptions.brands.push(asset.brand);
//       }
//     });
//   }, []);

//   // filter methods
//   const handleFilterChange = (e) => {
//     let value = e.target.name;
//     let name = e.target.getAttribute("data-type");

//     if (name === "brand") {
//       if (filterBrands.includes(value)) {
//         setFilterBrands(filterBrands.filter((brand) => brand !== value));
//       } else setFilterBrands([...filterBrands, value]);
//     } else if (name === "department") {
//       if (filterDepartments.includes(value)) {
//         setFilterDepartments(
//           filterDepartments.filter((dept) => dept !== value)
//         );
//       } else setFilterDepartments([...filterDepartments, value]);
//     } else if (name === "status")
//       if (filterStatus.includes(value)) {
//         setFilterStatus(filterStatus.filter((status) => status !== value));
//       } else setFilterStatus([...filterStatus, value]);
//   };

//   const handleFilterClose = () => {
//     setAnchorElFilter(null);
//   };

//   const handleFilterClick = (e) => {
//     setAnchorElFilter(e.currentTarget);
//   };

//   //sort methods

//   const handleSortClose = () => {
//     setAnchorElSort(null);
//   };

//   const handleSortClick = (e) => {
//     setAnchorElSort(e.currentTarget);
//   };

//   const handleSortMenuClick = (e) => {
//     if (e.target.innerText === "New To Old") {
//       setSortOrder("NewToOld");
//     } else if (e.target.innerText === "Old To New") {
//       setSortOrder("OldToNew");
//     }
//   };

//   //search Methods

//   const searchQueryChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   //complete filter applying sort search and filter

//   const getServiceRequests = () => {
//     let filteredAssetsData = [...assets];
//     if (filterBrands.length > 0) {
//       filteredAssetsData = filteredAssetsData.filter((request) =>
//         filterBrands.includes(request.brand)
//       );
//     }

//     if (filterDepartments.length > 0) {
//       filteredAssetsData = filteredAssetsData.filter((request) =>
//         filterDepartments.includes(request.department)
//       );
//     }

//     if (filterStatus.length > 0) {
//       filteredAssetsData = filteredAssetsData.filter((request) =>
//         filterStatus.includes(request.status)
//       );
//     }

//     if (sortOrder === "NewToOld") {
//       filteredAssetsData.sort(
//         (a, b) => new Date(b.maintenance) - new Date(a.maintenance)
//       );
//     } else if (sortOrder === "OldToNew") {
//       filteredAssetsData.sort(
//         (a, b) => new Date(a.maintenance) - new Date(b.maintenance)
//       );
//     }

//     return filteredAssetsData;
//   };

//   const filteredSearchedAssetData = getServiceRequests().filter((request) =>
//     request.assetName.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <SideBarWrapper menuList={DashboardMenuList}>
//       <Stack minHeight="100%">
//         <Box
//           display="flex"
//           justifyContent="space-between"
//           alignItems="center"
//           width="100%"
//           marginBottom="2rem">
//           <Typography color="secondary" variant="h3">
//             All Assets
//           </Typography>

//           {/* search */}

//           <Box display="flex" gap="0.5rem">
//             <Box display="flex">
//               <Button
//                 variant="contained"
//                 startIcon={<TbFileUpload />}
//                 sx={{borderRadius: "2rem", textTransform: "none"}}
//                 color="primary"
//                 display="flex"
//                 gap="0.5rem">
//                 Upload Bulk Assets
//               </Button>
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 maxWidth: "20ch",
//                 borderRadius: "2rem",
//                 border: "1px solid rgba(23, 70, 162, 0.5)",
//                 backgroundColor: "#FFFFFF",
//               }}>
//               <IconButton
//                 sx={{
//                   color: "#C2C2C2",
//                 }}
//                 type="button"
//                 aria-label="search">
//                 <Search />
//               </IconButton>
//               <InputBase
//                 sx={{ml: 1}}
//                 placeholder="Search"
//                 inputProps={{"aria-label": "search table"}}
//                 value={searchQuery}
//                 onChange={searchQueryChange}
//               />
//             </Box>

//             {/* sort */}

//             <Box>
//               <Tooltip title="Sort">
//                 <IconButton
//                   onClick={handleSortClick}
//                   sx={{
//                     color: sortOrder.length !== 0 ? "#FF731D" : "#C2C2C2",
//                   }}>
//                   <SortOutlined />
//                 </IconButton>
//               </Tooltip>

//               <Menu
//                 anchorEl={anchorElSort}
//                 id="sort-menu"
//                 open={openSort}
//                 onClose={handleSortClose}
//                 transformOrigin={{horizontal: "right", vertical: "top"}}
//                 anchorOrigin={{horizontal: "right", vertical: "bottom"}}>
//                 <MenuItem
//                   sx={{
//                     color: sortOrder === "NewToOld" ? "#FF731D" : "#000000",
//                   }}
//                   onClick={handleSortMenuClick}>
//                   <FormatListNumberedRtl sx={{marginRight: "0.5rem"}} />
//                   New To Old
//                 </MenuItem>
//                 <MenuItem
//                   sx={{
//                     color: sortOrder === "OldToNew" ? "#FF731D" : "#000000",
//                   }}
//                   onClick={handleSortMenuClick}>
//                   <FormatListNumberedRtl sx={{marginRight: "0.5rem"}} />
//                   Old To New
//                 </MenuItem>
//               </Menu>
//             </Box>
//             <Box>
//               {/* Filter */}

//               <Tooltip title="Filter">
//                 <IconButton
//                   sx={{
//                     color:
//                       filterDepartments.length ||
//                       filterStatus.length ||
//                       filterBrands.length
//                         ? "#FF731D"
//                         : "#C2C2C2",
//                   }}
//                   onClick={handleFilterClick}
//                   type="button"
//                   aria-label="filter">
//                   <FilterAltOutlined />
//                 </IconButton>
//               </Tooltip>

//               <Popover
//                 open={open}
//                 anchorEl={anchorElFilter}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//                 onClose={handleFilterClose}>
//                 <Box sx={{padding: "2rem", color: "#212427"}}>
//                   <Box sx={{display: "flex", flexDirection: "column"}}>
//                     <FormLabel
//                       sx={{
//                         fontSize: "1.125rem",
//                         fontWeight: "500",
//                         color: "#1746A2",
//                       }}
//                       component="legend">
//                       Brand
//                     </FormLabel>
//                     <Box sx={{maxWidth: "30vw", padding: "1rem"}}>
//                       {uniqueFilterOptions?.brands?.map((brand, index) => (
//                         <FormControlLabel
//                           key={index}
//                           slotProps={{typography: {fontSize: "0.825rem"}}}
//                           control={
//                             <Checkbox
//                               size="small"
//                               inputProps={{
//                                 "data-type": "brand",
//                               }}
//                               onChange={handleFilterChange}
//                               sx={{
//                                 color: "#FF731D",
//                                 "&.Mui-checked": {
//                                   color: "#FF731D",
//                                 },
//                               }}
//                               checked={filterBrands.includes(brand)}
//                               name={brand}
//                             />
//                           }
//                           label={brand}
//                         />
//                       ))}
//                     </Box>
//                   </Box>

//                   <Box sx={{display: "flex", flexDirection: "column"}}>
//                     <FormLabel
//                       sx={{
//                         fontSize: "1.125rem",
//                         fontWeight: "500",
//                         color: "#1746A2",
//                       }}
//                       component="legend">
//                       Status
//                     </FormLabel>
//                     <Box sx={{maxWidth: "30vw", padding: "1rem"}}>
//                       {uniqueFilterOptions?.status?.map((status, index) => (
//                         <FormControlLabel
//                           key={index}
//                           slotProps={{typography: {fontSize: "0.825rem"}}}
//                           control={
//                             <Checkbox
//                               size="small"
//                               inputProps={{
//                                 "data-type": "status",
//                               }}
//                               onChange={handleFilterChange}
//                               sx={{
//                                 color: "#FF731D",
//                                 "&.Mui-checked": {
//                                   color: "#FF731D",
//                                 },
//                               }}
//                               checked={filterStatus.includes(status)}
//                               name={status}
//                             />
//                           }
//                           label={status}
//                         />
//                       ))}
//                     </Box>
//                   </Box>

//                   <Box sx={{display: "flex", flexDirection: "column"}}>
//                     <FormLabel
//                       sx={{
//                         fontSize: "1.125rem",
//                         fontWeight: "500",
//                         color: "#1746A2",
//                       }}
//                       component="legend">
//                       Departments
//                     </FormLabel>
//                     <Box sx={{maxWidth: "30vw", padding: "1rem"}}>
//                       {uniqueFilterOptions?.depts?.map((department, index) => (
//                         <FormControlLabel
//                           key={index}
//                           slotProps={{typography: {fontSize: "0.825rem"}}}
//                           control={
//                             <Checkbox
//                               inputProps={{
//                                 "data-type": "department",
//                               }}
//                               size="small"
//                               onChange={handleFilterChange}
//                               sx={{
//                                 color: "#FF731D",
//                                 "&.Mui-checked": {
//                                   color: "#FF731D",
//                                 },
//                               }}
//                               checked={filterDepartments.includes(department)}
//                               name={department}
//                             />
//                           }
//                           label={department}
//                         />
//                       ))}
//                     </Box>
//                   </Box>
//                 </Box>
//               </Popover>
//             </Box>
//           </Box>
//         </Box>

//         <AllHospitalAssetsTable
//           filteredSearchedAssetData={filteredSearchedAssetData}
//         />
//       </Stack>
//     </SideBarWrapper>
//   );
// };

// export default AllHospitalAssets;

import React, {useState, useRef, useEffect} from "react";
import {Box, Typography} from "@mui/material";
import {
  TextField,
  Button,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Menu,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import axios from "axios";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";

const HospitalDepartments = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorElSort, setAnchorElSort] = useState(null);
  const [sortOption, setSortOption] = useState("");
  const [csvData, setCsvData] = useState(null);
  const [editedCsvData, setEditedCsvData] = useState(null);
  const [rowIndex, setRowIndex] = useState(-1);
  const [columnName, setColumnName] = useState("");
  const [filterStatus, setFilterStatus] = useState([]);
  const [anchorElFilter, setAnchorElFilter] = useState(null);
  const [AllAssetsData, setAllAssetsData] = useState({
    Hospital: "Apollo",
    City: "Bengaluru",
    AllAssets: [],
  });

  async function dataGet() {
    const response = await axios.get(" http://localhost:3000/AllAssetsData");
    setAllAssetsData(response.data);
  }
  useEffect(() => {
    dataGet();
  }, []);

  const handleStatusCheckboxChange = (event) => {
    const {value, checked} = event.target;

    if (checked) {
      setFilterStatus([...filterStatus, value]);
    } else {
      setFilterStatus(filterStatus.filter((dept) => dept !== value));
    }
  };

  const AssetsDetails = () => {
    const filteredData = [...AllAssetsData.AllAssets];

    if (filterStatus.length > 0) {
      filteredData?.filter((request) =>
        filterStatus.includes(request.asset_status)
      );
    }

    if (sortOption === "newestToOldest") {
      filteredData?.sort((a, b) =>
        a.date_of_purchase.localeCompare(b.date_of_purchase)
      );
    } else if (sortOption === "oldestToNewest") {
      filteredData?.sort((a, b) =>
        b.date_of_purchase.localeCompare(a.date_of_purchase)
      );
    }

    if (sortOption === "aToZ") {
      filteredData?.sort((a, b) => a.asset_name.localeCompare(b.asset_name));
    } else if (sortOption === "zToA") {
      filteredData?.sort((a, b) => b.asset_name.localeCompare(a.asset_name));
    }
    return filteredData;
  };

  const searchedFilteredData = AssetsDetails()?.filter(
    (request) =>
      request.asset_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.serial_no?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const inputRef = useRef();

  const handleSubmit = async () => {
    setCsvData(editedCsvData);
    const response = await axios.patch("http://localhost:3000/AllAssetsData", {
      AllAssets: [...csvData],
    });
    dataGet();
  };

  const handleCancel = () => {
    setCsvData(null);
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

  const handleFilterClick = (event) => {
    setAnchorElFilter(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorElFilter(null);
  };

  function formatObject(obj) {
    const formattedObj = {};
    Object.keys(obj).forEach((key) => {
      formattedObj[key.trim()] = obj[key];
    });
    return formattedObj;
  }

  function csvToObject(csvData) {
    const lines = csvData.split("\n");
    const result = [];
    const headers = lines[0].split(",");

    for (let i = 1; i < lines.length - 1; i++) {
      const obj = {};
      const currentline = lines[i].split(",");

      for (let j = 0; j < headers.length; j++) {
        currentline[j] = currentline[j];
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }

    return result;
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (!file) {
      return;
    }

    e.target.value = null;
    reader.onload = function (e) {
      const contents = e.target.result;
      const data = csvToObject(contents)?.map(formatObject);
      setCsvData(data);
      setEditedCsvData(data);
    };
    reader.readAsText(file);
  };

  const tableEditHandler = (e, index) => {
    setRowIndex(index);
    setColumnName(e.target.getAttribute("datatype"));
  };

  const handleEditCsvData = (value, rowIndex, column) => {
    const newData = [...editedCsvData];
    newData[rowIndex][column] = value;
    setEditedCsvData(newData);
  };

  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <Box>
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            <Box display={"flex"}>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "500",
                  color: "#1746A2",
                  width: "300px",
                }}>
                {AllAssetsData.Hospital}
              </Typography>
              <Typography
                sx={{fontSize: "30px", fontWeight: "500", color: "#212427"}}>
                {AllAssetsData.City}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "500",
                color: "#212427",
              }}>
              Assets: {AllAssetsData?.AllAssets?.length}
            </Typography>

            <Box display="flex" alignItems="center" gap="1rem">
              <Box>
                <Button
                  onClick={(e) => inputRef.current.click()}
                  variant="contained"
                  startIcon={<AddCircleOutlineIcon />}
                  sx={{
                    borderRadius: "2rem",
                    textTransform: "none",
                    bgcolor: "#1746A2",
                    height: "50px",
                  }}
                  display="flex"
                  gap="0.5rem">
                  <input
                    accept=".csv"
                    ref={inputRef}
                    type="file"
                    hidden
                    onChange={handleFileUpload}
                  />
                  Upload Assets
                </Button>
              </Box>
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
                    bgcolor: "#FFFFFF",
                    "& fieldset": {
                      borderRadius: "2rem",
                      border: "1px solid black",
                      height: "100%",
                      width: "100%",
                    },
                  }}></TextField>
              </Box>
              <Box display="flex">
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
                    onClick={(e) => handleSortOptionSelect("newestToOldest")}
                    sx={{
                      color:
                        sortOption === "newestToOldest" ? "#FF731D" : "#212427",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}>
                    Newest to Oldest
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => handleSortOptionSelect("oldestToNewest")}
                    sx={{
                      color:
                        sortOption === "oldestToNewest" ? "#FF731D" : "#212427",
                      fontSize: "16px",
                      fontWeight: "500",
                    }}>
                    Oldest to Newest
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => handleSortOptionSelect("aToZ")}
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
                          checked={filterStatus.includes("Working")}
                          onChange={handleStatusCheckboxChange}
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
                          checked={filterStatus.includes("Not Working")}
                          onChange={handleStatusCheckboxChange}
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
        </Box>

        {AllAssetsData?.AllAssets?.length === 0 ? (
          csvData ? (
            <>
              <Box
                maxWidth="100vw"
                height="100%"
                sx={{
                  overflowY: "auto",
                  boxShadow: "0px 0px 4px 0px #00000033",
                  border: "0px solid #1746A280",
                  borderRadius: "15px",
                  marginTop: "20px",
                }}>
                <Box
                  maxWidth={"100vw"}
                  height="100vh"
                  sx={{
                    overflowY: "auto",
                    boxShadow: "0px 0px 4px 0px #00000033",
                    border: "0px solid #1746A280",
                    borderRadius: "15px",
                  }}>
                  <Table
                    stickyHeader
                    sx={{maxWidth: "100vw", minHeight: "100vh"}}>
                    <TableHead sx={{width: "100vw", bgcolor: "#1746A233"}}>
                      <TableRow>
                        <TableCell sx={{color: "#1746A2"}}>Asset ID</TableCell>
                        <TableCell sx={{color: "#1746A2"}}>
                          Asset Name
                        </TableCell>
                        <TableCell sx={{color: "#1746A2"}}>
                          Asset Code
                        </TableCell>
                        <TableCell sx={{color: "#1746A2"}}>Serial No</TableCell>
                        <TableCell sx={{color: "#1746A2"}}>Model No</TableCell>
                        <TableCell sx={{color: "#1746A2"}}>
                          Department
                        </TableCell>
                        <TableCell sx={{color: "#1746A2"}}>
                          Department ID
                        </TableCell>
                        <TableCell sx={{color: "#1746A2"}}>
                          Asset Type
                        </TableCell>
                        <TableCell sx={{color: "#1746A2"}}>
                          Asset Status
                        </TableCell>
                        <TableCell sx={{color: "#1746A2"}}>
                          Manufacturer
                        </TableCell>
                        <TableCell sx={{color: "#1746A2"}}>Sold By</TableCell>
                        <TableCell sx={{color: "#1746A2"}}>
                          Date Of Purchase
                        </TableCell>
                        <TableCell sx={{color: "#1746A2"}}>Price</TableCell>
                        <TableCell sx={{color: "#1746A2"}}>
                          Warranty Date
                        </TableCell>
                        <TableCell sx={{color: "#1746A2"}}>
                          Warranty Months
                        </TableCell>
                        <TableCell sx={{color: "#1746A2"}}>
                          Warranty Exp Date
                        </TableCell>
                        <TableCell sx={{color: "#1746A2"}}>
                          Asset Images
                        </TableCell>
                        <TableCell sx={{color: "#1746A2"}}>
                          Warranty Images
                        </TableCell>
                        <TableCell sx={{color: "#1746A2"}}>
                          QR Code Images
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {csvData?.map((request, index) => (
                        <TableRow
                          onClick={(e) => tableEditHandler(e, index)}
                          display="flex"
                          key={request.asset_id}>
                          <TableCell
                            datatype="asset_id"
                            sx={{
                              color: "#212427",
                            }}>
                            {rowIndex === index && columnName === "asset_id" ? (
                              <input
                                datatype="asset_id"
                                value={editedCsvData[index]["asset_id"]}
                                onChange={(e) =>
                                  handleEditCsvData(
                                    e.target.value,
                                    index,
                                    columnName
                                  )
                                }
                                placeholder={request.asset_id}
                              />
                            ) : (
                              request.asset_id
                            )}
                          </TableCell>
                          <TableCell
                            datatype="asset_name"
                            sx={{
                              color: "#212427",
                            }}>
                            {rowIndex === index &&
                            columnName === "asset_name" ? (
                              <input
                                datatype="asset_name"
                                value={editedCsvData[index]["asset_name"]}
                                onChange={(e) =>
                                  handleEditCsvData(
                                    e.target.value,
                                    index,
                                    columnName
                                  )
                                }
                                placeholder={request.asset_name}
                              />
                            ) : (
                              request.asset_name
                            )}
                          </TableCell>
                          <TableCell
                            datatype="asset_code"
                            sx={{
                              color: "#212427",
                            }}>
                            {rowIndex === index &&
                            columnName === "asset_code" ? (
                              <input
                                datatype="asset_code"
                                value={editedCsvData[index]["asset_code"]}
                                onChange={(e) =>
                                  handleEditCsvData(
                                    e.target.value,
                                    index,
                                    columnName
                                  )
                                }
                                placeholder={request.asset_code}
                              />
                            ) : (
                              request.asset_code
                            )}
                          </TableCell>
                          <TableCell
                            datatype="serial_no"
                            sx={{
                              color: "#212427",
                            }}>
                            {rowIndex === index &&
                            columnName === "serial_no" ? (
                              <input
                                datatype="serial_no"
                                value={editedCsvData[index]["serial_no"]}
                                onChange={(e) =>
                                  handleEditCsvData(
                                    e.target.value,
                                    index,
                                    columnName
                                  )
                                }
                                placeholder={request.serial_no}
                              />
                            ) : (
                              request.serial_no
                            )}
                          </TableCell>
                          <TableCell
                            datatype="model_no"
                            sx={{
                              color: "#212427",
                            }}>
                            {rowIndex === index && columnName === "model_no" ? (
                              <input
                                datatype="model_no"
                                value={editedCsvData[index]["model_no"]}
                                onChange={(e) =>
                                  handleEditCsvData(
                                    e.target.value,
                                    index,
                                    columnName
                                  )
                                }
                                placeholder={request.model_no}
                              />
                            ) : (
                              request.model_no
                            )}
                          </TableCell>
                          <TableCell
                            datatype="department"
                            sx={{
                              color: "#212427",
                            }}>
                            {rowIndex === index &&
                            columnName === "department" ? (
                              <input
                                datatype="department"
                                value={editedCsvData[index]["department"]}
                                onChange={(e) =>
                                  handleEditCsvData(
                                    e.target.value,
                                    index,
                                    columnName
                                  )
                                }
                                placeholder={request.department}
                              />
                            ) : (
                              request.department
                            )}
                          </TableCell>
                          <TableCell
                            datatype="department_id"
                            sx={{
                              color: "#212427",
                            }}>
                            {rowIndex === index &&
                            columnName === "department_id" ? (
                              <input
                                datatype="department_id"
                                value={editedCsvData[index]["department_id"]}
                                onChange={(e) =>
                                  handleEditCsvData(
                                    e.target.value,
                                    index,
                                    columnName
                                  )
                                }
                                placeholder={request.department_id}
                              />
                            ) : (
                              request.department_id
                            )}
                          </TableCell>
                          <TableCell
                            datatype="asset_type"
                            sx={{
                              color: "#212427",
                            }}>
                            {rowIndex === index &&
                            columnName === "asset_type" ? (
                              <input
                                datatype="asset_type"
                                value={editedCsvData[index]["asset_type"]}
                                onChange={(e) =>
                                  handleEditCsvData(
                                    e.target.value,
                                    index,
                                    columnName
                                  )
                                }
                                placeholder={request.asset_type}
                              />
                            ) : (
                              request.asset_type
                            )}
                          </TableCell>
                          <TableCell
                            datatype="asset_status"
                            align="left"
                            sx={{
                              color: "#212427",
                            }}>
                            {rowIndex === index &&
                            columnName === "asset_status" ? (
                              <input
                                datatype="asset_status"
                                value={editedCsvData[index]["asset_status"]}
                                onChange={(e) =>
                                  handleEditCsvData(
                                    e.target.value,
                                    index,
                                    columnName
                                  )
                                }
                                placeholder={request.asset_status}
                              />
                            ) : (
                              request.asset_status
                            )}
                          </TableCell>
                          <TableCell
                            datatype="manufacturer"
                            align="left"
                            sx={{
                              color: "#212427",
                            }}>
                            {rowIndex === index &&
                            columnName === "manufacturer" ? (
                              <input
                                datatype="manufacturer"
                                value={editedCsvData[index]["manufacturer"]}
                                onChange={(e) =>
                                  handleEditCsvData(
                                    e.target.value,
                                    index,
                                    columnName
                                  )
                                }
                                placeholder={request.manufacturer}
                              />
                            ) : (
                              request.manufacturer
                            )}
                          </TableCell>
                          <TableCell
                            datatype="sold_by"
                            align="left"
                            sx={{
                              color: "#212427",
                            }}>
                            {rowIndex === index && columnName === "sold_by" ? (
                              <input
                                datatype="sold_by"
                                value={editedCsvData[index]["sold_by"]}
                                onChange={(e) =>
                                  handleEditCsvData(
                                    e.target.value,
                                    index,
                                    columnName
                                  )
                                }
                                placeholder={request.sold_by}
                              />
                            ) : (
                              request.sold_by
                            )}
                          </TableCell>
                          <TableCell
                            datatype="date_of_purchase"
                            align="left"
                            sx={{
                              color: "#212427",
                            }}>
                            {rowIndex === index &&
                            columnName === "date_of_purchase" ? (
                              <input
                                datatype="date_of_purchase"
                                value={editedCsvData[index]["date_of_purchase"]}
                                onChange={(e) =>
                                  handleEditCsvData(
                                    e.target.value,
                                    index,
                                    columnName
                                  )
                                }
                                placeholder={request.date_of_purchase}
                              />
                            ) : (
                              request.date_of_purchase
                            )}
                          </TableCell>
                          <TableCell
                            datatype="price"
                            align="left"
                            sx={{
                              color: "#212427",
                            }}>
                            {rowIndex === index && columnName === "price" ? (
                              <input
                                datatype="price"
                                value={editedCsvData[index]["price"]}
                                onChange={(e) =>
                                  handleEditCsvData(
                                    e.target.value,
                                    index,
                                    columnName
                                  )
                                }
                                placeholder={request.price}
                              />
                            ) : (
                              request.price
                            )}
                          </TableCell>
                          <TableCell
                            datatype="warranty_date"
                            align="left"
                            sx={{
                              color: "#212427",
                            }}>
                            {rowIndex === index &&
                            columnName === "warranty_date" ? (
                              <input
                                datatype="warranty_date"
                                value={editedCsvData[index]["warranty_date"]}
                                onChange={(e) =>
                                  handleEditCsvData(
                                    e.target.value,
                                    index,
                                    columnName
                                  )
                                }
                                placeholder={request.warranty_date}
                              />
                            ) : (
                              request.warranty_date
                            )}
                          </TableCell>
                          <TableCell
                            datatype="warranty_months"
                            align="left"
                            sx={{
                              color: "#212427",
                            }}>
                            {rowIndex === index &&
                            columnName === "warranty_months" ? (
                              <input
                                datatype="warranty_months"
                                value={editedCsvData[index]["warranty_months"]}
                                onChange={(e) =>
                                  handleEditCsvData(
                                    e.target.value,
                                    index,
                                    columnName
                                  )
                                }
                                placeholder={request.warranty_months}
                              />
                            ) : (
                              request.warranty_months
                            )}
                          </TableCell>
                          <TableCell
                            datatype="warranty_exp_date"
                            align="left"
                            sx={{
                              color: "#212427",
                            }}>
                            {rowIndex === index &&
                            columnName === "warranty_exp_date" ? (
                              <input
                                datatype="warranty_exp_date"
                                value={
                                  editedCsvData[index]["warranty_exp_date"]
                                }
                                onChange={(e) =>
                                  handleEditCsvData(
                                    e.target.value,
                                    index,
                                    columnName
                                  )
                                }
                                placeholder={request.warranty_exp_date}
                              />
                            ) : (
                              request.warranty_exp_date
                            )}
                          </TableCell>
                          <TableCell
                            datatype="asset_imgs"
                            align="left"
                            sx={{
                              color: "#212427",
                            }}>
                            {request.asset_imgs ? (
                              <img
                                style={{width: "150px", height: "100px"}}
                                src={request.asset_imgs}
                                alt=""
                              />
                            ) : (
                              "No Images Available"
                            )}
                          </TableCell>
                          <TableCell
                            datatype="warranty_img"
                            align="left"
                            sx={{
                              color: "#212427",
                            }}>
                            {request.warranty_img ? (
                              <img
                                style={{width: "150px", height: "100px"}}
                                src={request.warranty_img}
                                alt=""
                              />
                            ) : (
                              "No Images Available"
                            )}
                          </TableCell>
                          <TableCell
                            datatype="qr_code_img"
                            align="left"
                            sx={{
                              color: "#212427",
                            }}>
                            {request.qr_code_img ? (
                              <img
                                style={{width: "150px", height: "100px"}}
                                src={request.qr_code_img}
                                alt=""
                              />
                            ) : (
                              "No Images Available"
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Box>

              <Box display="flex" width="100%" justifyContent="end" gap="2rem">
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "2rem",
                    marginTop: "2rem",
                    bgcolor: "#1746A2",
                    textTransform: "none",
                  }}
                  onClick={handleCancel}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "2rem",
                    marginTop: "2rem",
                    bgcolor: "#1746A2",
                    textTransform: "none",
                  }}
                  onClick={handleSubmit}>
                  Submit
                </Button>
              </Box>
            </>
          ) : (
            <Box
              marginTop="20px"
              boxShadow={"none"}
              bgcolor="white"
              display="flex"
              width="100%"
              height="70vh"
              justifyContent="center"
              alignItems="center">
              <Typography variant="h2" sx={{color: "#1746A2"}}>
                No Assets data to show
              </Typography>
            </Box>
          )
        ) : (
          <Box
            maxWidth={"100vw"}
            maxHeight="100vh"
            sx={{
              marginTop: "2rem",
              overflowY: "auto",
              boxShadow: "0px 0px 4px 0px #00000033",
              border: "0px solid #1746A280",
              borderRadius: "15px",
            }}>
            <Table
              sx={{
                maxWidth: "100vw",
                minHeight: "100%",
                bgcolor: "#FFFFFF",
              }}>
              <TableHead sx={{width: "100vw", bgcolor: "#1746A233"}}>
                <TableRow>
                  <TableCell
                    sx={{
                      color: "#1746A2",
                      fontSize: "1.25rem",
                      fontWeight: "500",
                    }}>
                    Asset ID
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#1746A2",
                      fontSize: "1.25rem",
                      fontWeight: "500",
                    }}>
                    Asset Name
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#1746A2",
                      fontSize: "1.25rem",
                      fontWeight: "500",
                    }}>
                    Asset Code
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#1746A2",
                      fontSize: "1.25rem",
                      fontWeight: "500",
                    }}>
                    Serial No
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#1746A2",
                      fontSize: "1.25rem",
                      fontWeight: "500",
                    }}>
                    Model No
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#1746A2",
                      fontSize: "1.25rem",
                      fontWeight: "500",
                    }}>
                    Department
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#1746A2",
                      fontSize: "1.25rem",
                      fontWeight: "500",
                    }}>
                    Department ID
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#1746A2",
                      fontSize: "1.25rem",
                      fontWeight: "500",
                    }}>
                    Asset Type
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#1746A2",
                      fontSize: "1.25rem",
                      fontWeight: "500",
                    }}>
                    Asset Status
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#1746A2",
                      fontSize: "1.25rem",
                      fontWeight: "500",
                    }}>
                    Manufacturer
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#1746A2",
                      fontSize: "1.25rem",
                      fontWeight: "500",
                    }}>
                    Sold By
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#1746A2",
                      fontSize: "1.25rem",
                      fontWeight: "500",
                    }}>
                    Date of Purchase
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#1746A2",
                      fontSize: "1.25rem",
                      fontWeight: "500",
                    }}>
                    Price
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#1746A2",
                      fontSize: "1.25rem",
                      fontWeight: "500",
                    }}>
                    Warranty Date
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#1746A2",
                      fontSize: "1.25rem",
                      fontWeight: "500",
                    }}>
                    Warranty Months
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#1746A2",
                      fontSize: "1.25rem",
                      fontWeight: "500",
                    }}>
                    Warranty Exp Date
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#1746A2",
                      fontSize: "1.25rem",
                      fontWeight: "500",
                    }}>
                    Asset Images
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#1746A2",
                      fontSize: "1.25rem",
                      fontWeight: "500",
                    }}>
                    Warranty Image
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#1746A2",
                      fontSize: "1.25rem",
                      fontWeight: "500",
                    }}>
                    QR Code Image
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{bgcolor: "#FFFFFF"}}>
                {searchedFilteredData?.map((request, index) => (
                  <TableRow display="flex" key={request.asset_id}>
                    <TableCell
                      sx={{
                        color: "#212427",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}>
                      {request.asset_id}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#212427",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}>
                      {request.asset_name}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#212427",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}>
                      {request.asset_code}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#212427",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}>
                      {request.serial_no}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#212427",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}>
                      {request.model_no}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#212427",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}>
                      {request.department}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#212427",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}>
                      {request.department_id}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#212427",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}>
                      {request.asset_type}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#212427",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}>
                      <Box
                        align="center"
                        color={
                          request.asset_status === "Working"
                            ? "#00A884"
                            : "#FF4B4B"
                        }
                        sx={{
                          border: "1px solid",
                          borderRadius: "30px",
                          width: "150px",
                          marginRight: "20px",
                        }}>
                        <Typography
                          align="start"
                          border={
                            request.asset_status === "Working"
                              ? "#00A884"
                              : "#FF4B4B"
                          }
                          sx={{
                            fontSize: "18px",
                            fontWeight: "500",
                            height: "30px",
                            width: "130px",
                            borderColor: "black",
                            display: "block",
                            padding: "5px",
                            marginLeft: "15px",
                          }}>
                          {request.asset_status}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#212427",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}>
                      {request.manufacturer}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#212427",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}>
                      {request.sold_by}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#212427",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}>
                      {request.date_of_purchase}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#212427",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}>
                      {request.price}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#212427",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}>
                      {request.warranty_date}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#212427",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}>
                      {request.warranty_months}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#212427",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}>
                      {request.warranty_exp_date}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#212427",
                      }}>
                      {request.asset_imgs ? (
                        <img
                          style={{width: "150px", height: "100px"}}
                          src={request.asset_imgs}
                          alt=""
                        />
                      ) : (
                        "No Images Available"
                      )}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#212427",
                      }}>
                      {request.warranty_img ? (
                        <img
                          style={{width: "150px", height: "100px"}}
                          src={request.warranty_img}
                          alt=""
                        />
                      ) : (
                        "No Images Available"
                      )}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#212427",
                      }}>
                      {request.qr_code_img ? (
                        <img
                          style={{width: "150px", height: "100px"}}
                          src={request.qr_code_img}
                          alt=""
                        />
                      ) : (
                        "No Images Available"
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        )}
      </Box>
    </SideBarWrapper>
  );
};

export default HospitalDepartments;
