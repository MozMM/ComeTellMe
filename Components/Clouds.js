import React, { useState, useEffect } from 'react';
import { StyleSheet, Animated, Text, View, Dimensions, ImageBackground } from 'react-native';
import Draggable from 'react-native-draggable';

// import * as Svg from 'react-native-svg';
// const { Defs, TextPath, LinearGradient, Ellipse, Stop } = Svg;

import { splitWordSets, checkForAngryWords } from '../utils/wordUtils'
import { Balloons } from './Balloons'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export function Clouds({ route }) {

 // State variable for conditional render
  const [isAngry, changeStateAngry] = useState(false)
  
 // Parse the input words.
  const { theWords } = route.params
  const fullString = JSON.stringify(theWords).slice(1, JSON.stringify(theWords).length -1)
  const fullArr = fullString.split(' ')

  // Check Input for angry words 
  const checkedAngry = fullArr.some(checkForAngryWords)
  
  // toggles state variable for conditinal render.
  useEffect(() => {
    changeStateAngry(checkedAngry)
  }, [checkedAngry])

  // Split up Input for each component in Render.
  const wordsSplit = splitWordSets(fullArr)

  // Cloud Y axis on State 
  const [currentOneY, changeStateOneY] = useState(190);
  const [currentTwoY, changeStateTwoY] = useState(170);
  const [currentThreeY, changeStateThreeY] = useState(240);

 
  // Cloud ONE
  function handleCloudOneRelease(event, gestureState, bounds) {
    console.log("cloud 1.")
    let currentY = gestureState.moveY;
      if (currentY <= 125) {
        changeStateOneY(-200)
      }
  }

  // Cloud TWO
  function handleCloudTwoRelease(event, gestureState, bounds) {
    console.log("cloud 2.")
    let currentY = gestureState.moveY;
      if (currentY <= 125) {
        changeStateTwoY(-200)
      }
  }
  
  //Cloud THREE
  function handleCloudThreeRelease(event, gestureState, bounds) {
    console.log("cloud 3.")
    let currentY = gestureState.moveY;
      if (currentY <= 125) {
        changeStateThreeY(-200)
      }
  }
  
  

  return ( 
    <View>
      {isAngry && <Balloons fullString={fullString}/>}
      <View style={styles.sky}>
        {isAngry ? null : 
        <View>
          <View style={styles.byeTextWrapper} >
            <Text style={styles.byeText}> ( <Text style={styles.italics}> bye </Text> ⬆ )</Text>
          </View>
          <Draggable
          x={20} y={currentOneY} z={1}
          renderSize={90}
          // maxX={-50}
          minX={-80}
          touchableOpacityProps={{activeOpacity: 1}}
          maxX={screenWidth + 100}
          maxY={screenHeight}
          onDragRelease={handleCloudOneRelease}
          >
            <View style={styles.imageWrapper}>
              <ImageBackground style={styles.image} source={require('../public/Cloud2.png')}>
                <View style={styles.cloudTextContainer}>
                  <Text style={styles.text}>
                  {wordsSplit.setOne}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </Draggable>
        
          <Draggable
          x={130} y={currentTwoY} z={3}
          renderSize={90}
          // maxX={-50}
          minX={-80}
          touchableOpacityProps={{activeOpacity: 1}}
          maxX={screenWidth + 100}
          maxY={screenHeight}
          onDragRelease={handleCloudTwoRelease}
          >
            <View style={styles.imageWrapper}>
              <ImageBackground style={styles.image} source={require('../public/Cloud2.png')}>
              <View style={styles.cloudTextContainer}>
                <Text style={styles.text}>
                  {wordsSplit.setTwo}
                </Text>
              </View>
              </ImageBackground>
            </View>
          </Draggable>
        
          <Draggable
          x={90} y={currentThreeY} z={2}
          renderSize={90}
          // maxX={-50}
          minX={-80}
          touchableOpacityProps={{activeOpacity: 1}}
          maxX={screenWidth + 100}
          maxY={screenHeight}
          onDragRelease={handleCloudThreeRelease}
          >
            <View style={styles.imageWrapper}>
              <ImageBackground style={styles.image} source={require('../public/Cloud2.png')}>
                <View style={styles.cloudTextContainer}>
                <Text style={styles.text}>
                  {wordsSplit.setThree}
                </Text>
                </View>
              </ImageBackground>
            </View>
          </Draggable> 
        </View> 
        }
      </View>
    </View>)
}

const styles = StyleSheet.create({
  sky: {
    backgroundColor: 'rgb(185,225,239)',
    width: screenWidth,
    height: screenHeight
  },
  cloudTextContainer: {
    flex: 1,
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    margin: 10, 
  },
  text: {
    color:'rgb(100,125,155)',
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    padding: 10,
  },
  image: {
    width: 210,
    height: '100%',
    resizeMode: "cover",
    
    paddingBottom: 60
  }, 
  imageWrapper: {
    height: 170,
    width: 250,
    overflow: "visible" 
},
byeTextWrapper:{
  alignContent:'center',
  justifyContent: 'center',
},
byeText: {
  color: 'rgb(253,252,250)',
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
  padding: 28
},
italics: {
  color: 'rgb(253,252,250)',
  fontSize: 24,
  fontStyle:'italic',
  textAlign: 'center',
  padding: 28
},
});