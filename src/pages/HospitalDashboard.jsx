import {Box, Stack} from "@mui/material";
import SubscriptionCard from "../components/AllHospital/HospitalDashboard/SubscriptionCard";
import IncidentCard from "../components/AllHospital/HospitalDashboard/IncidentCard";
import WarrantyCard from "../components/AllHospital/HospitalDashboard/WarrantyCard";
import PieChart from "../components/AllHospital/HospitalDashboard/PieChart";
import AssetsAndServices from "../components/AllHospital/HospitalDashboard/Asset&Serices";
import CalibrationCard from "../components/AllHospital/HospitalDashboard/CalibrationCard";
import HospDashHeader from "../components/AllHospital/HospitalDashboard/HospDashHeader";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";
import {useParams} from "react-router";

const HospitalDashboard = () => {
  const {hospitalId} = useParams();

  const hospitalData = {
    name: "Apolo Hospital",
    city: "Banglore",
    assets: 54,
    totalService: 35,
    openService: 23,
    clearedService: 12,
    departments: [
      {name: "Radiology Asset", percentage: 11},
      {name: "ECHO Asset", percentage: 2},
      {name: "OP Asset", percentage: 2},
      {name: "ICU Asset", percentage: 2},
      {name: "ECG Asset", percentage: 7},
    ],
    calibration: [
      {task: "Calibrated", percentage: 70},
      {task: "Not Calibrated", percentage: 20},
      {task: "Not Required", percentage: 10},
    ],
    incidentStatistics: {
      total: 10,
      cleared: 80,
      notCleared: 20,
    },
  };

  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <Box width="100%" paddingY="20px" paddingX="0px" minHeight="100%">
        <HospDashHeader hospitalData={hospitalData} />

        <Box
          minHeight="100%"
          width="100%"
          display="flex"
          gap="2rem"
          flexDirection={{xs: "column", lg: "row"}}>
          <Stack width={{xl: "50%", xs: "100%"}} gap="5rem" marginBottom={2}>
            <AssetsAndServices hospitalData={hospitalData} />
            <PieChart hospitalData={hospitalData} />
          </Stack>
          <Stack width={{xl: "50%", xs: "100%"}} gap="1.5rem">
            <SubscriptionCard />
            <IncidentCard hospitalData={hospitalData} />
            <CalibrationCard hospitalData={hospitalData} />
            <WarrantyCard />
          </Stack>
        </Box>
      </Box>
    </SideBarWrapper>
  );
};

export default HospitalDashboard;
