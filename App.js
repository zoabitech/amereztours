import React, { useMemo, useState } from 'react';
import moment from 'moment'
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Navigation from './src/navigation';
import { UserContext } from "./src/context/UserContext";
import { StartDateContext } from './src/context/StartDateContext';
import { EndDateContext } from './src/context/EndDateContext';
const App = () => {
  //setting the user to null at the first run of the app
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  //genrate the start date as default from moment the date will be the op date
  const [startDate, setStartDate] = useState(moment(startDate).add(3, 'h'));
  const startDateValue = useMemo(() => ({ startDate, setStartDate }), [startDate, setStartDate]);
  //genrate the end date as default from moment the date will be the op date
  const [endDate, setEndDate] = useState(moment(endDate).add(3, 'h'));
  const endDateValue = useMemo(() => ({ endDate, setEndDate }), [endDate, setEndDate]);

  return (
    <SafeAreaView style={styles.root}>
      <StartDateContext.Provider value={startDateValue}>
        <EndDateContext.Provider value={endDateValue}>
          <UserContext.Provider value={value}>
            <Navigation />
          </UserContext.Provider>
        </EndDateContext.Provider>
      </StartDateContext.Provider>
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
