// import App from './src/index'

// export default App;

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
      <WebView 
        style={styles.container}
        source={{ uri: 'http://rd-pc-ty:8500/signin.html' }}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8
  },
});
