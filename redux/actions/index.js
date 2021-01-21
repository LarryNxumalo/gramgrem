import { USER_STATE_CHANGE } from '../constants/index'
import firebase from 'firebase'

export function fetchUser(){
    return((dispatch) => {
        firebase.firestore()
        .collection("user")
        .dic(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot)=> {
            if(snapshot.exists){
                //sending a call to reducer
                dispatch({type : USER_STATE_CHANGE, currentUser: snapshot.data()})
            }
            else {
                console.log('snapshot does not exists')
            }
        })
    })
}