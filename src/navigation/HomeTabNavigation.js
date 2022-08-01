import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrderScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LikedScreen from '../screens/LikedScreen'
//icons imports
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import TopTabNavigator from './TopTabNavigator';

const Tab = createBottomTabNavigator();

const HomeTabNavigation = (props) => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#005B99',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: { borderTopWidth: 0.5, borderTopColor: 'gray', fontWeight: '1000', zIndex: 100 }
            }}
        >
            <Tab.Screen
                name={"Search"}
                component={TopTabNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Fontisto name="search" size={25} color={color} fontWeight={'100'} />
                    )
                }}
            />

            <Tab.Screen
                name={"Liked"}
                component={LikedScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="heart-o" size={25} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name={"Orders"}
                component={OrderScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="briefcase" size={25} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name={"Profile"}
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Fontisto
                            name="person" size={25} color={color} />
                    )
                }}
            />
        </Tab.Navigator >
    )
}
export default HomeTabNavigation;