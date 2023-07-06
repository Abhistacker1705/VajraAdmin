export const hospitalsort = (
  sortOrder,
  searchedFilteredHospData,
  setSearchedFilteredHospData,
  setOrderChanged
) => {
  let sortedData = [];
  if (sortOrder === "DateDesc") {
    setOrderChanged((prev) => prev + 1);
    sortedData = searchedFilteredHospData.sort((a, b) => {
      let aa = a.joinDate.split("-").reverse().join();
      let bb = b.joinDate.split("-").reverse().join();
      return new Date(aa) - new Date(bb);
    });
    setSearchedFilteredHospData(sortedData);
  } else if (sortOrder === "DateAsc") {
    setOrderChanged((prev) => prev + 1);
    sortedData = searchedFilteredHospData.sort((a, b) => {
      let aa = a.joinDate.split("-").reverse().join();
      let bb = b.joinDate.split("-").reverse().join();
      return new Date(bb) - new Date(aa);
    });

    setSearchedFilteredHospData(sortedData);
  } else if (sortOrder === "AlphaAsc") {
    setOrderChanged((prev) => prev + 1);
    sortedData = searchedFilteredHospData.sort(function (a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    setSearchedFilteredHospData(sortedData);
  } else if (sortOrder === "AlphaDesc") {
    setOrderChanged((prev) => prev + 1);
    sortedData = searchedFilteredHospData.sort(function (a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return 1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return -1;
      }
      return 0;
    });
    setSearchedFilteredHospData(sortedData);
  } else return;
};
