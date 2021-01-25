import { USER_STATE_CHANGE, USER_POSTS_STATE_CHANGE } from '../constants/index'
import * as firebase from 'firebase';
import 'firebase/firestore';

export function fetchUser(){
    return((dispatch) => {
        firebase.firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((snapshot)=> {
                if(snapshot.exists){
                    //sending a call to reducer
                    // console.log(snapshot.data())
                    dispatch({type : USER_STATE_CHANGE, currentUser: snapshot.data()})
                }
                else {
                    console.log('snapshot does not exists')
                }
            })
    })
}

export function fetchUserPosts(){
    return((dispatch) => {
        firebase.firestore()
            .collection("posts") //as displayed in firestore
            .doc(firebase.auth().currentUser.uid)
            .collection("userPosts")
            .orderBy("creation", "asc")//ascending order
            .get()
            .then((snapshot)=> {
                let posts = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;

                    return {
                        id, 
                        ...data
                    }
                })
                console.log(posts)
                dispatch({type : USER_POSTS_STATE_CHANGE, posts})
            })
    })
}