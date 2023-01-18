import {
  LAWYER_CATEGORY_FETCH_INIT,
  LAWYER_CATEGORY_FETCH_SUCCESS,
  LAWYER_CATEGORY_FETCH_FAIL,
} from "redux/constants/LawyerCategory";
export const fetchLawyerCategoryInit = (userId = "") => {
  return { type: LAWYER_CATEGORY_FETCH_INIT, userId };
};
export const fetchLawyerCategorySuccess = (data) => ({
  type: LAWYER_CATEGORY_FETCH_SUCCESS,
  data,
});
export const fetchLawyerCategoryFail = (error) => ({
  type: LAWYER_CATEGORY_FETCH_FAIL,
  error,
});
