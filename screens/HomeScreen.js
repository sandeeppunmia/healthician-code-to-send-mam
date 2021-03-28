import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity ,Modal,ScrollView,KeyboardAvoidingView, Alert} from 'react-native';
import db from '../config';
import firebase from'firebase';

export default class HomeScreen extends Component{
    render(){
        return(
            <View>
                <Text>Home Screen</Text>
           </View>
            
        )
    }
}

const styles=StyleSheet.create({
    imageView:{
      flex: 0.85,
      justifyContent: "center",
      alignItems: "center",
      padding: 10
    },
    bpImage:{
      width: "70%",
      height: "100%",
      resizeMode: "stretch"
    },
    mainView:{
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center" 
    },
    mainImage:{
        width: "70%",
        height: "100%",
        resizeMode: "stretch"
    }
})