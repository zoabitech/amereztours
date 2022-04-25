import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CarPost from './src/components/CarPost/CarPost';
import OrderPost from './src/components/OrderPost/OrderPost';
import Navigation from './src/navigation';
import HomeTabNavigation from './src/navigation/HomeTabNavigation';
import TabNavigation from './src/navigation/HomeTabNavigation';
const App = () => {

  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
      {/* <OrderPost /> */}
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
