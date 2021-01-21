const initialState = {
    currentUser: null
}
//Action: Calling upon our database fetching data and sending it to Reducer
export const user = (state = initialState, action) => {
    return {
        //this updates the state
        ...state,
        currentUser: action.currentUser
    }
}

