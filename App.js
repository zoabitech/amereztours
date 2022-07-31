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
import { DataContext } from './src/context/DataContext';
const App = () => {
  //setting the user to null at the first run of the app
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  //genrate the start date as default from moment the date will be the op date
  const [startDate, setStartDate] = useState(moment(startDate));
  const startDateValue = useMemo(() => ({ startDate, setStartDate }), [startDate, setStartDate]);
  //genrate the end date as default from moment the date will be the op date
  const [endDate, setEndDate] = useState(moment(endDate));
  const endDateValue = useMemo(() => ({ endDate, setEndDate }), [endDate, setEndDate]);

  const [data, setData] = useState(null)
  const dataValue = useMemo(() => ({ data, setData }), [data, setData])

  return (
    <SafeAreaView style={styles.root}>
      <DataContext.Provider value={dataValue}>
        <StartDateContext.Provider value={startDateValue}>
          <EndDateContext.Provider value={endDateValue}>
            <UserContext.Provider value={value}>
              <Navigation />
            </UserContext.Provider>
          </EndDateContext.Provider>
        </StartDateContext.Provider>
      </DataContext.Provider>
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
