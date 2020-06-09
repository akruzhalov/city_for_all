import axios from 'axios';
import {
    AUTH_FALSE,
    AUTH_LOGOUT,
    AUTH_SUCCESS,
    REG_FALSE,
    REG_SUCCESS,
    RENDER_DATA_SUCCESS,
    RENDER_ORDERS
} from "./actionTypes";
export function userAuth(email, password, isLogin, firstName, secondName, lastName) {
    return async dispatch => {
        const displayName = `${secondName} ${firstName} ${lastName}`
        const authData = {
            email,
            password,
            returnSecureToken: true,
            displayName
        };

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBNKNuNrqrKkkgb8oXgwzfswroSVuc_Zg0';

        if(isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBNKNuNrqrKkkgb8oXgwzfswroSVuc_Zg0';
            try {
                const response = await axios.post(url, authData);
                const data = response.data;
                const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);

                // expirationDate - служит для того, чтобы отслеживать сколько пользователь провел в сессии (Для localStorage)
                localStorage.setItem('token', data.idToken);
                localStorage.setItem('userId', data.localId);
                localStorage.setItem('userName', data.displayName);
                localStorage.setItem('expirationDate', expirationDate);

                dispatch(authSuccess(data.idToken));
                dispatch(autoLogout(data.expiresIn))
            } catch {
                const errorMessage = 'Неправильный логин или пароль';
                dispatch(authFalse(errorMessage))
            }
        } else {
            try {
                const response = await axios.post(url, authData);
                const data = response.data;
                //Добавим пользователя в БД юзеров с его новыми данными
                await axios.post(`https://cfa-spa.firebaseio.com/users/${data.localId}.json`, {
                    firstName,
                    secondName,
                    lastName,
                    email
                });
                const isReg = true;
                dispatch(regSuccess(isReg))
            } catch {
                const errorMessage = 'Этот Email уже используется';
                dispatch(regFalse(errorMessage))
            }
        }
    }
}

export function renderData() {
    return async dispatch => {
        try {
            const response = await axios.get(`https://cfa-spa.firebaseio.com/users/${localStorage.userId}.json`);
            Object.entries(response.data).map((userData) => {
                return dispatch(renderDataSuccess(userData[0], userData[1]))
            });
            Object.entries(response.data).map((userData) => {
                const orders = Object.entries(userData[1].orders).map((order) => {
                    return {
                        orderId: order[0],
                        orderData: order[1]
                    }
                });
                return dispatch(renderOrders(orders));
            });
        } catch (e) {
            console.log(e)
        }
    }
}

export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}

export function renderDataSuccess(userId, userData) {
    return {
        type: RENDER_DATA_SUCCESS,
        userId,
        userData
    }
}

export function authFalse(message) {
    return {
        type: AUTH_FALSE,
        message
    }
}

export function regFalse(message) {
    return {
        type: REG_FALSE,
        message
    }
}

export function regSuccess(isReg) {
    return {
        type: REG_SUCCESS,
        isReg
    }
}

export function autoLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    }
}

export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('expirationDate');
    return {
        type: AUTH_LOGOUT
    }
}

export function renderOrders(orders) {
    return {
        type: RENDER_ORDERS,
        orders
    }
}