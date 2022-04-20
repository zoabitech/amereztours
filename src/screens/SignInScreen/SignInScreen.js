import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react';
import Logo from '../../../assets/images/company_logo.png'
import CustomImput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import ModalInjection from 'react-native/Libraries/Modal/ModalInjection';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { height } = useWindowDimensions();

    const navigation = useNavigation();

    const onSignInPressed = () => {
        //validate user
        navigation.navigate('Home');
    }
    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgetPassword')
    }
    const onDontHaveAnccountPressed = () => {
        navigation.navigate("SinUp")
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode="contain" />
                <Text style={styles.title}>Login in your account</Text>
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
                <SocialSignInButtons />
                <CustomButton
                    text="Dont have anccount? create one"
                    onPress={onDontHaveAnccountPressed}
                    type="TERTIARY" />
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
    title: {
        fontWeight: '300',
        color: '#005B99',
    }
})
export default SignInScreen