import React from "react";
import {Button, Typography, Box} from "@mui/material";
import {useParams} from "react-router-dom";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";

const IncidentNotClearedDetails = () => {
  const incidentDetails = [
    {
      id: 1,
      Head: "ECG Monitor",
      Asset: "Smart PFT USB - PFT Spirometer",
      Status: "Not Cleared",
      Dept: "ICU",
      IssueDate: "03/04/2023",
      Issue:
        "Display Broken ECG Monitor ECG Monitor ECG Monitor ECG Monitor ECG Monitor ECG Monitor ECG Monitor ECG Monitor ECG Monitor ECG Monitor ECG Monitor ECG Monitor ECG Monitor",
      Images: [
        "https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367401.jpg?size=626&ext=jpg",
        "https://media.istockphoto.com/id/505988240/photo/interventional-x-ray-system.jpg?s=612x612&w=0&k=20&c=cgAGZr7X2rAE3XiIduRzAyZxYhsitoTykl4hudPKztA=",
        "https://www.harmonyanimalhospital.net/wp-content/uploads/2019/09/pet-eeg.jpg",
        "https://advinhealthcare.com/wp-content/uploads/2022/10/Intensive-Care-Unit-ICU-1.jpg",
      ],
    },
    {
      id: 2,
      Head: "Defibrilators",
      Asset: "Smart PFT USB - PFT Spirometer",
      Status: "Not Cleared",
      Dept: "ECG",
      IssueDate: "05/04/2023",
      Issue: "Display Broken",
      Images: [],
    },
    {
      id: 3,
      Head: "Radiology Monitor",
      Asset: "Smart PFT USB - PFT Spirometer",
      Status: "Not Cleared",
      Dept: "Radiology",
      IssueDate: "07/04/2023",
      Issue: "Display Broken",
      Images: [],
    },
  ];

  const {id} = useParams();

  const selectedHospital = incidentDetails.find((item) => item.Head === id);
  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <Box minWidth="100%" minHeight="100%" sx={{background: "#FAF5EE"}}>
        <Box paddingY="30px">
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
              marginLeft: "20px",
              marginBottom: "2rem",
              width: "220px",
            }}>
            Incidents Details
          </Typography>
          <Box
            maxWidth={{
              xl: "1030px",
              lg: "1030px",
              md: "900px",
              sm: "600px",
              xs: "480px",
            }}
            minHeight="100%"
            sx={{
              boxShadow: "0px 0px 4px 0px #00000033",
              border: "0px solid #1746A280",
              borderRadius: "15px",
              background: "white",
              marginLeft: {xl: "0px", lg: "0px", md: "0px"},
            }}>
            <Box padding="25px">
              <Box display="flex">
                <Box display="flex">
                  <Typography
                    sx={{
                      fontSize: {
                        xl: "26px",
                        lg: "26px",
                        md: "26px",
                        sm: "24px",
                        xs: "20px",
                      },
                      fontWeight: "400",
                      color: "#212427",
                    }}>
                    Asset Name
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xl: "26px",
                        lg: "26px",
                        md: "26px",
                        sm: "24px",
                        xs: "20px",
                      },
                      fontWeight: "400",
                      color: "#212427",
                      marginLeft: {
                        xl: "100px",
                        lg: "100px",
                        md: "100px",
                        sm: "130px",
                      },
                    }}>
                    :
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xl: "26px",
                        lg: "26px",
                        md: "26px",
                        sm: "24px",
                        xs: "20px",
                      },
                      fontWeight: "400",
                      color: "#212427",
                      marginLeft: "30px",
                    }}>
                    {selectedHospital.Asset}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    border: "1px solid #FF4B4B",
                    borderRadius: "18px",
                    width: "115px",
                    height: "36px",
                    marginLeft: {
                      xl: "150px",
                      lg: "150px",
                      md: "35px",
                      sm: "2px",
                    },
                  }}>
                  <Typography
                    align="center"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#FF4B4B",
                      height: "36px",
                      width: "110px",
                      padding: "3px",
                    }}>
                    {selectedHospital.Status}
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" paddingY="15px">
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Department
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                    marginLeft: {
                      xl: "98px",
                      lg: "98px",
                      md: "98px",
                      sm: "58px",
                    },
                  }}>
                  :
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                    marginLeft: "28px",
                  }}>
                  {selectedHospital.Dept}
                </Typography>
              </Box>

              <Box display="flex" paddingY="15px">
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Issue Date
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                    marginLeft: {
                      xl: "120px",
                      lg: "120px",
                      md: "120px",
                      sm: "78px",
                    },
                  }}>
                  :
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                    marginLeft: "28px",
                  }}>
                  {selectedHospital.IssueDate}
                </Typography>
              </Box>

              <Box paddingY="10px">
                <Typography
                  sx={{
                    fontSize: {
                      xl: "26px",
                      lg: "26px",
                      md: "26px",
                      sm: "24px",
                      xs: "20px",
                    },
                    fontWeight: "400",
                    color: "#212427",
                  }}>
                  Issue
                </Typography>
                <Box
                  sx={{
                    boxShadow: "0px 0px 8px 0px #0000001F",
                    padding: "20px",
                    borderRadius: "10px",
                    minwidth: "892px",
                  }}>
                  <Typography
                    sx={{
                      fontSize: {
                        xl: "22px",
                        lg: "22px",
                        md: "22px",
                        sm: "18px",
                        xs: "18px",
                      },
                      fontWeight: "400",
                      color: "#212427",
                      minWidth: "100%",
                    }}>
                    {selectedHospital.Issue}
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" paddingY="10px">
                {selectedHospital.Images &&
                  selectedHospital.Images.length > 0 && (
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            xl: "26px",
                            lg: "26px",
                            md: "26px",
                            sm: "24px",
                            xs: "20px",
                          },
                          fontWeight: "400",
                          color: "#212427",
                        }}>
                        Photos
                      </Typography>
                      <Box
                        sx={{
                          border: "2px solid #00A88480",
                          minWidth: "30vw",
                          minHeight: "12vw",
                          borderRadius: "10px",
                        }}>
                        {selectedHospital.Images.map((image, index) => (
                          <img
                            src={image}
                            alt=""
                            key={index}
                            style={{
                              maxWidth: "8vw",
                              maxHeight: "30vw",
                              border: "none",
                              padding: "15px",
                              marginTop: "35px",
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </SideBarWrapper>
  );
};

export default IncidentNotClearedDetails;
