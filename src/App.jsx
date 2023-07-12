import {Route, Routes, useNavigate} from "react-router-dom";
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
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
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
        path="home/servicereq"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <ServiceRequest />
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
        path="home/users"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <Users />
          </ProtectedRoute>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/forgotpass" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
