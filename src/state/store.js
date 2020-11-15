import React, {useReducer} from 'react';
import * as _actions from './actions';
import * as _constants from '../utils/constants';
import { modpackArr } from '../data/mock-data';

export const Store = React.createContext();

const initialState = {
    page: _constants.PAGE_HOME,
    selectedModpack: null,
    modpacks: modpackArr
};

const reducer = (state, action) => {
    switch(action.type) {
        case _actions.SET_SELECTED_MODPACK:
            return {...state, selectedModpack: action.payload}
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