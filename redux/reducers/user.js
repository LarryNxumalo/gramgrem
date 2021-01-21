const initialState = {
    currentUser: null
}
//Action: Calling upon our database fetching data and sending it to Reducer
export const user = (state = inititalState, action) => {
    return {
        ...state,
        currentUser: action.currentUser
    }
}

