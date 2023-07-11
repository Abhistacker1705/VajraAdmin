import React, {useState, useEffect} from "react";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import HospitalTable from "../components/AllHospital/HospitalTable";
import {Box, Stack, Typography} from "@mui/material";
import Search from "../components/AllHospital/Search";
import {mockData} from "../dummyData";
import Filter from "../components/AllHospital/HospitalFilter";
import Sort from "../components/AllHospital/Sort";
import {hospitalsort} from "../utils/hospitalSort";
import {DashboardMenuList} from "../utils/dashboardMenuList";

const AllHospitals = () => {
  const [allHospitals, setAllHospitals] = useState(mockData);
  const [searchedHospData, setSearchedHospData] = useState(mockData);
  const [searchedFilteredHospData, setSearchedFilteredHospData] =
    useState(mockData);
  const [filters, setFilters] = useState({
    city: [],
    status: ["Active", "Inactive"],
    subscription: [],
  });
  const [sortOrder, setSortOrder] = useState("");
  const [orderChanged, setOrderChanged] = useState(0);

  useEffect(() => {
    let city =
      typeof mockData === "string" ? [] : mockData.map((data) => data.city);
    let subs =
      typeof mockData === "string"
        ? []
        : mockData.map((data) => data.subscription);
    const uniqueCity = [...new Set(city)];
    const uniqueSubs = [...new Set(subs)];
    setFilters({
      ...filters,
      city: [...uniqueCity],
      subscription: [...uniqueSubs],
    });
    setSearchedHospData(mockData);
    setSearchedFilteredHospData(mockData);
  }, [mockData]);

  useEffect(() => {
    hospitalsort(
      sortOrder,
      searchedFilteredHospData,
      setSearchedFilteredHospData,
      setOrderChanged
    );
  }, [sortOrder, searchedFilteredHospData]);

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
            All Hospitals
          </Typography>
          <Box display="flex" gap="0.5rem">
            <Search
              allHospitals={allHospitals}
              setSearchedHospData={setSearchedHospData}
            />
            <Sort sortOrder={sortOrder} setSortOrder={setSortOrder} />
            <Filter
              filters={filters}
              searchedHospData={searchedHospData}
              searchedFilteredHospData={searchedFilteredHospData}
              setSearchedFilteredHospData={setSearchedFilteredHospData}
            />
          </Box>
        </Box>
        <HospitalTable searchedFilteredHospData={searchedFilteredHospData} />
      </Stack>
    </SideBarWrapper>
  );
};

export default AllHospitals;
