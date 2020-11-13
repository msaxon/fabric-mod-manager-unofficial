import React, {useReducer} from 'react';
import * as _actions from './actions';
import * as _constants from '../utils/constants';

export const Store = React.createContext();

const initialState = {
    page: _constants.PAGE_HOME,
    username: ''
};

const reducer = (state, action) => {
    switch(action.state) {
        case _actions.SET_PAGE: 
            return {...state, page: action.payload}
        default: 
            return state;
    }
};

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {
        state,
        dispatch
    };

    // prettier-ignore
    return <Store.Provider value = {value}> {props.children} </Store.Provider>;
}