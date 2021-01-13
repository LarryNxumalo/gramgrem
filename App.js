import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: true}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

