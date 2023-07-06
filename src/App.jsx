import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AllHospitals from "./pages/AllHospitals";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/hosp" element={<AllHospitals />} />
    </Routes>
  );
}

export default App;
