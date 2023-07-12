//Login Actions
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login_Request = () => {
  return {type: LOGIN_REQUEST};
};
export const login_Success = () => {
  return {type: LOGIN_SUCCESS};
};

export const login = (data) => (dispatch) => {
  dispatch(login_Request());
  localStorage.setItem("user", data.user);
  localStorage.setItem("userPass", data.userPass);
  dispatch(login_Success(data));
};

//Logout Actions
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export const logout_Request = () => {
  return {type: LOGOUT_REQUEST};
};
export const logout_Success = () => {
  return {type: LOGOUT_SUCCESS};
};

export const logout = (data) => (dispatch) => {
  dispatch(logout_Request());
  localStorage.removeItem("user");
  localStorage.removeItem("userPass");
  dispatch(logout_Success());
};

//checkLogin

// export const CHECK_LOGIN_START = "CHECK_LOGIN_START";
// export const CHECK_LOGIN_SUCCESS = "CHECK_LOGIN_SUCCESS";
// export const CHECK_LOGIN_FAILED = "CHECK_LOGIN_FAILED";
// export const check_LoginStart = () => {
//   return {type: CHECK_LOGIN_START};
// };
// export const check_LoginSuccess = () => {
//   return {type: CHECK_LOGIN_SUCCESS};
// };
// export const check_LoginFailed = () => {
//   return {type: CHECK_LOGIN_FAILED};
// };

// export const checkLogin = (data) => (dispatch) => {
//   const navigate = useNavigate();
//   dispatch(check_LoginStart());
//   if (data.user && data.userPassword) {
//     dispatch(check_LoginSuccess());
//   } else if (data.user === null || data.user === undefined)
//     dispatch(check_LoginFailed());
// };
