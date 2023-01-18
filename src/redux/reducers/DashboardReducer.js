import {
    GET_USER_COUNT_INIT,
    GET_USER_COUNT_SUCCESS,
    GET_USER_COUNT_ERROR,
    GET_LAWYER_COUNT_ERROR,
    GET_LAWYER_COUNT_INIT,
    GET_LAWYER_COUNT_SUCCESS,
} from "../constants/DashboardConstants.js";

const initialState = {
  userData: [],
  lawyerData: [],
  userLoading: false,
  lawyerLoading: false,
  userError: null,
  lawyerError: null,
  userSuccess: false,
  lawyerSuccess: false,
  userDelete: false,
  lawyerDelete: false,
};

const dashboard = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_COUNT_INIT:
            return { ...state, userLoading: true };
        case GET_USER_COUNT_SUCCESS:
            return { ...state, success: true, userData: action.data, userLoading: false };
        case GET_USER_COUNT_ERROR:
            return { ...state, userError: action.error };
        case GET_LAWYER_COUNT_INIT:
            return { ...state, lawyerLoading: true };
        case GET_LAWYER_COUNT_SUCCESS:
            return { ...state, success: true, lawyerData: action.data, lawyerLoading: false };
        case GET_LAWYER_COUNT_ERROR:
            return { ...state, lawyerError: action.error };
            //plopImport
        default:
            return state;
    
    }
}

export default dashboard;