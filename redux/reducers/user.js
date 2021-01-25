import { USER_STATE_CHANGE, USER_POSTS_STATE_CHANGE } from '../constants';

const initialState = {
    currentUser: null,
    posts: []
}
//Action: Calling upon our database fetching data and sending it to Reducer
export const user = (state = initialState, action) => {
    switch(action.type) {
        case USER_STATE_CHANGE:
            return {
                //this updates the state
                ...state,
                currentUser: action.currentUser
            }

        case USER_POSTS_STATE_CHANGE:
            return {
                //this updates the state
                ...state,
                posts: action.posts
            }
            default:
                return state;
    }

}

