import {InputBase, IconButton, Box} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, {useEffect, useState} from "react";
import {hospitalSearch} from "../../utils/hospitalSearch";

const Search = ({allHospitals, setSearchedHospData}) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const searchResult = hospitalSearch(
      allHospitals,
      searchQuery,
      searchQuery.length
    );
    setSearchedHospData(searchResult);
  }, [searchQuery]);

  const filterSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
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
        onChange={(e) => filterSearch(e)}
      />
    </Box>
  );
};

export default Search;
