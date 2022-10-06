import { Text, StyleSheet, View, Settings, DevSettings } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons'
import Login from './src/Login'
import Onboard from './src/Onboard';
import SignUp from './src/SignUp'
import Dashboard from './src/Dashboard';
import User from './src/User';
import Pretoria from './src/Cities/Pretoria';
import  Cape from './src/Cities/cape';
import Jozi from './src/Cities/Jozi';
import Port from './src/Cities/Port';
import Durban from './src/Cities/Durban';
import * as firebase from 'firebase';
import firebaseConfig from './src/FirebaseConfig';




const Stack = createNativeStackNavigator();
export default class App extends Component {
  render() {
    if(!firebase.apps.length){
      console.log("Firebase connected");
      firebase.initializeApp(firebaseConfig)
      }
      
      
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen  name="SignUp" component={SignUp}/>
        <Stack.Screen  name="User" component={User}/>
        <Stack.Screen  name="Pretoria" component={Pretoria}/>
        <Stack.Screen  name="Jozi" component={Jozi}/>
        <Stack.Screen  name="Cape" component={Cape}/>
        <Stack.Screen  name="Port" component={Port}/>
        <Stack.Screen  name="Durban" component={Durban}/>
   
        </Stack.Navigator>
      </NavigationContainer> 
    )
  }     
}

