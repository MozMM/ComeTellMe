import React, { useState } from 'react';
import { StyleSheet, Animated, Text, View, Dimensions, ImageBackground } from 'react-native';
import Draggable from 'react-native-draggable'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function Balloons(props, { route }) {

  const fullArr = props.fullString.split(' ')


  //// Split up input for each component.
  const numWords = fullArr.length
  const setOne = fullArr.slice(0, Math.floor(numWords * .33)).join(' ')
  const setTwo = fullArr.slice(Math.floor(numWords * .33), Math.floor(numWords * .70)).join(' ')
  const setThree = fullArr.slice(Math.floor(numWords * .70), fullArr.length).join(' ')

 
  // Balloon Y axis on State //
  const [currentOneY, changeStateOneY] = useState(190);
  const [currentTwoY, changeStateTwoY] = useState(170);
  const [currentThreeY, changeStateThreeY] = useState(240);

 
  // Balloon ONE
  function handleCloudOneRelease(event, gestureState, bounds) {
    
    let currentY = gestureState.moveY;
      if (currentY <= 125) {
        changeStateOneY(-200)
      console.log(passOn, "Sucess, bye Balloon one.")
      }
  }

  // Balloon TWO
  function handleCloudTwoRelease(event, gestureState, bounds) {
    let currentY = gestureState.moveY;
      if (currentY <= 125) {
        changeStateTwoY(-200)
      console.log("Sucess, bye cloud two.")
      }
  }
  
  //Balloon THREE
  function handleCloudThreeRelease(event, gestureState, bounds) {
    let currentY = gestureState.moveY;
      if (currentY <= 125) {
        changeStateThreeY(-200)
      console.log("Sucess, bye cloud three.")
      }
  }
  
  

  return ( 
    <View>
     
        <View>

          <Draggable
          x={20} y={currentOneY} z={1}
          renderSize={90}
          // maxX={-50}
          minX={-80}
          maxX={screenWidth + 100}
          maxY={screenHeight}
          onDragRelease={handleCloudOneRelease}
          >
            <View style={styles.imageWrapper}>
              <ImageBackground style={styles.image} source={require('../public/cloud1.png')}>
            
                <Text style={styles.text}>
                  {setOne}
                </Text>
              </ImageBackground>
            </View>
          </Draggable>
        
          {/* <Draggable
          x={130} y={currentTwoY} z={3}
          renderSize={90}
          // maxX={-50}
          minX={-80}
          maxX={screenWidth + 100}
          maxY={screenHeight}
          onDragRelease={handleCloudTwoRelease}
          >
            <View style={styles.imageWrapper}>
              <ImageBackground style={styles.image} source={require('../public/cloud1.png')}>
            
                <Text style={styles.text}>
                  {setTwo}
                </Text>
              </ImageBackground>
            </View>
          </Draggable>
        
          <Draggable
          x={90} y={currentThreeY} z={2}
          renderSize={90}
          // maxX={-50}
          minX={-80}
          maxX={screenWidth + 100}
          maxY={screenHeight}
          onDragRelease={handleCloudThreeRelease}
          >
            <View style={styles.imageWrapper}>
              <ImageBackground style={styles.image} source={require('../public/cloud1.png')}>
            
                <Text style={styles.text}>
                  {setThree}
                </Text>
              </ImageBackground>
            </View>
          </Draggable> 
         
         */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sky: {
    backgroundColor: 'rgb(190,220,235)',
    width: screenWidth,
    height: screenHeight
  },
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
    fontSize: 16,
    alignContent:'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
   
  },
  textBox: {
    backgroundColor: 'rgb(250,250,250)',  
    height: 100, 
    width: 350, 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 10,
    padding: 5 
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: "cover",
    padding: 20
  }, 
  imageWrapper: {
    height: 150,
    width: 250,
    overflow: "hidden"
},
  
});