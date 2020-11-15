/* Actions Constants */
export const SET_PAGE = "SET_PAGE";
export const SET_SELECTED_MODPACK = 'SET_SELECTED_MODPACK';

/* Action Creators */
export const setPage = page => {
    console.log('setting page');
    return {
        type: SET_PAGE,
        payload: page
    }
}

export const setSelectedModpack = id => {
    return {
        type: SET_SELECTED_MODPACK,
        payload: id
    }
}