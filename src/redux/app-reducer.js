import {getAuthUserData} from "./auth-reducer";

const SET_INITIALISED = 'SET_INITIALISED';


let initialState = {
    initialised: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALISED: {
            return {
                ...state,
                initialised: true
            }
        }
        default:
            return state;
    }
};


export const initialisedSuccess = () => ({type: SET_INITIALISED});

//thunks

export const initialiseApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initialisedSuccess());
    })
};

export default appReducer;
