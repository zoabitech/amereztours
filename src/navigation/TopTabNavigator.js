import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CarSearchScreen from '../screens/CarSerchScreen/CarSearchScreen';
import AtractionSearchScreen from '../screens/AtractionSearchScreen'

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    return (
        <TopTab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12 },
                tabBarActiveTintColor: '#005B99',
                tabBarInactiveTintColor: 'gray',
            }
            } >
            <TopTab.Screen
                name={"Atraction"}
                component={AtractionSearchScreen}
            />

            <TopTab.Screen
                name={"Car rental"}
                component={CarSearchScreen}
            />
        </TopTab.Navigator >
    )
}

export default TopTabNavigator