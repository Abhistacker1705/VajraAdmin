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
import ReportCard from "../components/AllHospital/HospitalDashboard/ReportCard";
import TotalUsersCard from "../components/AllHospital/HospitalDashboard/TotalUsersCard";
import {motion} from "framer-motion";

const HospitalDashboard = () => {
  const {hospitalId} = useParams();

  const hospitalData = {
    name: "Apollo Hospital",
    city: "Bengaluru",
    assets: 54,
    totalService: 35,
    openService: 23,
    clearedService: 12,
    departments: [
      {name: "Radiology", percentage: 11},
      {name: "ECHO", percentage: 2},
      {name: "OP", percentage: 2},
      {name: "ICU", percentage: 2},
      {name: "ECG", percentage: 7},
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
          marginTop="2rem"
          minHeight="100%"
          width="100%"
          display="flex"
          gap="2rem"
          flexDirection={{xs: "column", lg: "row"}}>
          <Stack width={{xl: "50%", xs: "100%"}} gap="5.25rem">
            <AssetsAndServices hospitalData={hospitalData} />
            <PieChart hospitalData={hospitalData} />
          </Stack>
          <Stack width={{xl: "50%", xs: "100%"}} gap="2.5rem">
            <Box display="grid" gap="1.75rem">
              <Box
                display="grid"
                gridTemplateColumns={{mobile: "1fr", tablet: "1fr 1fr"}}
                gap="1rem">
                <SubscriptionCard />
                <ReportCard />
              </Box>
              <IncidentCard hospitalData={hospitalData} />
            </Box>
            <Box display="flex" flexDirection="column" gap="1.475rem">
              <CalibrationCard hospitalData={hospitalData} />

              <Box
                display="grid"
                gridTemplateColumns={{mobile: "1fr", tablet: "1fr 1fr"}}
                gap="1rem">
                <TotalUsersCard />
                <WarrantyCard />
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </SideBarWrapper>
  );
};

export default HospitalDashboard;
