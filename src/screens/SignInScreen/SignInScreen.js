import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react';
import Logo from '../../../assets/images/company_logo.png'
import CustomImput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import ModalInjection from 'react-native/Libraries/Modal/ModalInjection';
const SignInScreen = () => {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { height } = useWindowDimensions();
    const onSignInPressed = () => {
        console.warn('Sign In');
    }
    const onForgotPasswordPressed = () => {
        console.warn('Forgot Password pressed');
    }
    const onSignInwithGoogle = () => {
        console.warn('onSignInwithGoogle');
    }
    const onSignInwithFacebook = () => {
        console.warn('onSignInwithFacebook');
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode="contain" />
                <Text style={styles.log}>Login in your account</Text>
                <CustomImput
                    placeholder="E-mail"
                    value={Email}
                    setValue={setEmail} />
                <CustomImput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true} />
                <CustomButton
                    text="Sign In"
                    onPress={onSignInPressed} />
                <CustomButton
                    text="Forgot Password"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY" />
                <CustomButton
                    text="Sign In with Google"
                    onPress={onSignInwithGoogle}
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                />
                <CustomButton
                    text="Sign In with Facebook"
                    onPress={onSignInwithFacebook}
                    bgColor="#E7EAF4"
                    fgColor="#4765A9"
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 30,
    },
    logo: {
        width: '70%',
        maxWidth: 500,
        maxHeight: 200,
    },
    log: {
        fontWeight: '300'
    }
})
export default SignInScreen