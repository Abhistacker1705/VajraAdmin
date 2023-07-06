export const hospitalfilter = (searchedHospData, filterData) => {
  if (typeof searchedHospData === "string" || searchedHospData.length === 0) {
    return [];
  } else {
    if (
      filterData.city.length > 0 &&
      filterData.status.length == 0 &&
      filterData.sub.length == 0
    ) {
      return searchedHospData.filter((seachHosp) => {
        return filterData.city.includes(seachHosp.city);
      });
    }
    if (
      filterData.city.length == 0 &&
      filterData.sub.length > 0 &&
      filterData.status.length === 0
    ) {
      return searchedHospData.filter((seachHosp) => {
        return filterData.sub.includes(seachHosp.subscription);
      });
    }
    if (
      filterData.city.length == 0 &&
      filterData.status.length == 0 &&
      filterData.sub.length > 0
    ) {
      return searchedHospData.filter((seachHosp) => {
        return filterData.sub.includes(seachHosp.subscription);
      });
    }
    if (
      filterData.city.length > 0 &&
      filterData.status.length > 0 &&
      filterData.sub.length == 0
    ) {
      return searchedHospData.filter((seachHosp) => {
        return (
          filterData.city.includes(seachHosp.city) &&
          filterData.status.includes(seachHosp.status)
        );
      });
    }
    if (
      filterData.city.length > 0 &&
      filterData.status.length == 0 &&
      filterData.sub.length > 0
    ) {
      return searchedHospData.filter((seachHosp) => {
        return (
          filterData.city.includes(seachHosp.city) &&
          filterData.sub.includes(seachHosp.subscription)
        );
      });
    }
    if (
      filterData.city.length == 0 &&
      filterData.status.length > 0 &&
      filterData.sub.length > 0
    ) {
      return searchedHospData.filter((seachHosp) => {
        return (
          filterData.status.includes(seachHosp.status) &&
          filterData.sub.includes(seachHosp.subscription)
        );
      });
    }
    if (
      filterData.city.length > 0 &&
      filterData.status.length > 0 &&
      filterData.sub.length > 0
    ) {
      return searchedHospData.filter((seachHosp) => {
        return (
          filterData.city.includes(seachHosp.city) &&
          filterData.status.includes(seachHosp.status) &&
          filterData.sub.includes(seachHosp.subscription)
        );
      });
    }
  }
};
