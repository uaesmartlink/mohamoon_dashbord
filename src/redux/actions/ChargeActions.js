import {
    GET_CHARGE_INIT,
    GET_CHARGE_SUCCESS,
    GET_CHARGE_ERROR
} from '../constants/ChargeConstants.js';

export const getChargeInit = () => ({
    type: GET_CHARGE_INIT,
});

export const getChargeSuccess = (data) => ({
    type: GET_CHARGE_SUCCESS,
    data
});

export const getChargeError = (error) => ({
    type: GET_CHARGE_ERROR,
    error
});