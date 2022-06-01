import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ConfirmEmailScreen from '../screens/AuthenticationScreens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/AuthenticationScreens/ForgotPasswordScreen';
import SignInScreen from '../screens/AuthenticationScreens/SignInScreen';
import SignUpScreen from '../screens/AuthenticationScreens/SignUpScreen';
import NewPasswordScreen from '../screens/AuthenticationScreens/NewPasswordScreen';
import BottomTabNavigation from './HomeTabNavigation';

const Stack = createNativeStackNavigator();

const Navigation = (props) => {
    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name={"home"} component={BottomTabNavigation} />
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SinUp" component={SignUpScreen} />
                {/* <Stack.Screen name="Confirm" component={ConfirmEmailScreen} /> */}
                {/* <Stack.Screen name="ForgetPassword" component={ForgotPasswordScreen} /> */}
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Navigation;