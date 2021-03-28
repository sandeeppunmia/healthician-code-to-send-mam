import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserSignUpScreen from './screens/UserSignUpScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';

export default function App(){
    return(
      <AppContainer/>
    )
}

const switchNavigator = createSwitchNavigator({
  UserSignUpScreen:{
    screen:UserSignUpScreen
  },
  HomeScreen:{
    screen:HomeScreen
  }
})

const AppContainer = createAppContainer({switchNavigator})
