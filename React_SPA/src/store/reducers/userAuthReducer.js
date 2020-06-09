import {
    AUTH_FALSE,
    AUTH_LOGOUT,
    AUTH_SUCCESS,
    REG_FALSE,
    REG_SUCCESS,
    RENDER_DATA_SUCCESS, RENDER_ORDERS
} from "../actions/actionTypes";

const initialState = {
    token: null,
    message: '',
    isReg: false,
    userId: '',
    userData: {},
    orders: []
};

export default function userAuthReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                token: action.token,
                message: ''
            };
        case AUTH_FALSE:
            return {
                ...state,
                message: action.message
            };
        case RENDER_DATA_SUCCESS:
            return {
                ...state,
                userId: action.userId,
                userData: action.userData
            };
        case REG_SUCCESS:
            return {
                ...state,
                isReg: action.isReg,
                message: ''
            };
        case REG_FALSE:
            return {
                ...state,
                message: action.message
            };
        case AUTH_LOGOUT:
            return {
                ...state,
                token: null
            };
        case RENDER_ORDERS:
            return {
                ...state,
                orders: action.orders
            };
        default:
            return state
    }
}