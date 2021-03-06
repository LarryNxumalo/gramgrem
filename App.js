import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import { View, Text } from 'react-native';
import * as firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

const firebaseConfig = {
  apiKey: "AIzaSyAVFbuyz3kdWj8avUd8sDI7lbP1KmBRqjI",
  authDomain: "gram-grem.firebaseapp.com",
  projectId: "gram-grem",
  storageBucket: "gram-grem.appspot.com",
  messagingSenderId: "243184121628",
  appId: "1:243184121628:web:f37ad7d7c7bbe7bd896cd9",
  measurementId: "G-06JF4CEKSH"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import MainScreen from './components/Main'

const Stack = createStackNavigator();
export class App extends Component {
  constructor(props){
      super(props);
       this.state = {
         loaded: false,
       }
  }
  componentDidMount(){
      firebase.auth().onAuthStateChanged((user) => {
        if(!user){
          this.setState({
            loggedIn: false,
            loaded: true,
          })
        }else {
          this.setState({
            loggedIn: true,
            loaded: true,
        })}
      })
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if(!loaded){
      return(
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>Loading...</Text>
          </View>
      )
    }
    if(!loggedIn){
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false}}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: true}}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return(
      <Provider store={store} >
        <MainScreen/>
      </Provider>
  )
  }
}

export default App


