//REACT AND REACT NATIVE IMPORTS
import React, {useMemo, useState, useEffect} from 'react';
import moment from 'moment';
import {SafeAreaView} from 'react-native';
import Navigation from './src/navigation';
//CONTEXT IMPORTS
import {UserContext} from './src/context/UserContext';
import {StartDateContext} from './src/context/StartDateContext';
import {EndDateContext} from './src/context/EndDateContext';
import {AttractionDataContext} from './src/context/AttractionDataContext';
import {CarDataContext} from './src/context/CarDataContext';
import {OrderDataContext} from './src/context/OrderDataContext';
import {LikedDataContext} from './src/context/LikedDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  //setting the user to null at the first run of the app
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({user, setUser}), [user, setUser]);
  //genrate the start date as default from moment the date will be the op date
  const [startDate, setStartDate] = useState(moment(startDate));
  const startDateValue = useMemo(
    () => ({startDate, setStartDate}),
    [startDate, setStartDate],
  );
  //genrate the end date as default from moment the date will be the op date
  const [endDate, setEndDate] = useState(moment(endDate));
  const endDateValue = useMemo(
    () => ({endDate, setEndDate}),
    [endDate, setEndDate],
  );
  //array of object for the attraction data
  const [attractionData, setAttractionData] = useState(undefined);
  const dataValue = useMemo(
    () => ({attractionData, setAttractionData}),
    [attractionData, setAttractionData],
  );
  //array of object for the car data
  const [carData, setCarData] = useState(undefined);
  const carDataValue = useMemo(
    () => ({carData, setCarData}),
    [carData, setCarData],
  );
  //array of object for the car data
  const [orderData, setOrderData] = useState(null);
  const orderDataValue = useMemo(
    () => ({orderData, setOrderData}),
    [orderData, setOrderData],
  );

  const [likedData, setLikedData] = useState([]);
  const likedDataValue = useMemo(
    () => ({likedData, setLikedData}),
    [likedData, setLikedData],
  );

  useEffect(() => {
    //useeffect that get the from the asyncstroge every time the app rerender
    getData();
  }, []);

  const getData = async () => {
    try {
      const userValue = await AsyncStorage.getItem('user');
      const userData = JSON.parse(userValue);
      const ordersValue = await AsyncStorage.getItem('orders');
      const ordersData = JSON.parse(ordersValue);
      const likedValue = await AsyncStorage.getItem('likedD');
      const likedDataValue = JSON.parse(likedValue);
      if (likedDataValue !== null) {
        setLikedData(likedDataValue);
      }
      if (userData !== null) {
        setUser(userData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F9FBFC',
      }}>
      <LikedDataContext.Provider value={likedDataValue}>
        <OrderDataContext.Provider value={orderDataValue}>
          <CarDataContext.Provider value={carDataValue}>
            <AttractionDataContext.Provider value={dataValue}>
              <StartDateContext.Provider value={startDateValue}>
                <EndDateContext.Provider value={endDateValue}>
                  <UserContext.Provider value={value}>
                    <Navigation />
                  </UserContext.Provider>
                </EndDateContext.Provider>
              </StartDateContext.Provider>
            </AttractionDataContext.Provider>
          </CarDataContext.Provider>
        </OrderDataContext.Provider>
      </LikedDataContext.Provider>
    </SafeAreaView>
  );
};
export default App;
