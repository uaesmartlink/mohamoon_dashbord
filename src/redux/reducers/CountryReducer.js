import {
    COUNTRY_FETCH_FAIL,
    COUNTRY_FETCH_INIT,
    COUNTRY_FETCH_SUCCESS,
  } from "redux/constants/Country";
  
  const initialState = {
    data: [],
    loading: false,
    error: null,
    success: false,
    delete: false,
  };
  
  const country = (state = initialState, action) => {
    switch (action.type) {
      case COUNTRY_FETCH_INIT:
        return { ...state, loading: true };
      case COUNTRY_FETCH_SUCCESS:
        return { ...state, success: true, data: action.data, loading: false };
      case COUNTRY_FETCH_FAIL:
        return { ...state, error: action.error, loading: false };
  
      default:
        return state;
    }
  };
  
  export default country;
  