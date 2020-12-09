import 'react-native';
import React from 'react';
import App from '../App';

jest.mock('react-native', () => {
  const reactiNative = require.requireActual('react-native')
  const Platform = reactiNative.Platform;
  Platform.OS = 'android';
  return {
    ...reactiNative,
    ...Platform
  }
});


it('renders correctly', () => {
  renderer.create(<App />);
}, async () => {});

