import React from "react";
import {Button, FormLabel, TextField, Typography} from "@mui/material";
import {Table, TableHead, TableRow, TableBody, TableCell} from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import {FormControl, MenuItem, Select} from "@mui/material";
import {Box} from "@mui/system";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import {useState} from "react";
import PdfDocument from "./ReportPdfFormat";

const ReportsPage = () => {
  const [selectedReport, setSelectedReport] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const allData = [
    {
      id: 1,
      Asset: "Smart PFT USB",
      Dept: "Radiology",
      SerialNo: "AB34456TR",
      Status: "Calibrated",
      Date: "2023-04-01",
      DueDate: "2023/09/05",
      ReportType: "Service",
    },
    {
      id: 2,
      Asset: "Apolo PFT USB",
      Dept: "ECG",
      SerialNo: "BB34456TR",
      Status: "Calibrated",
      Date: "2023-04-02",
      DueDate: "2023/05/05",
      ReportType: "Service",
    },
    {
      id: 3,
      Asset: "Max USB Smart",
      Dept: "ICU",
      SerialNo: "CB34456TR",
      Status: "Calibrated",
      Date: "2023-04-03",
      DueDate: "2023/09/06",
      ReportType: "Service",
    },
    {
      id: 4,
      Asset: "Smart PFT USB",
      Dept: "Radiology",
      SerialNo: "AB34456TR",
      Status: "Calibrated",
      Date: "2023-04-04",
      DueDate: "2023/09/05",
      ReportType: "Service",
    },
    {
      id: 5,
      Asset: "Apolo PFT USB",
      Dept: "ECG",
      SerialNo: "BB34456TR",
      Status: "Calibrated",
      Date: "2023-04-05",
      DueDate: "2023/05/05",
      ReportType: "Service",
    },
    {
      id: 6,
      Asset: "Max USB Smart",
      Dept: "ICU",
      SerialNo: "CB34456TR",
      Status: "Calibrated",
      Date: "2023-04-06",
      DueDate: "2023/09/06",
      ReportType: "Service",
    },
    {
      id: 7,
      Asset: "Smart PFT USB",
      Dept: "Radiology",
      SerialNo: "AB34456TR",
      Status: "Calibrated",
      Date: "2023-04-07",
      DueDate: "2023/09/05",
      ReportType: "Service",
    },
    {
      id: 8,
      Asset: "Apolo PFT USB",
      Dept: "ECG",
      SerialNo: "BB34456TR",
      Status: "Calibrated",
      Date: "2023-04-08",
      DueDate: "2023/05/05",
      ReportType: "Service",
    },
    {
      id: 9,
      Asset: "Max USB Smart",
      Dept: "ICU",
      SerialNo: "CB34456TR",
      Status: "Calibrated",
      Date: "2023-04-09",
      DueDate: "2023/09/06",
      ReportType: "Service",
    },

    {
      id: 1,
      Asset: "Inci PFT USB",
      Dept: "Radiology",
      SerialNo: "DB34456TR",
      Date: "2023-04-01",
      DueDate: "2023/06/05",
      ReportType: "Incident",
    },
    {
      id: 2,
      Asset: "Apolo PFT USB",
      Dept: "ECG",
      SerialNo: "EB34456TR",
      Date: "2023-04-02",
      DueDate: "2023/09/05",
      ReportType: "Incident",
    },
    {
      id: 3,
      Asset: "Max USB Smart",
      Dept: "ICU",
      SerialNo: "FB34456TR",
      Date: "2023-04-03",
      DueDate: "2023/09/06",
      ReportType: "Incident",
    },
    {
      id: 4,
      Asset: "Inci PFT USB",
      Dept: "Radiology",
      SerialNo: "DB34456TR",
      Date: "2023-04-04",
      DueDate: "2023/06/05",
      ReportType: "Incident",
    },
    {
      id: 5,
      Asset: "Apolo PFT USB",
      Dept: "ECG",
      SerialNo: "EB34456TR",
      Date: "2023-04-05",
      DueDate: "2023/09/05",
      ReportType: "Incident",
    },
    {
      id: 6,
      Asset: "Max USB Smart",
      Dept: "ICU",
      SerialNo: "FB34456TR",
      Date: "2023-04-06",
      DueDate: "2023/09/06",
      ReportType: "Incident",
    },
    {
      id: 7,
      Asset: "Inci PFT USB",
      Dept: "Radiology",
      SerialNo: "DB34456TR",
      Date: "2023-04-07",
      DueDate: "2023/06/05",
      ReportType: "Incident",
    },
    {
      id: 8,
      Asset: "Apolo PFT USB",
      Dept: "ECG",
      SerialNo: "EB34456TR",
      Date: "2023-04-08",
      DueDate: "2023/09/05",
      ReportType: "Incident",
    },
    {
      id: 9,
      Asset: "Max USB Smart",
      Dept: "ICU",
      SerialNo: "FB34456TR",
      Date: "2023-04-09",
      DueDate: "2023/09/06",
      ReportType: "Incident",
    },

    {
      id: 1,
      Asset: "Narayan PFT USB",
      Dept: "Radiology",
      SerialNo: "GB34456TR",
      Status: "Calibrated",
      Date: "2023-04-01",
      DueDate: "2023/06/05",
      ReportType: "Calibration",
    },
    {
      id: 2,
      Asset: "Subbhaiha PFT USB",
      Dept: "ECG",
      SerialNo: "HB34456TR",
      Status: "Calibrated",
      Date: "2023-04-02",
      DueDate: "2023/09/05",
      ReportType: "Calibration",
    },
    {
      id: 3,
      Asset: "Megan USB Smart",
      Dept: "ICU",
      SerialNo: "IB34456TR",
      Status: "Calibrated",
      Date: "2023-04-03",
      DueDate: "2023/09/06",
      ReportType: "Calibration",
    },
    {
      id: 4,
      Asset: "Narayan PFT USB",
      Dept: "Radiology",
      SerialNo: "GB34456TR",
      Status: "Calibrated",
      Date: "2023-04-04",
      DueDate: "2023/06/05",
      ReportType: "Calibration",
    },
    {
      id: 5,
      Asset: "Subbhaiha PFT USB",
      Dept: "ECG",
      SerialNo: "HB34456TR",
      Status: "Calibrated",
      Date: "2023-04-05",
      DueDate: "2023/09/05",
      ReportType: "Calibration",
    },
    {
      id: 6,
      Asset: "Megan USB Smart",
      Dept: "ICU",
      SerialNo: "IB34456TR",
      Status: "Calibrated",
      Date: "2023-04-06",
      DueDate: "2023/09/06",
      ReportType: "Calibration",
    },
    {
      id: 7,
      Asset: "Narayan PFT USB",
      Dept: "Radiology",
      SerialNo: "GB34456TR",
      Status: "Calibrated",
      Date: "2023-04-07",
      DueDate: "2023/06/05",
      ReportType: "Calibration",
    },
    {
      id: 8,
      Asset: "Subbhaiha PFT USB",
      Dept: "ECG",
      SerialNo: "HB34456TR",
      Status: "Calibrated",
      Date: "2023-04-08",
      DueDate: "2023/09/05",
      ReportType: "Calibration",
    },
    {
      id: 9,
      Asset: "Megan USB Smart",
      Dept: "ICU",
      SerialNo: "IB34456TR",
      Status: "Calibrated",
      Date: "2023-04-09",
      DueDate: "2023/09/06",
      ReportType: "Calibration",
    },
  ];

  const handleSelect = (options) => {
    setSelectedReport(options);
  };

  const handleReportTypeChange = (event) => {
    setSelectedReport(event.target.value);
  };

  const handleFromDateChange = (event) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event) => {
    setToDate(event.target.value);
  };

  const handleSearch = () => {
    const filteredData = allData.filter((data) => {
      const dataDate = new Date(data.Date);
      const fromDateObj = new Date(fromDate);
      const toDateObj = new Date(toDate);
      const isReportTypeMatch = data.ReportType === selectedReport;
      const isDateInRange = dataDate >= fromDateObj && dataDate <= toDateObj;
      return isReportTypeMatch && isDateInRange;
    });
    setFilteredData(filteredData);
  };

  const handleDownload = () => {
    if (filteredData.length > 0) {
      const blob = new Blob([<PdfDocument data={filteredData} />], {
        type: "application/pdf",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "report.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap="2rem">
      <Typography variant="body1" color="secondary.main">
        Reports
      </Typography>
      <Box
        sx={{
          gap: "2rem",
          width: "100%",
          display: "flex",
          flexDirection: {mobile: "column", xLDesktop: "row"},
          justifyContent: {tablet: "space-evenly"},
          alignItems: "center",
          paddingY: "20px",
          background: "#FFFFFF",
          borderRadius: "15px",
          boxShadow: "0px 0px 4px 0px #00000033",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}>
          <Box>
            <label
              style={{
                minWidth: "230px",
                fontSize: "18px",
                fontWeight: "500",
              }}>
              What Type of report ?
            </label>
          </Box>
          <FormControl sx={{minHeight: 50}}>
            <Select
              value={selectedReport}
              onChange={handleReportTypeChange}
              displayEmpty
              inputProps={{"aria-label": "Without label"}}
              sx={{
                background: "#EFF5FE",
                border: "none",
                width: "20ch",
                boxShadow: "0px 0px 4px 0px #00000033",
                color: "#1746A2",
                fontSize: "1.25rem",
                fontWeight: "500",
              }}>
              <MenuItem value="">
                <FormLabel
                  sx={{
                    color: "#1746A2",
                    fontSize: "18px",
                    fontWeight: "500",
                  }}>
                  Select Report
                </FormLabel>
              </MenuItem>
              <MenuItem
                onClick={() => handleSelect("Service")}
                sx={{
                  color: selectedReport === "Service" ? "#FF731D" : "#212427",
                  fontSize: "16px",
                  fontweight: "500",
                }}
                value="Service">
                Service Report
              </MenuItem>
              <MenuItem
                onClick={() => handleSelect("Incident")}
                sx={{
                  color: selectedReport === "Incident" ? "#FF731D" : "#212427",
                  fontSize: "16px",
                  fontweight: "500",
                }}
                value="Incident">
                Incident Report
              </MenuItem>
              <MenuItem
                onClick={() => handleSelect("Calibration")}
                sx={{
                  color:
                    selectedReport === "Calibration" ? "#FF731D" : "#212427",
                  fontSize: "16px",
                  fontweight: "500",
                }}
                value="Calibration">
                Calibration Report
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box display="flex" gap="1rem" flexDirection={{la: "column"}}>
          <Box display="flex" gap="1rem" flexDirection="column">
            <Box width="5ch">
              <label style={{fontSize: "18px", fontWeight: "500"}}>From</label>
            </Box>
            <TextField
              type="date"
              value={fromDate}
              onChange={handleFromDateChange}
              sx={{
                input: {color: "#1746A2"},
                height: "54px",
                background: "#EFF5FE",
                border: "none",
                boxShadow: "0px 0px 4px 0px #00000033",
              }}></TextField>
          </Box>

          <Box display="flex" flexDirection="column" gap="1rem">
            <Box width="5ch">
              <label
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                }}>
                To
              </label>
            </Box>
            <TextField
              type="date"
              value={toDate}
              onChange={handleToDateChange}
              sx={{
                input: {color: "#1746A2"},
                height: "54px",
                background: "#EFF5FE",
                border: "none",
                boxShadow: "0px 0px 4px 0px #00000033",
              }}></TextField>
          </Box>
        </Box>

        <Box>
          <Button
            variant="contained"
            onClick={handleSearch}
            sx={{
              minWidth: "161px",
              textTransform: "none",
              height: "48px",
              background: "#1746A2",
              fontSize: "16px",
              fontWeight: "500",
              minHeight: 50,
              border: "none",
              borderRadius: "25px",
              boxShadow: "0px 0px 4px 0px #00000033",
            }}>
            Search
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          minHeight: "100%",
          background: "#FFFFFF",
          borderRadius: "15px",
          boxShadow: "0px 0px 4px 0px #00000033",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {selectedReport && filteredData.length > 0 ? (
          <TableContainer
            sx={{maxWidth: "1030px", minHeight: "100%", borderRadius: "15px"}}
            aria-label="simple table">
            <Table>
              <TableHead width="1030px" height="50px">
                <TableRow sx={{background: "#EFF5FE"}}>
                  <TableCell maxWidth="1030px">
                    <Box display="flex">
                      <Typography
                        align="left"
                        variant="body1"
                        color="primary.main"
                        sx={{
                          width: "280px",
                          height: "30px",
                        }}>
                        Asset Name
                      </Typography>
                      <Typography
                        align="left"
                        variant="body1"
                        color="primary.main"
                        sx={{
                          height: "30px",
                        }}>
                        Serial No
                      </Typography>
                      <Typography
                        align="left"
                        variant="body1"
                        color="primary.main"
                        sx={{
                          height: "30px",
                        }}>
                        Date
                      </Typography>
                      <Typography
                        variant="body1"
                        align="left"
                        sx={{
                          height: "30px",
                        }}>
                        Due Date
                      </Typography>
                      <Typography
                        variant="body1"
                        align="left"
                        sx={{
                          height: "30px",
                        }}>
                        Download
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((request, index) => (
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

                            height: "30px",
                            borderColor: "black",
                            color: "#1746A2",
                          }}
                          component="th">
                          {request.Asset}
                        </Typography>
                        <Typography
                          align="left"
                          sx={{
                            fontSize: "18px",
                            fontWeight: "500",
                            color: "#212427",

                            height: "30px",
                            borderColor: "black",
                            display: "block",
                          }}>
                          {request.SerialNo}
                        </Typography>
                        <Typography
                          align="left"
                          sx={{
                            fontSize: "18px",
                            fontWeight: "500",
                            color: "#212427",
                            height: "30px",
                            borderColor: "black",
                            display: "block",
                          }}>
                          {request.Date}
                        </Typography>
                        <Typography
                          align="left"
                          sx={{
                            fontSize: "18px",
                            fontWeight: "500",
                            color: "#212427",
                            height: "30px",
                            width: "180px",
                            borderColor: "black",
                            display: "block",
                          }}>
                          {request.DueDate}
                        </Typography>
                        <Button onClick={() => handleDownload(request)}>
                          <DownloadForOfflineIcon
                            sx={{color: "#FF731D"}}></DownloadForOfflineIcon>
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingY: "20px",
            }}>
            <img width="358px" height="360px" src="/Reports.svg" alt="" />
            <Typography sx={{fontSize: "26px", fontweight: "400"}}>
              No Reports
            </Typography>
            <Button
              variant="contained"
              sx={{
                height: "55px",

                background: "#1746A2",
                fontSize: "16px",
                fontWeight: "500",
                textTransform: "none",
                paddingX: "3rem",
                border: "none",
                borderRadius: "35px",
                boxShadow: "0px 0px 4px 0px #00000033",
              }}>
              Go Home
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ReportsPage;
