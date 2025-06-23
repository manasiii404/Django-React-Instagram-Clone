// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import Store from './src/redux/Store';
import Navigation from './src/screens/Navigation';

export default function App() {
  // Required to initialize EStyleSheet styles
  EStyleSheet.build();

  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
}
