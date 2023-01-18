import {
  LAWYER_CATEGORY_FETCH_FAIL,
  LAWYER_CATEGORY_FETCH_INIT,
  LAWYER_CATEGORY_FETCH_SUCCESS,
} from "redux/constants/LawyerCategory";

const initialState = {
  data: [],
  loading: false,
  error: null,
  success: false,
  delete: false,
};

const lawyerCategory = (state = initialState, action) => {
  switch (action.type) {
    case LAWYER_CATEGORY_FETCH_INIT:
      return { ...state, loading: true };
    case LAWYER_CATEGORY_FETCH_SUCCESS:
      return { ...state, success: true, data: action.data, loading: false };
    case LAWYER_CATEGORY_FETCH_FAIL:
      return { ...state, error: action.error, loading: false };

    default:
      return state;
  }
};

export default lawyerCategory;
