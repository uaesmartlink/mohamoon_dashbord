import {
    GET_USER_COUNT_INIT,
    GET_USER_COUNT_SUCCESS,
    GET_USER_COUNT_ERROR,
    GET_LAWYER_COUNT_ERROR,
    GET_LAWYER_COUNT_INIT,
    GET_LAWYER_COUNT_SUCCESS,
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


export const getLawyerCountInit = () => ({
    type: GET_LAWYER_COUNT_INIT,
});

export const getLawyerCountSuccess = (data) => ({
    type: GET_LAWYER_COUNT_SUCCESS,
    data
});

export const getLawyerCountError = (error) => ({
    type: GET_LAWYER_COUNT_ERROR,
    error
});