import axios from "axios";

// actions
//ALL Hospital actions
export const GET_ALLHOSPITAL_REQUEST = "GET_ALLHOSPITAL_REQUEST";
export const GET_ALLHOSPITAL_SUCCESS = "GET_ALLHOSPITAL_SUCCESS";
export const GET_ALLHOSPITAL_FAILURE = "GET_ALLHOSPITAL_FAILURE";

export const getAllHospitalRequest = () => {
  return {
    type: GET_ALLHOSPITAL_REQUEST,
  };
};

export const getAllHospitalSuccess = (data) => {
  return {
    type: GET_ALLHOSPITAL_SUCCESS,
    payload: data,
  };
};

export const getAllHospitalFailure = (err) => {
  return {
    type: GET_ALLHOSPITAL_FAILURE,
    payload: err,
  };
};

//Action Dispatcher
export const getAllHospitalData = (data, token) => (dispatch) => {
  dispatch(getAllHospitalRequest());
  axios
    .get("https://api.medpick.in/vajra//", {data})
    .then((resultData) => {
      dispatch(getAllHospitalSuccess(resultData.data));
    })
    .catch((err) => dispatch(getAllHospitalFailure(err)));
};

//Forgot Password Actions
export const FORGOT_PASS_REQUEST = "FORGOT_PASS_REQUEST";
export const FORGOT_PASS_SUCCESS = "FORGOT_PASS_SUCCESS";
export const FORGOT_PASS_FAILURE = "FORGOT_PASS_FAILURE";

export const forgotPassRequest = () => {
  return {
    type: FORGOT_PASS_REQUEST,
  };
};

export const forgotPassSuccess = (data) => {
  return {
    type: FORGOT_PASS_SUCCESS,
    payload: data,
  };
};

export const forgotPassFailure = (err) => {
  return {
    type: FORGOT_PASS_FAILURE,
    payload: err,
  };
};

//Action Dispatcher
export const forgotPass = (data, token) => (dispatch) => {
  dispatch(forgotPassRequest());
  axios({
    method: "POST",
    url: "https://api.medpick.in/vajra/fbsignuplogin/resetpassword",
    data,
  })
    .then((resultData) => {
      dispatch(forgotPassSuccess(resultData.data));
    })
    .catch((err) => dispatch(forgotPassFailure(err)));
};

//Add User

export const ADD_USER_REQUEST = "ADD_USER_REQUEST";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";

export const addUserRequest = () => {
  return {
    type: ADD_USER_REQUEST,
  };
};

export const addUserSuccess = (data) => {
  return {
    type: ADD_USER_SUCCESS,
    payload: data,
  };
};

export const addUserFailure = () => {
  return {
    type: ADD_USER_FAILURE,
  };
};

//Action Dispatcher
export const addUser = (data, token) => (dispatch) => {
  dispatch(addUserRequest());
  if (!!data.user && !!data.email && !!data.phone && !!data.access)
    dispatch(addUserSuccess(data));
  else dispatch(addUserFailure());
};

//Delete User

export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const deleteUserRequest = () => {
  return {
    type: DELETE_USER_REQUEST,
  };
};

export const deleteUserSuccess = (data) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: data,
  };
};

export const deleteUserFailure = () => {
  return {
    type: DELETE_USER_FAILURE,
  };
};

//Action Dispatcher
export const deleteUser = (index, token) => (dispatch) => {
  dispatch(deleteUserRequest());
  dispatch(deleteUserSuccess(index));
  dispatch(deleteUserFailure());
};

//Edit User

export const EDIT_USER_REQUEST = "EDIT_USER_REQUEST";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAILURE = "EDIT_USER_FAILURE";

export const editUserRequest = () => {
  return {
    type: EDIT_USER_REQUEST,
  };
};

export const editUserSuccess = (data) => {
  return {
    type: EDIT_USER_SUCCESS,
    payload: data,
  };
};

export const editUserFailure = () => {
  return {
    type: EDIT_USER_FAILURE,
  };
};

//Action Dispatcher
export const editUser = (data, token) => (dispatch) => {
  dispatch(editUserRequest());

  if (!!data.user && !!data.email && !!data.phone && !!data.access) {
    dispatch(editUserSuccess(data));
  } else dispatch(editUserFailure());
};

//Messages of Contacted Clients

export const MESSAGE_FETCH_REQUEST = "MESSAGE_FETCH_REQUEST";
export const MESSAGE_FETCH_SUCCESS = "MESSAGE_FETCH_SUCCESS";
export const MESSAGE_FETCH_FAILURE = "MESSAGE_FETCH_FAILURE";

export const messageFetchRequest = () => {
  return {
    type: MESSAGE_FETCH_REQUEST,
  };
};

export const messageFetchSuccess = (data) => {
  return {
    type: MESSAGE_FETCH_SUCCESS,
    payload: data,
  };
};

export const messageFetchFailure = () => {
  return {
    type: MESSAGE_FETCH_FAILURE,
  };
};

//Action Dispatcher
export const messageFetch = (data, token) => (dispatch) => {
  dispatch(messageFetchRequest());

  if (!!data.user && !!data.email && !!data.phone && !!data.access) {
    dispatch(messageFetchSuccess(data));
  } else dispatch(messageFetchFailure());
};
