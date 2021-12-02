import React, { useState, useEffect, useRef } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Snap from '../../assets/snapchat.png'
import getToken from '../GetToken/GetToken';

function HomeScreen(props) {

    return (
      <View style={styles.container}>
        <Image source={Snap} style={styles.tinyLogo}/>
  
        <View style={styles.Cont}>
          <TouchableOpacity style={styles.button} onPress={() =>
            props.navigation.navigate('Inscription')
          }>
            <Text style={styles.btntext}>Sign Up</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.buttonLogin} onPress={() =>
            props.navigation.navigate('Connexion')
          }>
            <Text style={styles.btntext}>Sign In</Text>
          </TouchableOpacity>
  
        </View>
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffc00',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    width: "100%",
  },
  Cont: {
    marginTop: 300
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#9f5ccc',
    width: 400,
    height: 100,
    top: 70
  },
  btntext: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 27,
  },
  buttonLogin: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'red',
    width: 400,
    height: 100,
    top: 70
  },
  tinyLogo: {
    width: 100,
    height: 100,
  }
});

export default HomeScreen;