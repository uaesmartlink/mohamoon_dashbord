import {
    COUNTRY_FETCH_INIT,
    COUNTRY_FETCH_SUCCESS,
    COUNTRY_FETCH_FAIL,
  } from "redux/constants/Country";
  export const fetchCountryInit = (userId = "") => {
    return { type: COUNTRY_FETCH_INIT, userId };
  };
  export const fetchCountrySuccess = (data) => ({
    type: COUNTRY_FETCH_SUCCESS,
    data,
  });
  export const fetchCountryFail = (error) => ({
    type: COUNTRY_FETCH_FAIL,
    error,
  });
  