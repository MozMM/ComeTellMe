import React, { useState } from 'react';
import { StyleSheet, Animated, Text, View, Dimensions, ImageBackground, Image } from 'react-native';
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
    console.log('1 X:', currentX, 'vs', (screenWidth - 185), 'Y:', currentY, 'vs', (screenHeight- 160))
      if (currentX >= screenWidth - 165 && currentY >= screenHeight - 155) {
        changeStateOneX(-600)
      console.log("Sucess, POP Balloon 1.")
      }
  }

  // Balloon TWO
  function handleBalloonTwoRelease(event, gestureState, bounds) {
    let currentX = gestureState.moveX;
    let currentY = gestureState.moveY;
    console.log('2 X:', currentX, 'vs', (screenWidth - 190), 'Y:', currentY, 'vs', (screenHeight- 160))
    if (currentX >= screenWidth - 160 && currentY >= screenHeight - 155) {
      changeStateTwoX(-600)
    console.log("Sucess, POP Balloon 2.")
    }
  }
  
  //Balloon THREE
  function handleBalloonThreeRelease(event, gestureState, bounds) {
    let currentX = gestureState.moveX;
    let currentY = gestureState.moveY;
    console.log('3 X:', currentX, 'vs', (screenWidth - 190), 'Y:', currentY, 'vs', (screenHeight- 160))
    if (currentX >= screenWidth - 155 && currentY >= screenHeight - 160) {
      changeStateThreeX(-600)
    console.log("Sucess, POP Balloon 3.")
    }
  }
  
  

  return ( 
    <View style={styles.baloonBackround}>
     
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
              <ImageBackground style={styles.image} source={require('../public/Balloon2.png')}>
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
                <View style={styles.BalloonTextContainer}>
                  <Text style={styles.text}>
                    {setTwo}
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
          maxX={screenWidth + 100}
          maxY={screenHeight}
          onDragRelease={handleBalloonThreeRelease}
          >
            <View style={styles.imageWrapper}>
              <ImageBackground style={styles.image} source={require('../public/Balloon1.png')}>
                <View style={styles.BalloonTextContainer}>
                  <Text style={styles.text}>
                    {setThree}
                  </Text>
                </View>
              </ImageBackground>
            </View>
          </Draggable>
         
      </View>
      <View style={styles.fakeTack}>
        <Image style={styles.tack} source={require('../public/blueTack.png')}/>
        {/* <Text style={styles.tackText}>(TACK)</Text> */}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // sky: {
  //   backgroundColor: 'rgb(190,220,235)',
  //   width: screenWidth,
  //   height: screenHeight
  // },
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
    // borderColor: 'gray', 
    // borderWidth: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    fontVariant: ['small-caps'],
    alignContent:'center',
    // textAlignVertical: 'top',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    color: 'rgb(190,250,190)',
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
    height: 240,
    resizeMode: "cover",
    padding: 20
  }, 
  balloonImage3: {
    width: '100%',
    height: 240,
    resizeMode: "cover",
    padding: 20

  },
  imageWrapper3: {
    height: 200,
    width: 230,
    overflow: "visible", // vs "hidden"
    padding: 10
},
  imageWrapper: {
    height: 240,
    width: 230,
    overflow: "visible" // vs "hidden"
},
  tack: {
    // backgroundColor: 'rgb(250,100,90)',
    height: 60,
    width: 60,
    top: screenHeight - 150,
    start: screenWidth - 70
},
tackText: {
padding: 8
}
});