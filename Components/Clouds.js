import React, { useState, useEffect } from 'react';
import { StyleSheet, Animated, Text, View, Dimensions, ImageBackground } from 'react-native';
import Draggable from 'react-native-draggable'

import { Balloons } from './Balloons'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const angryWords = ['mad', 'frustrated', 'unfair', 'angry', 'red', 'kill', 'murder']

export function Clouds({ route }) {

 // State variable for conditional render
  const [isAngry, changeStateAngry] = useState(false)
  
 // Parse the input words.
  const {theWords} = route.params
  const fullString = JSON.stringify(theWords).slice(1, JSON.stringify(theWords).length -1)
  const fullArr = fullString.split(' ')

  // check Input for angry words  
  const checkedAngry = fullArr.some(checkForAngryWords)
  function checkForAngryWords(word) {
    return angryWords.includes(word.toLowerCase())
  }

  // UseEffect prevents crazy dependency loop. useEffect only runs when [dependency] changes (??)
  useEffect(() => {
    console.log(checkedAngry)
    changeStateAngry(checkedAngry)
  }, [checkedAngry])

  // Split up Input for each component in Render.
  const numWords = fullArr.length
  const setOne = fullArr.slice(0, Math.floor(numWords * .39)).join(' ')
  const setTwo = fullArr.slice(Math.floor(numWords * .39), Math.floor(numWords * .70)).join(' ')
  const setThree = fullArr.slice(Math.floor(numWords * .70), fullArr.length).join(' ')

  // Cloud Y axis on State 
  const [currentOneY, changeStateOneY] = useState(190);
  const [currentTwoY, changeStateTwoY] = useState(170);
  const [currentThreeY, changeStateThreeY] = useState(240);

 
  // Cloud ONE
  function handleCloudOneRelease(event, gestureState, bounds) {
    let currentY = gestureState.moveY;
      if (currentY <= 125) {
        changeStateOneY(-200)
      console.log("Sucess, bye cloud one.")
      }
  }

  // Cloud TWO
  function handleCloudTwoRelease(event, gestureState, bounds) {
    let currentY = gestureState.moveY;
      if (currentY <= 125) {
        changeStateTwoY(-200)
      console.log("Sucess, bye cloud two.")
      }
  }
  
  //Cloud THREE
  function handleCloudThreeRelease(event, gestureState, bounds) {
    let currentY = gestureState.moveY;
      if (currentY <= 125) {
        changeStateThreeY(-200)
      console.log("Sucess, bye cloud three.")
      }
  }
  
  

  return ( 
   
    <View>
      <View style={styles.sky}>
        {isAngry && <Balloons fullString={fullString}/>}
        {isAngry ? null : <View>

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
        
          <Draggable
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
        </View> 
        }
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
    overflow: "visible" //"hidden"
},
  
});


//// Example for imageBackground:
{/* <View style={styles.imageWrapper}>
     <ImageBackground style={styles.theImage} source={{uri : item.imageUrl}}>
          <Text>Hey</Text>
     </ImageBackground>
</View>

const styles = StyleSheet.create({
    imageWrapper: {
        height: 200,
        width: 200,
        overflow : "hidden"
    },
    theImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    }
}) */}

//Gives info on native events
 //   onLayout={(event) => {
            //   var {x, y, width, height} = event.nativeEvent.layout;
            //   console.log(x, y, width, height)
            // }}