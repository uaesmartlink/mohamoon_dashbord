import {
  SET_LAWYER_ACCOUNT_STATUS_INIT,
  SET_LAWYER_ACCOUNT_STATUS_SUCCESS,
  SET_LAWYER_ACCOUNT_STATUS_ERROR,
  DELETE_LAWYER_INIT,
  DELETE_LAWYER_SUCCESS,
  DELETE_LAWYER_ERROR,
  ADD_TOP_RATED_LAWYER_INIT,
  ADD_TOP_RATED_LAWYER_SUCCESS,
  ADD_TOP_RATED_LAWYER_ERROR,
  DELETE_TOP_RATED_INIT,
  DELETE_TOP_RATED_SUCCESS,
  DELETE_TOP_RATED_ERROR,
  LAWYER_FETCH_INIT,
  LAWYER_FETCH_SUCCESS,
  LAWYER_FETCH_FAIL,
  FETCH_TOP_RATED_LAWYER_INIT,
  FETCH_TOP_RATED_LAWYER_SUCCESS,
  FETCH_TOP_RATED_LAWYER_FAIL,
} from "redux/constants/Lawyer";

const initialState = {
  data: [],
  topRatedLawyer: [],
  loading: false,
  topRatedLoading: false,
  error: null,
  success: false,
  delete: false,
  topRatedSuccess: false,
  topRatedDelete: false,
  topRatedError: false,
};

const lawyers = (state = initialState, action) => {
  switch (action.type) {
    case LAWYER_FETCH_INIT:
      return { ...state, loading: true };
    case LAWYER_FETCH_SUCCESS:
      return { ...state, success: true, data: action.data, loading: false };
    case LAWYER_FETCH_FAIL:
      return { ...state, error: action.error };
    case FETCH_TOP_RATED_LAWYER_INIT:
      return { ...state, topRatedLoading: true };
    case FETCH_TOP_RATED_LAWYER_SUCCESS:
      return {
        ...state,
        topRatedSuccess: true,
        topRatedLawyer: action.topRatedLawyer,
        topRatedLoading: false,
      };
    case FETCH_TOP_RATED_LAWYER_FAIL:
      return {
        ...state,
        topRatedError: action.topRatedError,
        topRatedLoading: false,
      };
    case DELETE_TOP_RATED_INIT:
      return { ...state, topRatedLoading: true };
    case DELETE_TOP_RATED_SUCCESS:
      return {
        ...state,
        success: true,
        topRatedLawyer: state.topRatedLawyer.filter(
          (elem) => elem.id !== action.lawyerId
        ),
        topRatedLoading: false,
      };
    case DELETE_TOP_RATED_ERROR:
      return { ...state, topRatedError: action.error };
    case ADD_TOP_RATED_LAWYER_INIT:
      return { ...state, loading: true };
    case ADD_TOP_RATED_LAWYER_SUCCESS:
      let lawyerAdded = state.data.find(
        (object) => object.id === action.lawyerId
      );
      console.log(
        "🚀 ~ file: Lawyer.js ~ line 76 ~ lawyers ~ lawyerAdded",
        lawyerAdded
      );
      return {
        ...state,
        success: true,
        topRatedLawyer: [...state.topRatedLawyer, lawyerAdded],
        loading: false,
      };
    case ADD_TOP_RATED_LAWYER_ERROR:
      return { ...state, error: action.error };
    case DELETE_LAWYER_INIT:
      return { ...state, loading: true };
    case DELETE_LAWYER_SUCCESS:
      return {
        ...state,
        success: true,
        data: state.data.filter((elem) => elem.id !== action.lawyerId),
        loading: false,
      };
    case DELETE_LAWYER_ERROR:
      return { ...state, error: action.error, loading: false };
    case SET_LAWYER_ACCOUNT_STATUS_INIT:
      return { ...state, loading: true };
    case SET_LAWYER_ACCOUNT_STATUS_SUCCESS:
      console.log("kepanggil kok");
      console.log(
        "🚀 ~ file: Lawyer.js ~ line 106 ~ lawyers ~ action.docot",
        action.lawyerId
      );
      let objIndex = state.data.findIndex((obj) => obj.id === action.lawyerId);
      let newArray = state.data;
      newArray[objIndex].accountStatus = action.status;
      // console.log(
      //   "🚀 ~ file: Lawyer.js ~ line 106 ~ lawyers ~ newArray[objIndex].accountStatus",
      //   newArray[objIndex].accountStatus
      // );

      return { ...state, success: true, data: newArray, loading: false };
    case SET_LAWYER_ACCOUNT_STATUS_ERROR:
      return { ...state, error: action.error, loading: false };
    //plopImport
    default:
      return state;
  }
};
export default lawyers;
