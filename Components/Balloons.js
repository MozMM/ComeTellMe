import React, { useState } from 'react';
import { StyleSheet, Animated, Text, View, Dimensions, ImageBackground } from 'react-native';
import Draggable from 'react-native-draggable'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function Balloons(props, { route }) {

  const fullArr = props.fullString.split(' ')

  //// Split up input for each component.
  const numWords = fullArr.length
  const setOne = fullArr.slice(0, Math.floor(numWords * .39)).join(' ')
  const setTwo = fullArr.slice(Math.floor(numWords * .39), Math.floor(numWords * .70)).join(' ')
  const setThree = fullArr.slice(Math.floor(numWords * .70), fullArr.length).join(' ')

 
  // Balloon X axis on State //
  const [currentOneX, changeStateOneX] = useState(30);
  const [currentTwoX, changeStateTwoX] = useState(90);
  const [currentThreeX, changeStateThreeX] = useState(120);

 
  // Balloon ONE
  function handleBalloonOneRelease(event, gestureState, bounds) {
    let currentX = gestureState.moveX;
    let currentY = gestureState.moveY;

    //console.log('X:', currentX, 'vs', screenWidth, 'Y:', currentY, 'vs', screenHeight)
      if (currentX >= screenWidth - 180 && currentY >= screenHeight - 119) {
        changeStateOneX(-600)
      console.log("Sucess, POP Balloon 1.")
      }
  }

  // Balloon TWO
  function handleBalloonTwoRelease(event, gestureState, bounds) {
    let currentX = gestureState.moveX;
    let currentY = gestureState.moveY;
    if (currentX >= screenWidth - 180 && currentY >= screenHeight - 119) {
      changeStateTwoX(-600)
    console.log("Sucess, POP Balloon 2.")
    }
  }
  
  //Balloon THREE
  function handleBalloonThreeRelease(event, gestureState, bounds) {
    let currentX = gestureState.moveX;
    let currentY = gestureState.moveY;
    if (currentX >= screenWidth - 180 && currentY >= screenHeight - 119) {
      changeStateThreeX(-600)
    console.log("Sucess, POP Balloon 3.")
    }
  }
  
  

  return ( 
    <View>
     
        <View>

          <Draggable
          x={currentOneX} y={160} z={1}
          renderSize={20}
          minX={-80}
          minY={-20}
          maxX={screenWidth + 100}
          maxY={screenHeight}
          onDragRelease={handleBalloonOneRelease}
          >
            <View style={styles.imageWrapper}>
              <ImageBackground style={styles.image} source={require('../public/Balloon3.png')}>
                <View style={styles.BalloonTextContainer}>
                <Text style={styles.text}>
                  {setOne}
                </Text>
                </View>
              </ImageBackground>
            </View>
          </Draggable>
        
          <Draggable
          x={currentTwoX} y={75} z={1}
          renderSize={20}
          // maxX={-50}
          minX={-80}
          minY={-20}
          maxX={screenWidth + 100}
          maxY={screenHeight}
          onDragRelease={handleBalloonTwoRelease}
          >
            <View style={styles.imageWrapper}>
              <ImageBackground style={styles.image} source={require('../public/Balloon2.png')}>
            
                <Text style={styles.text}>
                  {setTwo}
                </Text>
              </ImageBackground>
            </View>
          </Draggable>
          <Draggable
          x={currentThreeX} y={140} z={1}
          renderSize={20}
          // maxX={-50}
          minX={-80}
          minY={-20}
          maxX={screenWidth + 100}
          maxY={screenHeight}
          onDragRelease={handleBalloonThreeRelease}
          >
            <View style={styles.imageWrapper}>
              <ImageBackground style={styles.image} source={require('../public/Balloon1.png')}>
            
                <Text style={styles.text}>
                  {setThree}
                </Text>
              </ImageBackground>
            </View>
          </Draggable>
         
      </View>
      <View style={styles.fakeTack}><Text style={styles.tackText}>(TACK)</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
  sky: {
    backgroundColor: 'rgb(190,220,235)',
    width: screenWidth,
    height: screenHeight
  },
  BalloonTextContainer: {
    flex: 1,
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 10, 
  },
  text: {
    fontSize: 16,
    alignContent:'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
   
  },
  // textBox: {
  //   backgroundColor: 'rgb(250,250,250)',  
  //   height: 100, 
  //   width: 350, 
  //   borderColor: 'gray', 
  //   borderWidth: 1,
  //   margin: 10,
  //   padding: 5 
  // },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: "cover",
    padding: 20
  }, 
  imageWrapper: {
    height: 300,
    width: 230,
    overflow: "visible" // vs "hidden"
},
  fakeTack: {
    backgroundColor: 'rgb(250,100,90)',
    height: 60,
    width: 60,
    top: screenHeight - 150,
    start: screenWidth - 70
},
tackText: {
padding: 8
}
});