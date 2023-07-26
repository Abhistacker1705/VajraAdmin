import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AllHospitals from "./pages/AllHospitals";
import ForgotPassword from "./pages/ForgotPassword";
import ServiceRequest from "./pages/ServiceRequest";
import Messages from "./pages/Messages";
import isAuthenticated from "./utils/Auth";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import Users from "./pages/Users";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import ServiceIssue from "./components/ServiceRequest/ServiceIssue";
import ServiceIssueImage from "./components/ServiceRequest/ServiceIssueImage";
import AllHospitalAssets from "./pages/HospitalAllAssets";
import MessageFocused from "./components/Messages/MessageFocused";
import AssetDetails from "./pages/AssetDetails";
import HospitalDashboard from "./pages/HospitalDashboard";
import WarrantyRequest from "./pages/WarrantyRequest";
import Calibrated from "./pages/Calibrated";
import NotCalibrated from "./pages/NotCalibrated";
import NotRequired from "./pages/NotRequired";
import Incidents from "./pages/Incidents";
import ClearedIncidents from "./pages/ClearedIncidents";
import NotClearedIncidents from "./pages/NotClearedIncidents";
import Services from "./pages/Services";
import ClearedServices from "./pages/ClearedServices";
import OpenServices from "./pages/OpenServices";
import HospitalDepartments from "./pages/HospitalDepartments";
import DepartmentDetails from "./pages/DepartmentDetails";
import ServiceClearedDetails from "./pages/ServiceClearedDetails";
import ServiceNotClearedDetails from "./pages/ServiceNotClearedDetails";
import IncidentClearedDetails from "./pages/IncidentClearedDetails";
import IncidentNotClearedDetails from "./pages/IncidentNotClearedDetails";
import HospitalUsers from "./components/AllHospital/HospitalUsers.jsx/HospitalUsers";

function App() {
  const navigate = useNavigate();
  let user = useSelector((store) => store.auth.user);
  let userPass = useSelector((store) => store.auth.userPass);

  useEffect(() => {
    if (!!user && !!userPass) navigate("/login");
    else return;
  }, []);
  return (
    <Routes>
      {/* protected */}
      <Route
        path="home"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="home/hosp"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <AllHospitals />
          </ProtectedRoute>
        }
      />

      <Route
        path="home/hosp/:hospitalId"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <HospitalDashboard />
          </ProtectedRoute>
        }
      />

      {/* //all assets of a particular hospital */}

      <Route
        path="home/hosp/:hospitalId/assets"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <AllHospitalAssets />
          </ProtectedRoute>
        }
      />

      {/* //details of a particular asset */}

      <Route
        path="home/hosp/:hospitalId/assets/:assetId"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <AssetDetails />
          </ProtectedRoute>
        }
      />

      {/* hospital users  */}

      <Route
        path="home/hosp/:hospitalId/users"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <HospitalUsers />
          </ProtectedRoute>
        }
      />
      {/* hospital calibration details */}

      {/* calibrated assets */}
      <Route
        path="home/hosp/:hospitalId/calibrated"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <Calibrated />
          </ProtectedRoute>
        }
      />
      {/* notcalibrated assets */}
      <Route
        path="home/hosp/:hospitalId/notcalibrated"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <NotCalibrated />
          </ProtectedRoute>
        }
      />
      {/* not required assets */}
      <Route
        path="home/hosp/:hospitalId/notrequired"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <NotRequired />
          </ProtectedRoute>
        }
      />

      {/* hospital incident records */}

      {/* every incidents of hospital */}
      <Route
        path="home/hosp/:hospitalId/incidents"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <Incidents />
          </ProtectedRoute>
        }
      />

      {/* Cleared incidents */}
      <Route
        path="home/hosp/:hospitalId/incidents/cleared"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <ClearedIncidents />
          </ProtectedRoute>
        }
      />
      {/* NotCleared incidents */}
      <Route
        path="home/hosp/:hospitalId/incidents/notcleared"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <NotClearedIncidents />
          </ProtectedRoute>
        }
      />

      {/*Incidents Cleared Details */}
      <Route
        path="home/hosp/:hospitalId/incidents/cleared/:id"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <IncidentClearedDetails />
          </ProtectedRoute>
        }
      />
      {/* Not Cleared Incidents */}

      <Route
        path="home/hosp/:hospitalId/incidents/notcleared/:id"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <IncidentNotClearedDetails />
          </ProtectedRoute>
        }
      />

      {/* hospital service records */}

      {/* every service of hospital */}
      <Route
        path="home/hosp/:hospitalId/services"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <Services />
          </ProtectedRoute>
        }
      />

      {/* Cleared services */}
      <Route
        path="home/hosp/:hospitalId/services/cleared"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <ClearedServices />
          </ProtectedRoute>
        }
      />
      {/* Open services */}
      <Route
        path="home/hosp/:hospitalId/services/notcleared"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <OpenServices />
          </ProtectedRoute>
        }
      />

      {/*Service Cleared Details */}
      <Route
        path="home/hosp/:hospitalId/services/cleared/:id"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <ServiceClearedDetails />
          </ProtectedRoute>
        }
      />
      {/* Not Cleared services */}

      <Route
        path="home/hosp/:hospitalId/services/notcleared/:id"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <ServiceNotClearedDetails />
          </ProtectedRoute>
        }
      />

      {/* Departments in hospital */}
      <Route
        path="home/hosp/:hospitalId/departments"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <HospitalDepartments />
          </ProtectedRoute>
        }
      />

      <Route
        path="home/hosp/:hospitalId/departments/:dept"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <DepartmentDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="home/servicereq"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <ServiceRequest />
          </ProtectedRoute>
        }
      />
      <Route
        path="home/servicereq/:hospitalid"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <ServiceIssue />
          </ProtectedRoute>
        }
      />
      <Route
        path="home/servicereq/:hospitalid/:imageid"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <ServiceIssueImage />
          </ProtectedRoute>
        }
      />

      <Route
        path="home/messages"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <Messages />
          </ProtectedRoute>
        }
      />
      <Route
        path="home/messages/:messageId"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <MessageFocused />
          </ProtectedRoute>
        }
      />
      <Route
        path="home/users"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <Users />
          </ProtectedRoute>
        }
      />
      <Route
        path="home/users/add"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <AddUser />
          </ProtectedRoute>
        }
      />
      <Route
        path="home/users/edit/:userid"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <EditUser />
          </ProtectedRoute>
        }
      />

      <Route
        path="home/warrantyReq"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <WarrantyRequest />
          </ProtectedRoute>
        }
      />

      <Route
        path="home/manuals"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <Messages />
          </ProtectedRoute>
        }
      />
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpass" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
