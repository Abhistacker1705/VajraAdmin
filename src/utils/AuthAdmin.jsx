import React, {useEffect, useState} from "react";
import {useNavigate, Navigate, Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const AuthAdmin = () => {
  const dispatch = useDispatch();
  const {user, userPass} = useSelector((store) => store.auth);
  const navigate = useNavigate();
  console.log(user, userPass);
  // useEffect(() => {
  //   dispatch(checkLogin({user: users, userPassword: userPassword}));
  // }, [isLoggedIn]);

  return !user && !userPass ? <Navigate to="/" replace /> : <Outlet />;
};
export default AuthAdmin;
