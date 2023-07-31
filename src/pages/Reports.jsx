import React from "react";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";
import ReportsPage from "../components/Reports/ReportsPage";

const Reports = () => {
  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <ReportsPage />
    </SideBarWrapper>
  );
};

export default Reports;
