import {
    GET_USER_COUNT_INIT,
    GET_USER_COUNT_SUCCESS,
    GET_USER_COUNT_ERROR,
    GET_DOCTOR_COUNT_ERROR,
    GET_DOCTOR_COUNT_INIT,
    GET_DOCTOR_COUNT_SUCCESS,
} from "../constants/DashboardConstants.js";

const initialState = {
  userData: [],
  doctorData: [],
  userLoading: false,
  doctorLoading: false,
  userError: null,
  doctorError: null,
  userSuccess: false,
  doctorSuccess: false,
  userDelete: false,
  doctorDelete: false,
};

const dashboard = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_COUNT_INIT:
            return { ...state, userLoading: true };
        case GET_USER_COUNT_SUCCESS:
            return { ...state, success: true, userData: action.data, userLoading: false };
        case GET_USER_COUNT_ERROR:
            return { ...state, userError: action.error };
        case GET_DOCTOR_COUNT_INIT:
            return { ...state, doctorLoading: true };
        case GET_DOCTOR_COUNT_SUCCESS:
            return { ...state, success: true, doctorData: action.data, doctorLoading: false };
        case GET_DOCTOR_COUNT_ERROR:
            return { ...state, doctorError: action.error };
            //plopImport
        default:
            return state;
    
    }
}

export default dashboard;