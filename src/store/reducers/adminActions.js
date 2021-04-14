import {
    HANDLE_DRAWER_TOGGLE_CHANGE,
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    POST_USERS_REQUEST,
POST_USERS_SUCCESS,
POST_USERS_FAILURE
} from '../constants/adminConstants';

const initialState = {
    isPageLoading: false,
    errorMessage: '',
    successMessage: '',
    adminList: [],
    toggleStatus:true,
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case HANDLE_DRAWER_TOGGLE_CHANGE:
            return Object.assign({}, state, {
                toggleStatus: action.toggleStatus
            });
            case GET_USERS_REQUEST:
                return Object.assign({}, state, {
                    isPageLoading: true, successMessage: '', errorMessage:'', adminList: []
                });
            case GET_USERS_SUCCESS:
                console.log(action.response.data)
                return Object.assign({}, state, {
                    isPageLoading: false, adminList: action.response, successMessage:"Date received Succesfully"
                });
            case GET_USERS_FAILURE:
                return Object.assign({}, state, {
                    isPageLoading: false, errorMessage:true
                });

            case POST_USERS_REQUEST:
                return Object.assign({}, state, {
                isPageLoading: true, errorMessage: '', successMessage: ''
                });
            case POST_USERS_SUCCESS:
                return Object.assign({}, state, {
                    isPageLoading: false, successMessage: "Done Succesfully"
                });
            case POST_USERS_FAILURE:
                return Object.assign({}, state, {
                    isPageLoading: false, errorMessage: "Error in posting Data"
                });
        default:
            return state
    }
}
