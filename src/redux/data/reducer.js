import {
  FORGOT_PASS_FAILURE,
  FORGOT_PASS_REQUEST,
  FORGOT_PASS_SUCCESS,
  GET_ALLHOSPITAL_FAILURE,
  GET_ALLHOSPITAL_REQUEST,
  GET_ALLHOSPITAL_SUCCESS,
} from "./action";

const initState = {
  isLoading: false,
  isError: false,
  allHospital_list: [],
  forgotPassReqResponse: [],
};

export const dataReducer = (state = initState, action) => {
  switch (action.type) {
    //all hospital table data
    case GET_ALLHOSPITAL_REQUEST: {
      return {...state, isLoading: true, isError: false};
    }
    case GET_ALLHOSPITAL_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        allHospital_list: action.payload,
      };
    }
    case GET_ALLHOSPITAL_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        allHospital_list: action.payload,
      };
    }

    //Forgot Password Request

    case FORGOT_PASS_REQUEST: {
      return {...state, isLoading: true, isError: false};
    }
    case FORGOT_PASS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        forgotPassReqResponse: action.payload,
      };
    }
    case FORGOT_PASS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        forgotPassReqResponse: action.payload,
      };
    }

    default: {
      return {...state};
    }
  }
};
