import React,
{
  useMemo,
  useState,
  useEffect
}
  from 'react';
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
import { CarDataContext } from './src/context/CarDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { OrderDataContext } from './src/context/OrderDataContext';
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
  //array of object for the attraction data
  const [data, setData] = useState(undefined)
  const dataValue = useMemo(() => ({ data, setData }), [data, setData])
  //array of object for the car data  
  const [carData, setCarData] = useState(null);
  const carDataValue = useMemo(() => ({ carData, setCarData }), [carData, setCarData])
  //array of object for the car data  
  const [orderData, setOrderData] = useState(null);
  const orderDataValue = useMemo(() => ({ orderData, setOrderData }), [orderData, setOrderData])


  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const userValue = await AsyncStorage.getItem('user');
      const userData = JSON.parse(userValue)
      const ordersValue = await AsyncStorage.getItem('orders')
      const ordersData = JSON.parse(ordersValue)
      console.log("user", JSON.stringify(userData, null, 4))
      console.log("orders", JSON.stringify(ordersData, null, 4))
      if (userData != null) {
        setUser(userData)
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <SafeAreaView style={styles.root}>
      <OrderDataContext.Provider value={orderDataValue}>
        <CarDataContext.Provider value={carDataValue}>
          <DataContext.Provider value={dataValue}>
            <StartDateContext.Provider value={startDateValue}>
              <EndDateContext.Provider value={endDateValue}>
                <UserContext.Provider value={value}>
                  <Navigation />
                </UserContext.Provider>
              </EndDateContext.Provider>
            </StartDateContext.Provider>
          </DataContext.Provider>
        </CarDataContext.Provider>
      </OrderDataContext.Provider>
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
