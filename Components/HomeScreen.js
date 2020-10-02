import React, { useState }  from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

// import { Clouds } from './Clouds';

export function HomeScreen( { navigation }) {
  
  const [text, changeStateText] = useState();

  // function test(paramText) {
  //   console.log('TEST FUNC RAN')
  //   console.log(paramText)
  // }

  const handlePress = () => {
  navigation.navigate("Clouds", { theWords: text })
  changeStateText() 
  // clear() ??
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
        <Text>cloudify</Text>
      </TouchableOpacity>
    </View> 

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(250,224,245)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rgb(150,140,165)',
    //color: 'rgb(150,140,165)', 
    padding: 10,
    paddingHorizontal: 14,
    margin: 15,
    borderRadius: 10
  },
  text: {
    fontSize: 40,
    margin: 20,
    padding: 5

  },
  textBox: {
    backgroundColor: 'rgb(250,250,250)',  
    height: 100, 
    width: 350, 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    padding: 5 }
  }
);


