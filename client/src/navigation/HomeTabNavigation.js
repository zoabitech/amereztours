import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OrderScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LikedScreen from '../screens/LikedScreen';
//icons imports
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import TopTabNavigator from './TopTabNavigator';
import {UserContext} from '../context/UserContext';
import {OrderDataContext} from '../context/OrderDataContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL =
  Platform.OS === 'android' ? 'http://10.0.0.1:3001' : 'http://localhost:5000';
const Tab = createBottomTabNavigator();

const HomeTabNavigation = props => {
  const {user} = useContext(UserContext);
  const {orderData, setOrderData} = useContext(OrderDataContext);

  const setData = async orders => {
    try {
      await AsyncStorage.setItem('orders', JSON.stringify({orders}));
    } catch (error) {
      console.log(error);
    }
  };
  const getAllOrders = async () => {
    //fucntion that get all the order of the spicefic user
    let usId;
    if (user.id !== undefined) usId = user.id;
    else usId = user.user.id;
    const payload = {
      id: usId,
    };
    fetch(`${API_URL}/fetchOrder`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async res => {
        try {
          const jsonRes = await res.json();
          if (res.status !== 200) {
            alert(jsonRes.message);
            return;
          } else {
            setOrderData(jsonRes);
            setData(jsonRes);
          }
        } catch (err) {
          console.log(err.message);
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#005B99',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          borderTopWidth: 0.5,
          borderTopColor: 'gray',
          fontWeight: '1000',
          zIndex: 100,
        },
      }}>
      <Tab.Screen
        name={'Search'}
        component={TopTabNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto
              name="search"
              size={25}
              color={color}
              fontWeight={'100'}
            />
          ),
        }}
      />

      <Tab.Screen
        name={'Liked'}
        component={LikedScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={'Orders'}
        component={OrderScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="briefcase" size={25} color={color} />
          ),
        }}
        listeners={{
          tabPress: () => {
            if (user !== null) getAllOrders();
          },
        }}
      />

      <Tab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="person" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeTabNavigation;
