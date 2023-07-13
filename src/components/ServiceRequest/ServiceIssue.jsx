import React, {useEffect, useState} from "react";
import {Box, Typography} from "@mui/material";
import {useParams, Link} from "react-router-dom";
import SideBarWrapper from "../Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../../utils/dashboardMenuList";
import {useSelector} from "react-redux";

const ServiceIssue = () => {
  const {hospitalid} = useParams();
  const requests = useSelector((store) => store.data.requests);

  const hospitalSelect = requests.filter((item) => item.id == hospitalid);
  const selectedHospital = hospitalSelect[0];

  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <Box width="100%" minHeight="100vh" backgroundColor="#FAF5EE">
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
            width: {
              xl: "220px",
              lg: "220px",
              md: "220px",
              sm: "200px",
              xs: "200px",
            },
            marginLeft: {
              xl: "80px",
              lg: "40px",
              md: "40px",
              sm: "65px",
              xs: "38px",
            },
          }}>
          Service Request
        </Typography>
        <Box
          width={{
            xl: "1030px",
            lg: "1030px",
            md: "820px",
            sm: "500px",
            xs: "400px",
          }}
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
              background: "#FFFFFF",
            },
            marginLeft: {
              xl: "80px",
              lg: "40px",
              md: "40px",
              sm: "65px",
              xs: "38px",
            },
          }}>
          <Box
            sx={{
              padding: "50px",
              marginLeft: {
                xl: "80px",
                lg: "85px",
                md: "-10px",
                sm: "-30px",
                xs: "",
              },
              marginTop: "10px",
              borderRadius: "15px",
              background: "#FFFFFF",
              width: {xl: "800px", lg: "800px", md: "600px", sm: "400px"},
            }}>
            <Box display={{xl: "flex", lg: "flex", md: "flex", sm: "block"}}>
              <Box display="flex">
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#1746A2",
                    width: {xl: "270px", lg: "270px", md: "270px", sm: "320px"},
                    height: "30px",
                  }}>
                  Hospital Name:
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xl: "20px",
                      lg: "20px",
                      md: "20px",
                      sm: "20px",
                      xs: "20px",
                    },
                    fontWeight: "500",
                    color: "#212427",
                    width: {
                      xl: "300px",
                      lg: "300px",
                      md: "300px",
                      sm: "300px",
                      xs: "200px",
                    },
                    height: "30px",
                    marginLeft: {
                      xl: "-100px",
                      lg: "-100px",
                      md: "-100px",
                      sm: "-100px",
                      xs: "50px",
                    },
                  }}>
                  {selectedHospital.hospital}
                </Typography>
              </Box>
              <Box
                display="flex"
                marginTop={{
                  xl: "0px",
                  lg: "0px",
                  md: "0px",
                  sm: "0px",
                  xs: "30px",
                }}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#1746A2",
                    width: "150px",
                    height: "30px",
                  }}>
                  Department:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#212427",
                    width: "150px",
                    height: "30px",
                    marginLeft: {
                      xl: "2px",
                      lg: "2px",
                      md: "2px",
                      sm: "8px",
                      xs: "17px",
                    },
                  }}>
                  {selectedHospital.department}
                </Typography>
              </Box>
            </Box>
            <Box
              display={{xl: "flex", lg: "flex", md: "flex", sm: "block"}}
              marginTop={{xl: "20px", lg: "20px", md: "20px", sm: "10px"}}>
              <Box display="flex">
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#1746A2",
                    width: "170px",
                    height: "30px",
                  }}>
                  Asset Name:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#212427",
                    width: "300px",
                    height: "30px",
                    marginLeft: {
                      xl: "0px",
                      lg: "0px",
                      md: "0px",
                      sm: "18px",
                      xs: "75px",
                    },
                  }}>
                  {selectedHospital.asset}
                </Typography>
              </Box>
              <Box
                display="flex"
                marginTop={{
                  xl: "0px",
                  lg: "0px",
                  md: "0px",
                  sm: "0px",
                  xs: "30px",
                }}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#1746A2",
                    width: "100px",
                    height: "30px",
                  }}>
                  Date:
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#212427",
                    width: "100px",
                    height: "30px",
                    marginLeft: {
                      xl: "50px",
                      lg: "50px",
                      md: "50px",
                      sm: "55px",
                      xs: "55px",
                    },
                  }}>
                  {selectedHospital.date}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                display={{xl: "flex", lg: "flex", md: "flex", sm: "block"}}
                marginTop={{xl: "20px", lg: "20px", md: "20px", sm: "10px"}}>
                <Box
                  display="flex"
                  marginLeft={{xl: "470px", lg: "470px", md: "470px"}}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "#1746A2",
                      width: "100px",
                      height: "30px",
                    }}>
                    City:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "#212427",
                      width: "150px",
                      height: "30px",
                      marginLeft: {
                        xl: "50px",
                        lg: "50px",
                        md: "50px",
                        sm: "55px",
                        xs: "55px",
                      },
                    }}>
                    {selectedHospital.city}
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "#1746A2",
                  width: "200px",
                  height: "30px",
                }}>
                Issue:
              </Typography>
              <Box
                sx={{
                  width: {
                    xl: "750px",
                    lg: "750px",
                    md: "750px",
                    sm: "450px",
                    xs: "320px",
                  },
                  height: "150px",
                  marginTop: "20px",
                  border: "2px solid #212427",
                }}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: {
                      xl: "18px",
                      lg: "18px",
                      md: "18px",
                      sm: "17px",
                      xs: "15px",
                    },
                    color: "#212427",
                  }}>
                  {selectedHospital.issue}
                </Typography>
              </Box>
            </Box>
            <Box>
              {selectedHospital.image && selectedHospital.image.length > 0 && (
                <Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: "500",
                        color: "#1746A2",
                        width: "100px",
                        height: "30px",
                      }}>
                      Photo:
                    </Typography>
                  </Box>
                  <Box display="flex" gap="2rem">
                    {selectedHospital.image.map((image, imageid) => (
                      <Link to={`./${imageid}`} key={imageid}>
                        <img
                          src={image}
                          alt=""
                          style={{
                            maxWidth: "15vw",
                            maxHeight: "30vw",
                            border: "none",
                          }}
                        />
                      </Link>
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </SideBarWrapper>
  );
};

export default ServiceIssue;
