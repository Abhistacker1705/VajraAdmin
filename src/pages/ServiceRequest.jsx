import React from "react";
import ServiceRequestTable from "../components/ServiceRequest/ServicesTable";
import SideBarWrapper from "../components/Dashboard/SideBarWrapper";
import {DashboardMenuList} from "../utils/dashboardMenuList";
const ServiceRequest = () => {
  return (
    <SideBarWrapper menuList={DashboardMenuList}>
      <ServiceRequestTable />;
    </SideBarWrapper>
  );
};

export default ServiceRequest;
