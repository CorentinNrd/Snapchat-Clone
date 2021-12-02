import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen/HomeScreen';
import RegisterForm from './src/components/Inscription/Inscription';
import LoginForm from './src/components/Connexion/Connexion';
import CameraForm from './src/components/Camera/Camera';
import Profil from './src/components/Profil/Profil';
import Contact from './src/components/Contact/Contact'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Inscription"
          component={RegisterForm}
        />
        <Stack.Screen
          name="Connexion"
          component={LoginForm}
        />
        <Stack.Screen
          name="Camera"
          component={CameraForm}
        />
        <Stack.Screen
          name="Profil"
          component={Profil}
        />
          <Stack.Screen
            name="Contact"
            component={Contact}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;
