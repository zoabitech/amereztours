import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CarPost from './src/components/CarPost/CarPost';
import Navigation from './src/navigation';
import TabNavigation from './src/navigation/HomeTabNavigation';
const App = () => {

  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
      {/* <TabNavigation /> */}
      {/* <CarPost/> */}
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  }
});

export default App;
