import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Clouds } from './Components/Clouds';

import { HomeScreen } from './Components/HomeScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Home"
          component={ HomeScreen } 
          options={{ title: '' }}
        />
        <Stack.Screen 
        name="Clouds" 
        options={{ title: ' ' }}
        component={ Clouds } />

       
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(250,224,245)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    margin: 20,
    padding: 5

  },
  textBox: {
    backgroundColor: 'rgb(250,250,250)',  
    height: 200, 
    width: 350, 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 10,
    padding: 5 }
  }
);
