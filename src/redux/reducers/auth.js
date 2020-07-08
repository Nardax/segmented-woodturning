import { LOGIN, LOGOUT } from "../actionTypes";

const initialState = { 
    isAuthorized: false,
    name: '',
    picture: ''
};

export default function(state = initialState, action) {
    switch (action.type) {
        case LOGIN: {
            return {
                isAuthenticated: true,
                name: action.name,
                picture: action.picture 
            };
        }
        case LOGOUT: {
            return initialState;
        }
        default:
            return state;
    }
}