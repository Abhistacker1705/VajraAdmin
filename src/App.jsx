import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AllHospitals from "./pages/AllHospitals";
import ForgotPassword from "./pages/ForgotPassword";
import ServiceRequest from "./pages/ServiceRequest";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/forgotpass" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/hosp" element={<AllHospitals />} />
      <Route path="/dashboard/servicereq" element={<ServiceRequest />} />
    </Routes>
  );
}

export default App;
