// import React, { Component } from 'react';
// import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';
// import {
//   FlingGestureHandler,
//   Directions,
//   State,
// } from 'react-native-gesture-handler';

// //const State = {
// //   UNDETERMINED: 0,
// //   FAILED: 1,
// //   BEGAN: 2,
// //   CANCELLED: 3,
// //   ACTIVE: 4,
// //   END: 5,
// // };

// // State.print = state => {
// //   const keys = Object.keys(State);
// //   for (let i = 0; i < keys.length; i++) {
// //     if (state === State[keys[i]]) {
// //       return keys[i];
// //     }
// //   }
// // };

// import { USE_NATIVE_DRIVER } from '../metro.config';

// const windowWidth = Dimensions.get('window').width;
// const circleRadius = 30;

// class Fling extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       _touchX: new Animated.Value(windowWidth / 2 - circleRadius),
//       _translateX: Animated.add(
//         this._touchX,
//         new Animated.Value(-circleRadius)
//       ),
//       _translateY: new Animated.Value(0)
//     }
//     // this._touchX = new Animated.Value(windowWidth / 2 - circleRadius);
//     // this._translateX = Animated.add(
//     //   this._touchX,
//     //   new Animated.Value(-circleRadius)
//     // );
//     // this._translateY = new Animated.Value(0);
//   }

//   _onHorizontalFlingHandlerStateChange = ({ nativeEvent }, offset) => {
//     if (nativeEvent.oldState === State.ACTIVE) {
//       console.log('Fired HorizontalHandler')
//       console.log(nativeEvent);
//       Animated.spring(this.state._translateX, {
//         toValue: this.state._translateX._value + offset,
//         useNativeDriver: USE_NATIVE_DRIVER,
//       }).start();
//     }
//   };

//   _onVerticalFlingHandlerStateChange = ({ nativeEvent }) => {
//     if (nativeEvent.oldState === State.ACTIVE) {
//       Animated.spring(this.state._translateY, {
//         toValue: this.state._translateY._value + 10,
//         useNativeDriver: USE_NATIVE_DRIVER,
//       }).start();
//     }
//   };

//   render() {
//     console.log('->>>>', this._touchX);
//     console.log('|||', this._translateY);
//     return (
//       <FlingGestureHandler
//         direction={Directions.UP}
//         numberOfPointers={2}
//         onHandlerStateChange={this._onVerticalFlingHandlerStateChange}>
//         <FlingGestureHandler
//           direction={Directions.RIGHT | Directions.LEFT}
//           onHandlerStateChange={ev =>
//             this._onHorizontalFlingHandlerStateChange(ev, -10)
//           }>
//           <View style={styles.horizontalPan}>
//             <Animated.View
//               style={[
//                 styles.circle,
//                 {
//                   transform: [
//                     {
//                       translateX: this.state._translateX,
//                     },
//                     {
//                       translateY: this.state._translateY,
//                     },
//                   ],
//                 },
//               ]}
//             />
//           </View>
//         </FlingGestureHandler>
//       </FlingGestureHandler>
//     );
//   }
// }

// export default class Example extends Component {
 
//   render() {
//     return (
//       <View>
//         <Fling />
//         <Text>
//           Move up (with two fingers) or right/left (with one finger) and watch
//           magic happens
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   horizontalPan: {
//     backgroundColor: '#f76f41',
//     height: 300,
//     justifyContent: 'center',
//     marginVertical: 10,
//   },
//   circle: {
//     backgroundColor: 'rgb(220, 240, 200)',
//     borderRadius: circleRadius,
//     height: circleRadius * 2,
//     width: circleRadius * 2,
//   },
// });