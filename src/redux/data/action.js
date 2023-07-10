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
      // console.log(resultData.data);
      dispatch(forgotPassSuccess(resultData.data));
    })
    .catch((err) => dispatch(forgotPassFailure(err)));
};
