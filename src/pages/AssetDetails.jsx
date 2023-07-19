import AssetDetailsCard from "../components/AllHospital/HospitalAssetDetails/AssetDetailsCard";
import AssetImageAndQRCard from "../components/AllHospital/HospitalAssetDetails/AssetImageCard";
import AssetServiceHistory from "../components/AllHospital/HospitalAssetDetails/AssetServiceHistory";
import AssetWarrantyCard from "../components/AllHospital/HospitalAssetDetails/AssetWarrantyCard";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";
import {Box} from "@mui/material";

const AssetDetails = () => {
  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <Box display="flex" justifyContent="space-between" gap="2rem">
        <AssetDetailsCard />
        <AssetImageAndQRCard />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        gap="2rem"
        marginTop="2rem">
        <AssetServiceHistory />

        <AssetWarrantyCard />
      </Box>
    </SideBarWrapper>
  );
};

export default AssetDetails;
