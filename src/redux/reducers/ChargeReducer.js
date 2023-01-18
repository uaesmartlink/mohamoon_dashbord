import {
  GET_CHARGE_INIT,
  GET_CHARGE_SUCCESS,
  GET_CHARGE_ERROR,
} from "../constants/ChargeConstants.js";

const initialState = {
  data: [],
  loading: false,
  error: null,
  success: false,
  delete: false,
};

const charge = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARGE_INIT:
      return { ...state, loading: true };
    case GET_CHARGE_SUCCESS:
      return { ...state, success: true, data: action.data, loading: false };
    case GET_CHARGE_ERROR:
      return { ...state, error: action.error, loading: false };
    //plopImport
    default:
      return state;
  }
};

export default charge;
