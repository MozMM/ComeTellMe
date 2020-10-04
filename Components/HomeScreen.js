import React, { useState }  from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

// import { Clouds } from './Clouds';

export function HomeScreen( { navigation }) {
  
  const [text, changeStateText] = useState('      ');

  const handlePress = () => {
  navigation.navigate("Clouds", { theWords: text })
  changeStateText() 
  }

  return ( 

     <View style={styles.container}>
      <Text style={styles.text}>come tell me</Text>
        <TextInput
        multiline
        maxLength={120}
        style={styles.textBox}
        onChangeText={text => changeStateText(text)}
        // onSubmitEditing={({ nativeEvent }) => }
        value={text}
      />
      <TouchableOpacity
      
      style={styles.button}
      onPress={handlePress}
        >
        <Text style={styles.buttonText}>go-ify</Text>
      </TouchableOpacity>
    </View> 

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(235,230,265)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rgb(160,160,215)', // 'rgb(220,220,250)'
    padding: 10,
    paddingHorizontal: 14,
    margin: 15,
    borderRadius: 10,
    borderColor: 'gray', 
    borderWidth: 1,
    
  },
  buttonText: {
    color: 'rgb(253,252,250)',
    fontSize: 20
  },
  text: {
    fontSize: 40,
    margin: 20,
    padding: 5

  },
  textBox: {
    backgroundColor: 'rgb(253,252,250)',  
    height: 100, 
    width: 300, 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    padding: 5 }
  }
);


