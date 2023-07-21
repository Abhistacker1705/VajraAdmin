import {
  ADD_USER_FAILURE,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  EDIT_USER_FAILURE,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
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
  users: [
    {
      id: 0,
      user: "Paresh",
      access: "Admin",
      phone: "9850980900",
      email: "akdlknlknlask@ksmflk.com",
    },
    {
      id: 1,
      user: "Masood",
      access: "Partial",
      phone: "9850980900",
      email: "akdlknlknlask@ksmflk.com",
    },
    {
      id: 2,
      user: "Arun",
      access: "Partial",
      phone: "9850980900",
      email: "akdlknlknlask@ksmflk.com",
    },
    {
      id: 3,
      user: "Abhijith",
      access: "Guest",
      phone: "9850980900",
      email: "akdlknlknlask@ksmflk.com",
    },
  ],
  requests: [
    {
      id: 0,
      hospital: "Apolo Hospital",
      asset: "PFT USB",
      city: "Banglore",
      department: "ECG",
      issue: "Issue 2 MJHNJNHJH JHJHJHJH JHJJHHHGGGFDDDBJKK",
      date: "2023/07/01",
      image: [
        "https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367401.jpg?size=626&ext=jpg",
        "https://media.istockphoto.com/id/505988240/photo/interventional-x-ray-system.jpg?s=612x612&w=0&k=20&c=cgAGZr7X2rAE3XiIduRzAyZxYhsitoTykl4hudPKztA=",
        "https://www.harmonyanimalhospital.net/wp-content/uploads/2019/09/pet-eeg.jpg",
      ],
    },
    {
      id: 1,
      hospital: "Megan Hospital",
      asset: "PFT USB",
      city: "Shivamogga",
      department: "ICU",
      issue: "Issue 2 msdddfdfssasd fdsfdsvcdc",
      date: "2023/07/02",
    },
    {
      id: 2,
      hospital: "KIMS Hospital",
      asset: "PFT USB",
      city: "Banglore",
      department: "ECG",
      issue: "Issue 3 fdfssasd fdsfdsvcdc hhhdnnadkjdj",
      date: "2023/07/03",
    },
    {
      id: 3,
      hospital: "Narayana Hrudayalaya",
      asset: "PFT USB",
      city: "Shivamogga",
      department: "ICU",
      issue: "Issue 4",
      date: "2023/07/04",
    },
    {
      id: 4,
      hospital: "Subbhaiah Hospital",
      asset: "PFT USB",
      city: "Shivmogga",
      department: "ECG",
      issue: "Issue 5",
      date: "2023/07/05",
    },
    {
      id: 5,
      hospital: "SS Hospital",
      asset: "PFT USB",
      city: "Davangere",
      department: "Radiology",
      issue: "Issue 3",
      date: "2023/07/06",
    },
    {
      id: 6,
      hospital: "MAX Hospital",
      asset: "PFT USB",
      city: "Banglore",
      department: "ECG",
      issue: "Issue 2",
      date: "2023/07/02",
    },
    {
      id: 7,
      hospital: "Apolo Hospital",
      asset: "PFT USB",
      city: "Banglore",
      department: "ECG",
      issue: "Issue 1",
      date: "2023/07/01",
    },
    {
      id: 8,
      hospital: "Megan Hospital",
      asset: "PFT USB",
      city: "Shivamogga",
      department: "Radiology",
      issue: "Issue 2",
      date: "2023/07/02",
    },
    {
      id: 9,
      hospital: "KIMS Hospital",
      asset: "PFT USB",
      city: "Banglore",
      department: "ECG",
      issue: "Issue 3",
      date: "2023/07/03",
    },
    {
      id: 10,
      hospital: "Narayana Hrudayalaya",
      asset: "PFT USB",
      city: "Shivamogga",
      department: "Radiology",
      issue: "Issue 4",
      date: "2023/07/04",
    },
    {
      id: 11,
      hospital: "Subbhaiah Hospital",
      asset: "PFT USB",
      city: "Shivmogga",
      department: "ECG",
      issue: "Issue 5",
      date: "2023/07/05",
    },
    {
      id: 12,
      hospital: "SS Hospital",
      asset: "PFT USB",
      city: "Davangere",
      department: "Radiology",
      issue: "Issue 3",
      date: "2023/07/06",
    },
    {
      id: 13,
      hospital: "MAX Hospital",
      asset: "PFT USB",
      city: "Banglore",
      department: "ECG",
      issue: "Issue 2",
      date: "2023/07/02",
    },
    {
      id: 14,
      hospital: "Apolo Hospital",
      asset: "PFT USB",
      city: "Banglore",
      department: "ECG",
      issue: "Issue 1",
      date: "2023/07/01",
    },
    {
      id: 15,
      hospital: "Megan Hospital",
      asset: "PFT USB",
      city: "Shivamogga",
      department: "Radiology",
      issue: "Issue 2",
      date: "2023/07/02",
    },
    {
      id: 16,
      hospital: "KIMS Hospital",
      asset: "PFT USB",
      city: "Banglore",
      department: "ECG",
      issue: "Issue 3",
      date: "2023/07/03",
    },
    {
      id: 17,
      hospital: "Narayana Hrudayalaya",
      asset: "PFT USB",
      city: "Shivamogga",
      department: "ICU",
      issue: "Issue 4",
      date: "2023/07/04",
    },
    {
      id: 18,
      hospital: "Subbhaiah Hospital",
      asset: "PFT USB",
      city: "Shivmogga",
      department: "Radiology",
      issue: "Issue 5",
      date: "2023/07/05",
    },
    {
      id: 19,
      hospital: "SS Hospital",
      asset: "PFT USB",
      city: "Davangere",
      department: "ICU",
      issue: "Issue 3",
      date: "2023/07/06",
    },
    {
      id: 20,
      hospital: "MAX Hospital",
      asset: "PFT USB",
      city: "Banglore",
      department: "ECG",
      issue: "Issue 2",
      date: "2023/07/02",
    },
    {
      id: 21,
      hospital: "Apolo Hospital",
      asset: "PFT USB",
      city: "Banglore",
      department: "ECG",
      issue: "Issue 1",
      date: "2023/07/01",
    },
    {
      id: 22,
      hospital: "Megan Hospital",
      asset: "PFT USB",
      city: "Shivamogga",
      department: "ICU",
      issue: "Issue 2",
      date: "2023/07/02",
    },
    {
      id: 23,
      hospital: "KIMS Hospital",
      asset: "PFT USB",
      city: "Banglore",
      department: "ECG",
      issue: "Issue 3",
      date: "2023/07/03",
    },
    {
      id: 24,
      hospital: "Narayana Hrudayalaya",
      asset: "PFT USB",
      city: "Shivamogga",
      department: "ICU",
      issue: "Issue 4",
      date: "2023/07/04",
    },
  ],
  messages: [
    {
      id: 1,
      hospital: "Apolo Hospital",
      city: "Banglore",
      Messages:
        "Hii Medpick, I am Dr. Jayadev from Apolo Hospital your product is good and service maintenance is also good Thank you.  ",
      date: "2023/07/01",
      contact: "+91-9591932562",
    },
    {
      id: 2,
      hospital: "Megan Hospital",
      city: "Shimoga",
      Messages:
        "Hii Vajra, I am Dr. Devaraj from Megan Hospital your product is good and service maintenance is also good Thank you.  ",
      date: "2023/07/02",
      contact: "+91-9258193562",
    },
    {
      id: 3,
      hospital: "SS Hospital",
      city: "Davangere",
      Messages:
        "Hii, I am Dr. Rakesh from SS Hospital your product is good and service maintenance is also good Thank you.  ",
      date: "2023/07/03",
      contact: "+91-6258193562",
    },
    {
      id: 4,
      hospital: "Subbhai Hospital",
      city: "Shimoga",
      Messages:
        "Hii Med, I am Dr.Abhijith from Subbhai Hospital your product is good and service maintenance is also good Thank you.  ",
      date: "2023/06/01",
      contact: "+91-7258195562",
    },
    {
      id: 5,
      hospital: "KIIMS Hospital",
      city: "Banglore",
      Messages:
        "Hii Vajra, I am Dr. Chandan from KIIMS Hospital your product is good and service maintenance is also good Thank you.  ",
      date: "2023/06/02",
      contact: "+91-8258593562",
    },
    {
      id: 6,
      hospital: "Max Hospital",
      city: "Shimoga",
      Messages:
        "Hii Medpick, I am Dr. Praveen from Max Hospital your product is good and service maintenance is also good Thank you.  ",
      date: "2023/06/03",
      contact: "+91-6358183562",
    },
    {
      id: 7,
      hospital: "Chigetere Hospital",
      city: "Davangere",
      Messages:
        "Hii , I am Dr. Raghu from Chigetere Hospital your product is good and service maintenance is also good Thank you.  ",
      date: "2023/06/04",
      contact: "+91-9258793562",
    },
    {
      id: 8,
      hospital: "Jayadeva Hospital",
      city: "Davangere",
      Messages:
        "Hii , I am Dr. Jagadeesh from Chigetere Hospital your product is good and service maintenance is also good Thank you.  ",
      date: "2023/06/04",
      contact: "+91-7481935623",
    },
    {
      id: 9,
      hospital: "Apolo Hospital",
      city: "Banglore",
      Messages:
        "Hii Medpick, I am Dr. Jayadev from Apolo Hospital your product is good and service maintenance is also good Thank you.  ",
      date: "2023/07/01",
      contact: "+91-9591932562",
    },
    {
      id: 10,
      hospital: "Megan Hospital",
      city: "Shimoga",
      Messages:
        "Hii Vajra, I am Dr. Devaraj from Megan Hospital your product is good and service maintenance is also good Thank you.  ",
      date: "2023/07/02",
      contact: "+91-9258193562",
    },
    {
      id: 11,
      hospital: "SS Hospital",
      city: "Davangere",
      Messages:
        "Hii, I am Dr. Rakesh from SS Hospital your product is good and service maintenance is also good Thank you.  ",
      date: "2023/07/03",
      contact: "+91-6258193562",
    },
    {
      id: 12,
      hospital: "Subbhai Hospital",
      city: "Shimoga",
      Messages:
        "Hii Med, I am Dr.Abhijith from Subbhai Hospital your product is good and service maintenance is also good Thank you.  ",
      date: "2023/06/01",
      contact: "+91-7258195562",
    },
    {
      id: 13,
      hospital: "KIIMS Hospital",
      city: "Banglore",
      Messages:
        "Hii Vajra, I am Dr. Chandan from KIIMS Hospital your product is good and service maintenance is also good Thank you.  ",
      date: "2023/06/02",
      contact: "+91-8258593562",
    },
    {
      id: 14,
      hospital: "Max Hospital",
      city: "Shimoga",
      Messages:
        "Hii Medpick, I am Dr. Praveen from Max Hospital your product is good and service maintenance is also good Thank you.  ",
      date: "2023/06/03",
      contact: "+91-6358183562",
    },
    {
      id: 15,
      hospital: "Chigetere Hospital",
      city: "Davangere",
      Messages:
        "Hii , I am Dr. Raghu from Chigetere Hospital your product is good and service maintenance is also good Thank you.  ",
      date: "2023/06/04",
      contact: "+91-9258793562",
    },
    {
      id: 16,
      hospital: "Jayadeva Hospital",
      city: "Davangere",
      Messages:
        "Hii , I am Dr. Jagadeesh from Chigetere Hospital your product is good and service maintenance is also good Thank you.  ",
      date: "2023/06/04",
      contact: "+91-7481935623",
    },
  ],
  assets: [
    {
      id: 1,
      assetName: "Smart PFT USB",
      department: "Ultrasound",
      serialNo: "BB34456TR",
      status: "Working",
      brand: "Taylor",
      maintenance: "05/09/2022",
    },
    {
      id: 2,
      assetName: "HISmart PFT USB",
      department: "Radiology",
      serialNo: "BB34456TR",
      status: "Working",
      brand: "Taylor",
      maintenance: "05/09/2023",
    },
    {
      id: 3,
      assetName: "KSmart PFT USB",
      department: "ECHO",
      serialNo: "BB34456TR",
      status: "Working",
      brand: "BPL",
      maintenance: "05/09/2023",
    },
    {
      id: 4,
      assetName: "GSmart PFT USB",
      department: "ECG",
      serialNo: "BB34456TR",
      status: "Not Working",
      brand: "Taylor",
      maintenance: "05/09/2023",
    },
    {
      id: 5,
      assetName: "GSmart PFT USB",
      department: "ECG",
      serialNo: "BB34456TR",
      status: "Working",
      brand: "Taylor",
      maintenance: "05/09/2023",
    },
    {
      id: 6,
      assetName: "LSmart PFT USB",
      department: "ECHO",
      serialNo: "BB34456TR",
      status: "Working",
      brand: "Taylor",
      maintenance: "05/09/2023",
    },
    {
      id: 7,
      assetName: "Smart PFT USB",
      department: "ECG",
      serialNo: "BB34456TR",
      status: "Working",
      brand: "Taylor",
      maintenance: "05/09/2023",
    },
    {
      id: 8,
      assetName: "Smart PFT USB",
      department: "ECG",
      serialNo: "BB34456TR",
      status: "Not Working",
      brand: "Taylor",
      maintenance: "05/09/2019",
    },
    {
      id: 9,
      assetName: "Smart PFT USB",
      department: "Radiology",
      serialNo: "BB34456TR",
      status: "Working",
      brand: "BPL",
      maintenance: "16/07/2016",
    },
    {
      id: 10,
      assetName: "Smart PFT USB",
      department: "Radiology",
      serialNo: "BB34456TR",
      status: "Working",
      brand: "BPL",
      maintenance: "29/12/2017",
    },
    {
      id: 11,
      assetName: "FSmart PFT USB",
      department: "Ultrasound",
      serialNo: "BB34456TR",
      status: "Not Working",
      brand: "BPL",
      maintenance: "05/09/2023",
    },
  ],
  assetDetails: [
    {
      id: 1,
      assetName: "Smart PFT USB",
      caliStatus: "Yes",
      department: "Ultrasound",
      type: "new",
      serialNo: "BB34456TR",
      status: "Working",
      brand: "Taylor",
      maintenance: "05/09/2022",
    },
    {
      id: 2,
      assetName: "Smart PFT USB",
      caliStatus: "Yes",
      department: "Ultrasound",
      type: "new",
      serialNo: "BB34456TR",
      status: "Working",
      brand: "Taylor",
      maintenance: "05/09/2022",
    },
    {
      id: 3,
      assetName: "Smart PFT USB",
      caliStatus: "Yes",
      department: "Ultrasound",
      type: "new",
      serialNo: "BB34456TR",
      status: "Working",
      brand: "Taylor",
      maintenance: "05/09/2022",
    },
    {
      id: 4,
      assetName: "Smart PFT USB",
      caliStatus: "Yes",
      department: "Ultrasound",
      type: "new",
      serialNo: "BB34456TR",
      status: "Working",
      brand: "Taylor",
      maintenance: "05/09/2022",
    },
  ],

  assetServiceRequests: [
    {
      id: 1,
      date: "05/09/2022",
      name: "Rangnath",
      report: "Service Completed",
      download:
        "https://harmonyhomemedical.com/cdn/shop/articles/Types-of-Medical-Supplies-729119_1200x660.jpg?v=1662070183",
    },
    {
      id: 2,
      date: "05/09/2022",
      name: "Rangnath",
      report: "Service Completed",
      download:
        "https://harmonyhomemedical.com/cdn/shop/articles/Types-of-Medical-Supplies-729119_1200x660.jpg?v=1662070183",
    },
    {
      id: 3,
      date: "05/09/2022",
      name: "Rangnath",
      report: "Service Completed",
      download:
        "https://harmonyhomemedical.com/cdn/shop/articles/Types-of-Medical-Supplies-729119_1200x660.jpg?v=1662070183",
    },
    {
      id: 4,
      date: "05/09/2022",
      name: "Rangnath",
      report: "Service Completed",
      download:
        "https://harmonyhomemedical.com/cdn/shop/articles/Types-of-Medical-Supplies-729119_1200x660.jpg?v=1662070183",
    },
  ],
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

    //ADD USER

    case ADD_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case ADD_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        users: [...state.users, action.payload],
      };
    }
    case ADD_USER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    //DELETE USER

    case DELETE_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        users: state.users.filter((user, idx) => idx !== action.payload),
      };
    }
    case DELETE_USER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    //EDIT USER

    case EDIT_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case EDIT_USER_SUCCESS: {
      const usersWithoutEditedUser = state.users.filter(
        (user) => user.id != action.payload.id
      );
      return {
        ...state,
        isLoading: false,
        isError: false,
        users: [...usersWithoutEditedUser, action.payload],
      };
    }
    case EDIT_USER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    //messages fetch

    default: {
      return {...state};
    }
  }
};
