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
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpass" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
