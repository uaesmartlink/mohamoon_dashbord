import {
    GET_USER_COUNT_INIT,
    GET_USER_COUNT_SUCCESS,
    GET_USER_COUNT_ERROR,
    GET_DOCTOR_COUNT_ERROR,
    GET_DOCTOR_COUNT_INIT,
    GET_DOCTOR_COUNT_SUCCESS,
} from '../constants/DashboardConstants.js';

export const getUserCountInit = () => ({
    type: GET_USER_COUNT_INIT,
});

export const getUserCountSuccess = (data) => ({
    type: GET_USER_COUNT_SUCCESS,
    data
});

export const getUserCountError = (error) => ({
    type: GET_USER_COUNT_ERROR,
    error
});


export const getDoctorCountInit = () => ({
    type: GET_DOCTOR_COUNT_INIT,
});

export const getDoctorCountSuccess = (data) => ({
    type: GET_DOCTOR_COUNT_SUCCESS,
    data
});

export const getDoctorCountError = (error) => ({
    type: GET_DOCTOR_COUNT_ERROR,
    error
});