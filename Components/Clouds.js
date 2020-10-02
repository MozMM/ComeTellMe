import React from 'react';
import { StyleSheet, Animated, Text, View, Dimensions } from 'react-native';
import Draggable from 'react-native-draggable'
// import { styles } from '../App'

export function Clouds( {route, navigation}) {
  
  const {theWords} = route.params
  return ( 
    <Draggable
    x={75} y={100}
    
    >
        <Text style={styles.text}>{JSON.stringify(theWords)}</Text>
    </Draggable>
  )
}

const styles = StyleSheet.create({
  cloudTextContainer: {
    flex: 1,
    flexShrink: 1,
    backgroundColor: 'rgb(250,250,250)',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius: 20,
    margin: 10, 
  },
  text: {
    fontSize: 12,
    margin: 20,
    padding: 10,
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius: 20,
  },
  textBox: {
    backgroundColor: 'rgb(250,250,250)',  
    height: 100, 
    width: 350, 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 10,
    padding: 5 
  }
  
});

