import React, { useState } from 'react';
import { StyleSheet, Animated, Text, View, Dimensions, ImageBackground, Image } from 'react-native';
import Draggable from 'react-native-draggable';

// import * as Svg from 'react-native-svg';
// const { Defs, TextPath} = Svg;

import { splitWordSets } from '../utils/wordUtils'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function Balloons(props) {
  const fullArr = props.fullString.split(' ')

  // Split up Input for each component in Render.
  const wordsSplit = splitWordSets(fullArr)

 
  // Balloon X axis on State //
  const [currentOneX, changeStateOneX] = useState(40);
  const [currentTwoX, changeStateTwoX] = useState(90);
  const [currentThreeX, changeStateThreeX] = useState(175);

 
  // Balloon ONE
  function handleBalloonOneRelease(event, gestureState, bounds) {
    console.log("Balloon 1.")
    let currentX = gestureState.moveX;
    let currentY = gestureState.moveY;
      if (currentX >= screenWidth - 135 && currentY >= screenHeight - 155) {
        changeStateOneX(-600)
      }
  }

  // Balloon TWO
  function handleBalloonTwoRelease(event, gestureState, bounds) {
    console.log("Balloon 2.")
    let currentX = gestureState.moveX;
    let currentY = gestureState.moveY;
    if (currentX >= screenWidth - 150 && currentY >= screenHeight - 155) {
      changeStateTwoX(-600)
    }
  }
  
  //Balloon THREE
  function handleBalloonThreeRelease(event, gestureState, bounds) {
    console.log("Balloon 3.")
    let currentX = gestureState.moveX;
    let currentY = gestureState.moveY;
    if (currentX >= screenWidth - 155 && currentY >= screenHeight - 155) {
      changeStateThreeX(-600)
    }
  }
  
  return ( 
    <View style={styles.baloonBackround}>
      <View>
        <Draggable
        x={currentOneX} y={180} z={1}
        renderSize={20}
        minX={-80}
        minY={-20}
        maxX={screenWidth + 100}
        maxY={screenHeight}
        touchableOpacityProps={{activeOpacity: 1}}
        onDragRelease={handleBalloonOneRelease}
        >
          <View style={styles.imageWrapper1}>
            <ImageBackground style={styles.image} source={require('../public/Balloon2.png')}>
              <View style={styles.BalloonTextContainer}>
              <Text style={styles.text}>
                {wordsSplit.setOne}
              </Text>
              </View>
            </ImageBackground>
          </View>
        </Draggable>
      
        <Draggable
        x={currentTwoX} y={70} z={1}
        renderSize={20}
        // maxX={-50}
        minX={-80}
        minY={-20}
        touchableOpacityProps={{activeOpacity: 1}}
        maxX={screenWidth + 100}
        maxY={screenHeight}
        onDragRelease={handleBalloonTwoRelease}
        >
          <View style={styles.imageWrapper}>
            <ImageBackground style={styles.image} source={require('../public/Balloon3.png')}>
              <View style={styles.BalloonTextContainer}>
                <Text style={styles.text}>
                  {wordsSplit.setTwo}
                </Text>
                </View>
            </ImageBackground>
          </View>
        </Draggable>
        <Draggable
        x={currentThreeX} y={140} z={1}
        renderSize={20}
        // maxX={-50}
        minX={-80}
        minY={-20}
        touchableOpacityProps={{activeOpacity: 1}}
        maxX={screenWidth + 100}
        maxY={screenHeight}
        onDragRelease={handleBalloonThreeRelease}
        >
          <View style={styles.imageWrapper}>
            <ImageBackground style={styles.image} source={require('../public/Balloon1.png')}>
              <View style={styles.BalloonTextContainer}>
                <Text style={styles.text}>
                  {wordsSplit.setThree}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </Draggable>
        <View z={5} style={styles.fakeTack}>
          <Image style={styles.tack} source={require('../public/blueTack.png')}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  baloonBackround: {
    backgroundColor: 'rgb(255,255,225)',
    width: screenWidth,
    height: screenHeight
  },
  BalloonTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 650,
    height: 160,
    width: 170,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    fontVariant: ['small-caps'],
    textAlign: 'center',
    margin: 10,
    padding: 10,
    color: 'rgb(190,250,190)',
  },
  image: {
    width: '100%',
    height: 264,
    resizeMode: "cover",
    padding: 20
  }, 
  balloonImage3: {
    width: '100%',
    height: 240,
    resizeMode: "cover",
    padding: 20

  },
  imageWrapper1: {
    height: 240,
    width: 230,
    overflow: "visible", 
},
  imageWrapper: {
    height: 240,
    width: 240,
    overflow: "visible" 
},
  tack: {
    height: 60,
    width: 60,
    top: screenHeight - 150,
    start: screenWidth - 70,
    position: 'absolute',
    zIndex: 5,
    elevation: (Platform.OS === 'android') ? 50 : 0
    
},
tackText: {
padding: 8
}
});