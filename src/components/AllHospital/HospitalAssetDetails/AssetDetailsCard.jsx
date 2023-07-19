import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {Box, Stack, Typography} from "@mui/material";
import {useSelector} from "react-redux";

const AssetDetailsCard = () => {
  const {assetId} = useParams();
  const [assetDetail, setAssetDetail] = useState({});
  const totalAssetDetails = useSelector((store) => store.data.assetDetails);

  useEffect(() => {
    const assetNeeded = totalAssetDetails.filter(
      (assetsDetail) => assetsDetail.id === Number(assetId)
    );

    setAssetDetail(...assetNeeded);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      bgcolor="white"
      padding={2}
      borderRadius="2rem"
      minWidth="45%">
      <Box>
        <Typography variant="body1" color="secondary.main" marginBottom="2rem">
          Details
        </Typography>
      </Box>
      <Box maxHeight="20rem" sx={{overflowY: "scroll"}}>
        <Stack display="flex" flexWrap={"wrap"} rowGap="0.5rem">
          <Box display="flex" justifyContent="space-between" flexWrap={"wrap"}>
            <Typography
              variant="subtitle1"
              fontWeight="400"
              color="primary.main">
              Asset Name
            </Typography>
            <Box
              display="flex"
              minWidth={{desktop: "10rem", mobile: "6rem"}}
              gap="1rem"
              justifyContent="space-between">
              <Typography
                variant="subtitle1"
                fontWeight="400"
                color="primary.main">
                :
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight="400"
                color="text.primary">
                {assetDetail.assetName}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" flexWrap={"wrap"}>
            <Typography
              variant="subtitle1"
              fontWeight="400"
              color="primary.main">
              Serial No
            </Typography>
            <Box
              minWidth={{desktop: "10rem", mobile: "6rem"}}
              display="flex"
              gap="1rem"
              justifyContent="space-between">
              <Typography
                variant="subtitle1"
                fontWeight="400"
                color="primary.main">
                :
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight="400"
                color="text.primary">
                {assetDetail.serialNo}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" flexWrap="wrap">
            <Typography
              variant="subtitle1"
              fontWeight="400"
              color="primary.main">
              Department
            </Typography>
            <Box
              minWidth={{desktop: "10rem", mobile: "6rem"}}
              display="flex"
              gap="1rem"
              justifyContent="space-between">
              <Typography
                variant="subtitle1"
                fontWeight="400"
                color="primary.main">
                :
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight="400"
                color="text.primary">
                {assetDetail.department}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" flexWrap={"wrap"}>
            <Typography
              variant="subtitle1"
              fontWeight="400"
              color="primary.main">
              Type
            </Typography>
            <Box
              minWidth={{desktop: "10rem", mobile: "6rem"}}
              display="flex"
              gap="1rem"
              justifyContent="space-between">
              <Typography
                variant="subtitle1"
                fontWeight="400"
                color="primary.main">
                :
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight="400"
                color="text.primary">
                {assetDetail.type}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" flexWrap={"wrap"}>
            <Typography
              variant="subtitle1"
              fontWeight="400"
              color="primary.main">
              Status
            </Typography>
            <Box
              minWidth={{desktop: "10rem", mobile: "6rem"}}
              display="flex"
              gap="1rem"
              justifyContent="space-between">
              <Typography
                variant="subtitle1"
                fontWeight="400"
                color="primary.main">
                :
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight="400"
                color="text.primary">
                {assetDetail.status}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" flexWrap={"wrap"}>
            <Typography
              variant="subtitle1"
              fontWeight="400"
              color="primary.main">
              Sold by
            </Typography>
            <Box
              minWidth={{desktop: "10rem", mobile: "6rem"}}
              display="flex"
              gap="1rem"
              justifyContent="space-between">
              <Typography
                variant="subtitle1"
                fontWeight="400"
                color="primary.main">
                :
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight="400"
                color="text.primary">
                {assetDetail.brand}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" flexWrap={"wrap"}>
            <Typography
              variant="subtitle1"
              fontWeight="400"
              color="primary.main">
              Calibrate Status
            </Typography>
            <Box
              minWidth={{desktop: "10rem", mobile: "6rem"}}
              display="flex"
              gap="1rem"
              justifyContent="space-between">
              <Typography
                variant="subtitle1"
                fontWeight="400"
                color="primary.main">
                :
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight="400"
                color="text.primary">
                {assetDetail.caliStatus}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" flexWrap={"wrap"}>
            <Typography
              variant="subtitle1"
              fontWeight="400"
              color="primary.main">
              AMC/CMC
            </Typography>
            <Box
              minWidth={{desktop: "10rem", mobile: "6rem"}}
              display="flex"
              gap="1rem"
              justifyContent="space-between">
              <Typography
                variant="subtitle1"
                fontWeight="400"
                color="primary.main">
                :
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight="400"
                color="text.primary">
                {assetDetail.maintenance}
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default AssetDetailsCard;
