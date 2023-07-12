import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AllHospitals from "./pages/AllHospitals";
import ForgotPassword from "./pages/ForgotPassword";
import ServiceRequest from "./pages/ServiceRequest";
import Messages from "./pages/Messages";
import {Navigate} from "react-router-dom";
import AuthAdmin from "./utils/AuthAdmin";
import {useSelector} from "react-redux";
import {useState, useEffect} from "react";
import Users from "./pages/Users";
// import {checkLogin} from "./redux/auth/action";
function App() {
  // const [users, setUsers] = useState("");
  // const [userPassword, setUserPassword] = useState("");

  // useEffect(() => {
  //   const item1 = localStorage.getItem("user");
  //   const item2 = localStorage.getItem("userPass");
  //   setUsers(item1);
  //   setUserPassword(item2);

  //   console.log(item1, item2);
  // });

  return (
    <Routes>
      {/* protected */}

      <Route path="/dashboard" element={<AuthAdmin />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="hosp" element={<AllHospitals />} />
        <Route path="servicereq" element={<ServiceRequest />} />
        <Route path="messages" element={<Messages />} />
        <Route path="users" element={<Users />} />
      </Route>

      <Route path="/" element={<Login />} />
      <Route path="/forgotpass" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
