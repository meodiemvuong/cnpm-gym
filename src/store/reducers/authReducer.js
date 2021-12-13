import * as Types from '../constants/ActionTypes';

const initialState = {
    isLoggedIn: false,
    user: null
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case Types.SAVE_USER_TO_REDUX:
            const saveState = {
                isLoggedIn: true,
                user: action.payload
            }
            return saveState;
        case Types.REMOVE_USER_OUT_OF_REDUX:
            const removeState = {
                isLoggedIn: false,
                user: action.payload
            }
            return removeState;
        default: return state;
    }
}

export default auth;