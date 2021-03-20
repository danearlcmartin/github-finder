/* eslint-disable import/no-anonymous-default-export */
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_REPOS,
    GET_USER
} from '../types.js';

export default (state,action) => {
    switch(action.type) {
        case SEARCH_USERS:
            return {
                ...state,
                users:action.payload,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                user:action.payload,
                    loading: false
        }
        case GET_REPOS:
            return {
                ...state,
                repos:action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                users:[],
                loading: false
            }
        case CLEAR_USERS:
            return {
                ...state,
                loading:true
            }
        default:
            return state;
    }
}