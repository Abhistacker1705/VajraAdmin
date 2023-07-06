export function hospitalSearch(hospdata, filterquery, queryLength) {
  return hospdata?.filter((data) => {
    return data.name
      .slice(0, queryLength)
      .toLowerCase()
      .includes(filterquery.toLowerCase());
  });
}
