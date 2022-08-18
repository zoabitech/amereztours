import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// import ConfirmEmailScreen from '../screens/AuthenticationScreens/ConfirmEmailScreen';
// import ForgotPasswordScreen from '../screens/AuthenticationScreens/ForgotPasswordScreen';
import SignInScreen from '../screens/AuthenticationScreens/SignInScreen';
import SignUpScreen from '../screens/AuthenticationScreens/SignUpScreen';
import NewPasswordScreen from '../screens/AuthenticationScreens/NewPasswordScreen';
import BottomTabNavigation from './HomeTabNavigation';
import AttractionPostInfoScreen from '../screens/AttractionPostInfoScreen/AttractionPostInfoScreen';
import CarPostInfoScreen from '../screens/CarPostInfoScreen/CarPostInfoScreen';
const Stack = createNativeStackNavigator();

const Navigation = (props) => {
    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name={"home"} component={BottomTabNavigation} />
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                {/* <Stack.Screen name="Confirm" component={ConfirmEmailScreen} /> */}
                {/* <Stack.Screen name="ForgetPassword" component={ForgotPasswordScreen} /> */}
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
                <Stack.Screen name="PostInfo" component={AttractionPostInfoScreen} />
                <Stack.Screen name="CarInfoPost" component={CarPostInfoScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Navigation;