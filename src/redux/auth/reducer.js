import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from "./action";

const initState = {
  isLoading: false,
  isError: false,
  user: "",
  userPass: "",
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        userPass: action.payload.userPass,
      };
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        user: "",
        userPass: "",
      };
    }

    default: {
      return {...state};
    }
  }
};
