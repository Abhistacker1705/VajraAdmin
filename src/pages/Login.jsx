import React, {useEffect} from "react";
import Navbar from "../components/Login/Navbar";
import SignInForm from "../components/Login/SignInForm";
import Footer from "../components/Login/Footer";
import {useNavigate} from "react-router";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const item1 = localStorage.getItem("user");
    const item2 = localStorage.getItem("userPass");

    setTimeout(() => {
      if (Boolean(item1) && Boolean(item2)) {
        navigate("/home");
      } else {
        navigate("/login");
      }
    }, 1000);
  }, []);
  return (
    <>
      <Navbar />
      <SignInForm />
      <Footer />
    </>
  );
};

export default Login;
