import React, {useState} from "react";
import {
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  Menu,
  MenuItem,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import {Box} from "@mui/system";
import IconButton from "@mui/material/IconButton";
import TableContainer from "@mui/material/TableContainer";
import SortIcon from "@mui/icons-material/Sort";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {motion} from "framer-motion";

const MessageList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [anchorElSort, setAnchorElSort] = useState(null);
  const [anchorElFilter, setAnchorElFilter] = useState(null);
  const [sortOption, setSortOption] = useState("");
  const [filterCities, setFilterCities] = useState([]);

  const messages = useSelector((store) => store.data.messages);

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

  const handleCityCheckboxChange = (event) => {
    const {value, checked} = event.target;

    if (checked) {
      setFilterCities([...filterCities, value]);
    } else {
      setFilterCities(filterCities.filter((city) => city !== value));
    }
  };

  const getMessages = () => {
    let filteredData = [...messages];
    if (filterCities.length > 0) {
      filteredData = filteredData.filter((request) =>
        filterCities.includes(request.city)
      );
    }
    if (sortOption === "newestToOldest") {
      filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortOption === "oldestToNewest") {
      filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
    return filteredData;
  };

  const filteredMessages = getMessages().filter((request) =>
    request.hospital.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box width="100%" minHeight="100%" sx={{background: "#FAF5EE"}}>
      <Box display="flex" justifyContent="space-between" width="100%">
        <Typography
          sx={{
            fontSize: {
              xl: "24px",
              lg: "24px",
              md: "22px",
              sm: "20px",
              xs: "20px",
            },
            marginTop: "10px",
            fontWeight: "500",
            color: "secondary.main",
          }}>
          Messages
        </Typography>
        <Box display="flex">
          <IconButton onClick={handleSortClick} type="button">
            <SortIcon
              sx={{
                width: "60px",
                height: "40px",
                color: "secondary.main",
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
                  sortOption === "newestToOldest"
                    ? "secondary.main"
                    : "text.primary",
                fontSize: "16px",
                fontWeight: "500",
              }}>
              Newest to Oldest
            </MenuItem>
            <MenuItem
              onClick={() => handleSortOptionSelect("oldestToNewest")}
              sx={{
                color:
                  sortOption === "oldestToNewest"
                    ? "secondary.main"
                    : "text.primary",
                fontSize: "16px",
                fontWeight: "500",
              }}>
              Oldest to Newest
            </MenuItem>
          </Menu>
          <IconButton onClick={handleFilterClick}>
            <FilterAltOutlinedIcon
              sx={{
                width: "60px",
                height: "40px",
                color: "secondary.main",
                marginLeft: "-30px",
              }}></FilterAltOutlinedIcon>
          </IconButton>
          <Menu
            anchorEl={anchorElFilter}
            open={Boolean(anchorElFilter)}
            onClose={handleFilterClose}>
            <Typography
              sx={{
                color: "primary.main",
                fontSize: "18px",
                fontWeight: "500",
                marginLeft: "18px",
              }}>
              City
            </Typography>
            <MenuItem>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "text.primary",
                      "&.Mui-checked": {color: "secondary.main"},
                    }}
                    checked={filterCities.includes("Banglore")}
                    onChange={handleCityCheckboxChange}
                    value="Banglore"
                  />
                }
                label={
                  <Typography
                    style={{
                      color: "text.primary",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}>
                    Banglore
                  </Typography>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "text.primary",
                      "&.Mui-checked": {color: "secondary.main"},
                    }}
                    checked={filterCities.includes("Shimoga")}
                    onChange={handleCityCheckboxChange}
                    value="Shimoga"
                  />
                }
                label={
                  <Typography
                    style={{
                      color: "text.primary",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}>
                    Shimoga
                  </Typography>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "text.primary",
                      "&.Mui-checked": {color: "secondary.main"},
                    }}
                    checked={filterCities.includes("Davangere")}
                    onChange={handleCityCheckboxChange}
                    value="Davangere"
                  />
                }
                label={
                  <Typography
                    style={{
                      color: "text.primary",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}>
                    Davangere
                  </Typography>
                }
              />
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <Box
        maxWidth="100%"
        height="937px"
        sx={{
          boxShadow: "0px 0px 4px 0px #00000033",
          background: "white",
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
          sx={{width: "100%", height: "937px", borderRadius: "15px"}}
          aria-label="simple table">
          <Table>
            <TableHead sx={{maxWidth: "100%", maxHeight: "50px"}}>
              <TableRow sx={{background: "#EFF5FE"}}>
                <TableCell sx={{maxWidth: "1030px"}}>
                  <Box display="flex">
                    <Typography
                      align="left"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "500",
                        color: "primary.main",
                        width: "250px",
                        height: "30px",
                      }}>
                      Hospital Name
                    </Typography>
                    <Typography
                      align="left"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "500",
                        color: "primary.main",
                        width: "200px",
                        height: "30px",
                        marginLeft: "250px",
                      }}>
                      City
                    </Typography>
                    <Typography
                      align="left"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "500",
                        color: "primary.main",
                        height: "30px",
                        marginLeft: "175px",
                      }}>
                      Date
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredMessages.map((request, index) => (
                <TableRow
                  component={motion.div}
                  whileHover={{
                    animationTimingFunction: "ease-in-out",
                    translateY: "-0.25rem",
                  }}
                  sx={{":hover": {boxShadow: "tableRow"}}}
                  display="flex"
                  key={index}>
                  <TableCell
                    sx={{
                      maxWidth: "1030px",
                      background: "",
                      borderColor: "black",
                      padding: "10px",
                    }}>
                    <Link
                      to={`${request.id}`}
                      style={{textDecoration: "none", maxWidth: "1030px"}}>
                      <Box display="flex" width="1030px">
                        <Typography
                          align="left"
                          sx={{
                            fontSize: "18px",
                            fontWeight: "500",
                            width: "250px",
                            borderColor: "black",
                            color: "primary.main",
                          }}
                          component="th">
                          {request.hospital}
                        </Typography>
                        <Typography
                          align="left"
                          sx={{
                            fontSize: "18px",
                            fontWeight: "500",
                            color: "text.primary",
                            width: "200px",
                            borderColor: "black",
                            marginLeft: "255px",
                          }}>
                          {request.city}
                        </Typography>
                        <Typography
                          align="left"
                          sx={{
                            fontSize: "18px",
                            fontWeight: "500",
                            color: "text.primary",
                            borderColor: "black",
                            display: "block",
                            marginLeft: "175px",
                          }}>
                          {request.date}
                        </Typography>
                      </Box>
                      <Box display="flex" width="1030px">
                        <Typography
                          align="left"
                          sx={{
                            fontSize: "18px",
                            fontWeight: "400",
                            color: "text.primary",
                            height: "30px",
                            borderColor: "black",
                            width: "450px",
                            marginTop: "10px",
                          }}>
                          {request.Messages.length > 40
                            ? `${request.Messages.substring(0, 40)}.....`
                            : request.Messages}
                        </Typography>
                        <Typography
                          align="left"
                          sx={{
                            fontSize: "18px",
                            fontWeight: "500",
                            color: "text.primary",
                            borderColor: "black",
                            marginLeft: "385px",
                            marginTop: "10px",
                          }}>
                          {request.contact}
                        </Typography>
                      </Box>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default MessageList;
