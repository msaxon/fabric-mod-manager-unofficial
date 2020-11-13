/* Actions Constants */
export const SET_PAGE = "SET_PAGE";

/* Action Creators */
export const setPage = page => {
    return {
        type: SET_PAGE,
        payload: page
    }
}