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
  LAWYER_FETCH_FAIL,
  LAWYER_FETCH_INIT,
  LAWYER_FETCH_SUCCESS,
  FETCH_TOP_RATED_LAWYER_INIT,
  FETCH_TOP_RATED_LAWYER_FAIL,
  FETCH_TOP_RATED_LAWYER_SUCCESS,
} from "../constants/Lawyer";

export const fetchLawyerInit = () => ({
  type: LAWYER_FETCH_INIT,
});

export const fetchLawyerSuccess = (data) => ({
  type: LAWYER_FETCH_SUCCESS,
  data,
});

export const fetchLawyerFail = (err) => ({
  type: LAWYER_FETCH_FAIL,
  err,
});

export const fetchTopRatedLawyerInit = () => ({
  type: FETCH_TOP_RATED_LAWYER_INIT,
});

export const fetchTopRatedLawyerFail = (topRatedError) => ({
  type: FETCH_TOP_RATED_LAWYER_FAIL,
  topRatedError,
});

export const fetchTopRatedLawyerSuccess = (topRatedLawyer) => ({
  type: FETCH_TOP_RATED_LAWYER_SUCCESS,
  topRatedLawyer,
});

export const deleteTopRatedInit = (lawyerId) => ({
  type: DELETE_TOP_RATED_INIT,
  lawyerId,
});

export const deleteTopRatedSuccess = (lawyerId) => ({
  type: DELETE_TOP_RATED_SUCCESS,
  lawyerId,
});

export const deleteTopRatedError = (error) => ({
  type: DELETE_TOP_RATED_ERROR,
  error,
});

export const addTopRatedLawyerInit = (lawyerId) => ({
  type: ADD_TOP_RATED_LAWYER_INIT,
  lawyerId,
});

export const addTopRatedLawyerSuccess = (lawyerId) => ({
  type: ADD_TOP_RATED_LAWYER_SUCCESS,
  lawyerId,
});

export const addTopRatedLawyerError = (error) => ({
  type: ADD_TOP_RATED_LAWYER_ERROR,
  error,
});

export const deleteLawyerInit = (lawyerId) => ({
  type: DELETE_LAWYER_INIT,
  lawyerId: lawyerId,
});

export const deleteLawyerSuccess = (lawyerId) => ({
  type: DELETE_LAWYER_SUCCESS,
  lawyerId,
});

export const deleteLawyerError = (error) => ({
  type: DELETE_LAWYER_ERROR,
  error,
});

export const setLawyerAccountStatusInit = (lawyerId, status) => ({
  type: SET_LAWYER_ACCOUNT_STATUS_INIT,
  lawyerId,
  status,
});

export const setLawyerAccountStatusSuccess = (lawyerId, status) => ({
  type: SET_LAWYER_ACCOUNT_STATUS_SUCCESS,
  lawyerId,
  status,
});

export const setLawyerAccountStatusError = (error) => ({
  type: SET_LAWYER_ACCOUNT_STATUS_ERROR,
  error,
});
