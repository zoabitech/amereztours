import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CarSearchScreen from '../screens/CarSerchScreen/CarSearchScreen';
import AtractionSearchScreen from '../screens/AtractionSearchScreen'

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name={"Cars"} component={CarSearchScreen} />
            <TopTab.Screen name={"Atraction"} component={AtractionSearchScreen} />
        </TopTab.Navigator>
    )
}

export default TopTabNavigator