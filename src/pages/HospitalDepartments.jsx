import React, {useState, useRef, useEffect} from "react";
import {Box, Typography} from "@mui/material";
import {
  Paper,
  TextField,
  Button,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Menu,
  MenuItem,
  Dialog,
  AppBar,
  Toolbar,
} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import CloseIcon from "@mui/icons-material/Close";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";
import {TbFileUpload} from "react-icons/tb";
import axios from "axios";

const HospitalDepartments = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorElSort, setAnchorElSort] = useState(null);
  const [sortOption, setSortOption] = useState("");

  // csv useState
  const [csvData, setCsvData] = useState(null);
  const [editedCsvData, setEditedCsvData] = useState(null);
  const [rowIndex, setRowIndex] = useState(-1);
  const [columnName, setColumnName] = useState("");
  const [DepartmentsData, setDepartmentsData] = useState({
    Hospital: "Apollo",
    City: "Bengaluru",
    Departments: [],
  });

  // [
  //     {
  //       "department_id": 0,
  //       "department_name": "Radiology",
  //       "department_desc": ["Smart PFT_USB USB ECG Monitor PFT USB-PFT"],
  //       "department_incharge": "Dhanush"
  //     },
  //     {
  //       "department_id": 0,
  //       "department_name": "ECG",
  //       "department_desc": ["Smart PFT_USB USB ECG Monitor PFT USB-PFT"],
  //       "department_incharge": "Abhijith"
  //     },
  //     {
  //       "department_id": 0,
  //       "department_name": "ICU",
  //       "department_desc": ["Smart PFT_USB USB ECG Monitor PFT USB-PFT"],
  //       "department_incharge": "Arunraj"
  //     },
  //     {
  //       "department_id": 0,
  //       "department_name": "Radiology",
  //       "department_desc": ["Smart PFT_USB USB ECG Monitor PFT USB-PFT"],
  //       "department_incharge": "Dhanush"
  //     },
  //     {
  //       "department_id": 0,
  //       "department_name": "ECG",
  //       "department_desc": ["Smart PFT_USB USB ECG Monitor PFT USB-PFT"],
  //       "department_incharge": "Abhijith"
  //     },
  //     {
  //       "department_id": 0,
  //       "department_name": "ICU",
  //       "department_desc": ["Smart PFT_USB USB ECG Monitor PFT USB-PFT"],
  //       "department_incharge": "Arunraj"
  //     },
  //     {
  //       "department_id": 0,
  //       "department_name": "ECHO",
  //       "department_desc": ["Smart PFT_USB USB ECG Monitor PFT USB-PFT"],
  //       "department_incharge": "Dhanush"
  //     },
  //     {
  //       "department_id": 0,
  //       "department_name": "OP",
  //       "department_desc": ["Smart PFT_USB USB ECG Monitor PFT USB-PFT"],
  //       "department_incharge": "Abhijith"
  //     },
  //     {
  //       "department_id": 0,
  //       "department_name": "ICU",
  //       "department_desc": ["Smart PFT_USB USB ECG Monitor PFT USB-PFT"],
  //       "department_incharge": "Arunraj"
  //     },
  //     {
  //       "department_id": 0,
  //       "department_name": "Radiology",
  //       "department_desc": ["Smart PFT_USB USB ECG Monitor PFT USB-PFT"],
  //       "department_incharge": "Dhanush"
  //     },
  //     {
  //       "department_id": 0,
  //       "department_name": "ECHO",
  //       "department_desc": ["Smart PFT_USB USB ECG Monitor PFT USB-PFT"],
  //       "department_incharge": "Abhijith"
  //     },
  //     {
  //       "department_id": 0,
  //       "department_name": "ICU",
  //       "department_desc": ["Smart PFT_USB USB ECG Monitor PFT USB-PFT"],
  //       "department_incharge": "Arunraj"
  //     },
  //     {
  //       "department_id": 0,
  //       "department_name": "OP",
  //       "department_desc": ["Smart PFT_USB USB ECG Monitor PFT USB-PFT"],
  //       "department_incharge": "Dhanush"
  //     },
  //     {
  //       "department_id": 0,
  //       "department_name": "ECG",
  //       "department_desc": ["Smart PFT_USB USB ECG Monitor PFT USB-PFT"],
  //       "department_incharge": "Abhijith"
  //     },
  //     {
  //       "department_id": 0,
  //       "department_name": "OP",
  //       "department_desc": ["Smart PFT_USB USB ECG Monitor PFT USB-PFT"],
  //       "department_incharge": "Arunraj"
  //     },
  //     {
  //       "department_id": 0,
  //       "department_name": "Radiology",
  //       "department_desc": ["Smart PFT_USB USB ECG Monitor PFT USB-PFT"],
  //       "department_incharge": "Dhanush"
  //     },
  //     {
  //       "department_id": 0,
  //       "department_name": "ECG",
  //       "department_desc": ["Smart PFT_USB USB ECG Monitor PFT USB-PFT"],
  //       "department_incharge": "Abhijith"
  //     },
  //     {
  //       "department_id": 0,
  //       "department_name": "ECHO",
  //       "department_desc": ["Smart PFT_USB USB ECG Monitor PFT USB-PFT"],
  //       "department_incharge": "Arunraj"
  //     }
  //   ]

  async function dataGet() {
    const response = await axios.get("http://localhost:3000/DepartmentsData");
    setDepartmentsData(response.data);
  }
  useEffect(() => {
    dataGet();
  }, []);

  // useEffect(() => {});

  const DepartmentDetails = () => {
    const filteredData = [...DepartmentsData.Departments];

    if (sortOption === "aToZ") {
      filteredData?.sort((a, b) =>
        a.department_name.localeCompare(b.department_name)
      );
    } else if (sortOption === "zToA") {
      filteredData?.sort((a, b) =>
        b.department_name.localeCompare(a.department_name)
      );
    }
    return filteredData;
  };

  const searchedFilteredData = DepartmentDetails()?.filter((request) =>
    request.department_name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const inputRef = useRef();

  // handle submit from dialog

  const handleSubmit = async () => {
    setCsvData(editedCsvData);
    const response = await axios.patch(
      "http://localhost:3000/DepartmentsData",
      {
        Departments: [...csvData],
      }
    );
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

  //formatObject
  function formatObject(obj) {
    const formattedObj = {};
    Object.keys(obj).forEach((key) => {
      formattedObj[key.trim()] = obj[key];
    });
    return formattedObj;
  }

  // csv to object

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
  //file upload

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

  //table edit handler
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
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display={"flex"}>
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
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "500",
              color: "#212427",
            }}>
            Departments: {DepartmentsData?.Departments?.length}
          </Typography>

          <Box display="flex" alignItems="center" gap="1rem">
            <Box>
              <Button
                onClick={(e) => inputRef.current.click()}
                variant="contained"
                startIcon={<TbFileUpload />}
                sx={{borderRadius: "2rem", textTransform: "none"}}
                color="primary"
                display="flex"
                gap="0.5rem">
                <input
                  accept=".csv"
                  ref={inputRef}
                  type="file"
                  hidden
                  onChange={handleFileUpload}
                />
                Upload Bulk Depts
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
                    color: "#FF731D",
                  }}></SortIcon>
              </IconButton>
              <Menu
                anchorEl={anchorElSort}
                open={Boolean(anchorElSort)}
                onClose={handleSortClose}>
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
            </Box>
          </Box>
        </Box>
      </Box>

      {DepartmentsData?.Departments?.length === 0 ? (
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
                      <TableCell sx={{color: "primary.main"}}>
                        Department ID
                      </TableCell>
                      <TableCell sx={{color: "primary.main"}}>
                        Department Name
                      </TableCell>
                      <TableCell sx={{color: "primary.main"}}>
                        Department Description
                      </TableCell>
                      <TableCell sx={{color: "primary.main"}}>
                        InCharge
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {csvData?.map((request, index) => (
                      <TableRow
                        onClick={(e) => tableEditHandler(e, index)}
                        display="flex"
                        key={request.department_id}>
                        <TableCell
                          datatype="department_id"
                          sx={{
                            color: "#212427",
                          }}>
                          {rowIndex == index &&
                          columnName == "department_id" ? (
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
                          datatype="department_name"
                          sx={{
                            color: "#212427",
                          }}>
                          {rowIndex == index &&
                          columnName == "department_name" ? (
                            <input
                              datatype="department_name"
                              value={editedCsvData[index]["department_name"]}
                              onChange={(e) =>
                                handleEditCsvData(
                                  e.target.value,
                                  index,
                                  columnName
                                )
                              }
                              placeholder={request.department_name}
                            />
                          ) : (
                            request.department_name
                          )}
                        </TableCell>
                        <TableCell
                          datatype="department_desc"
                          align="left"
                          sx={{
                            color: "#212427",
                          }}>
                          {rowIndex == index &&
                          columnName == "department_desc" ? (
                            <input
                              datatype="department_desc"
                              value={editedCsvData[index]["department_desc"]}
                              onChange={(e) =>
                                handleEditCsvData(
                                  e.target.value,
                                  index,
                                  columnName
                                )
                              }
                              placeholder={request.department_desc}
                            />
                          ) : (
                            request.department_desc
                          )}
                        </TableCell>
                        <TableCell
                          datatype="department_incharge"
                          align="left"
                          sx={{
                            color: "#212427",
                          }}>
                          {rowIndex == index &&
                          columnName == "department_incharge" ? (
                            <input
                              datatype="department_incharge"
                              value={
                                editedCsvData[index]["department_incharge"]
                              }
                              onChange={(e) =>
                                handleEditCsvData(
                                  e.target.value,
                                  index,
                                  columnName
                                )
                              }
                              placeholder={request.department_incharge}
                            />
                          ) : (
                            request.department_incharge
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
                sx={{borderRadius: "2rem", marginTop: "2rem"}}
                onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{borderRadius: "2rem", marginTop: "2rem"}}
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
            <Typography variant="h2" color="primary">
              No department data to show
            </Typography>
          </Box>
        )
      ) : (
        <Box
          maxWidth={"100vw"}
          maxHeight="20rem"
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
                    color: "primary.main",
                    fontSize: "1.25rem",
                    fontWeight: "500",
                  }}>
                  Department ID
                </TableCell>
                <TableCell
                  sx={{
                    color: "primary.main",
                    fontSize: "1.25rem",
                    fontWeight: "500",
                  }}>
                  Department Name
                </TableCell>
                <TableCell
                  sx={{
                    color: "primary.main",
                    fontSize: "1.25rem",
                    fontWeight: "500",
                  }}>
                  Department Description
                </TableCell>
                <TableCell
                  sx={{
                    color: "primary.main",
                    fontSize: "1.25rem",
                    fontWeight: "500",
                  }}>
                  InCharge
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{bgcolor: "#FFFFFF"}}>
              {searchedFilteredData?.map((request, index) => (
                <TableRow display="flex" key={request.department_id}>
                  <TableCell
                    sx={{
                      color: "#212427",
                    }}>
                    {request.department_id}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#212427",
                    }}>
                    {request.department_name}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#212427",
                    }}>
                    {request.department_desc}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#212427",
                    }}>
                    {request.department_incharge}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      )}
    </SideBarWrapper>
  );
};

export default HospitalDepartments;
