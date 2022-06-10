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
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  const [startDate, setStartDate] = useState(moment(startDate));
  const startDateValue = useMemo(() => ({ startDate, setStartDate }), [startDate, setStartDate]);

  const [endDate, setEndDate] = useState(moment());
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
