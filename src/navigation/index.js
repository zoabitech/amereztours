import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import BottomTabNavigation from './HomeTabNavigation';

const Stack = createNativeStackNavigator();

const Navigation = (props) => {
    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name={"home"} component={BottomTabNavigation} />
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SinUp" component={SignUpScreen} />
                <Stack.Screen name="Confirm" component={ConfirmEmailScreen} />
                <Stack.Screen name="ForgetPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Navigation;