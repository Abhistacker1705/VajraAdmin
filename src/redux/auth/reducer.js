import {
  // CHECK_LOGIN_START,
  // CHECK_LOGIN_FAILED,
  // CHECK_LOGIN_SUCCESS,
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
        userPass: action.payload.userPassword,
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
    // case CHECK_LOGIN_START: {
    //   return {
    //     ...state,
    //     isLoading: true,
    //   };
    // }

    // case CHECK_LOGIN_SUCCESS: {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isLoggedIn: true,
    //   };
    // }

    // case CHECK_LOGIN_FAILED: {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isLoggedIn: true,
    //   };
    // }
    default: {
      return {...state};
    }
  }
};
