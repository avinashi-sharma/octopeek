import { GET_API, POST_API } from "../../middleware/symbols";

import {
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    GET_USERS_REQUEST,
    POST_USERS_REQUEST,
    POST_USERS_SUCCESS,
    POST_USERS_FAILURE,
} from '../constants/adminConstants';

import {
    HANDLE_DRAWER_TOGGLE_CHANGE
} from '../constants/adminConstants';
import { baseApi } from "./ApiActions";

const BASE_URL = baseApi()

// Action Creators
export function getAdminData() {
    return {
        [GET_API]:{
            endpoint: BASE_URL + '/todos',
            authenticated: true,
            types: [ GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE],
        }
    }
}

export function addAdminData(body) {
    return {
        [POST_API]:{
            endpoint: BASE_URL+'/posts',
            authenticated: true,
            types: [ POST_USERS_REQUEST, POST_USERS_SUCCESS, POST_USERS_FAILURE],
            body: body
        }
    }
}

export function handleDrawerToggleChange(toggleStatus) {
    return {type: HANDLE_DRAWER_TOGGLE_CHANGE, toggleStatus}
}

